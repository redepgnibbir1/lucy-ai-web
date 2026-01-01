import { useState, useRef } from 'react';
import { Upload, X, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface VideoUploaderProps {
  onUploadComplete?: (path: string, url: string) => void;
  maxSizeMB?: number;
  acceptedFormats?: string[];
}

const VideoUploader = ({ 
  onUploadComplete,
  maxSizeMB = 500,
  acceptedFormats = ['video/mp4', 'video/webm', 'video/quicktime', 'video/x-msvideo']
}: VideoUploaderProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!acceptedFormats.includes(file.type)) {
      toast({
        title: "Ogiltigt format",
        description: `Tillåtna format: MP4, WebM, MOV, AVI`,
        variant: "destructive"
      });
      return;
    }

    // Validate file size
    const sizeMB = file.size / (1024 * 1024);
    if (sizeMB > maxSizeMB) {
      toast({
        title: "Filen är för stor",
        description: `Max storlek är ${maxSizeMB} MB. Din fil är ${sizeMB.toFixed(1)} MB.`,
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);
    setFileName(file.name);

    try {
      // Create unique filename
      const fileExt = file.name.split('.').pop();
      const uniqueName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      // Simulate progress for better UX (Supabase doesn't provide real progress)
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => Math.min(prev + 10, 90));
      }, 500);

      const { data, error } = await supabase.storage
        .from('videos')
        .upload(uniqueName, file, {
          cacheControl: '3600',
          upsert: false
        });

      clearInterval(progressInterval);

      if (error) {
        throw error;
      }

      // Get public URL
      const { data: urlData } = supabase.storage.from('videos').getPublicUrl(data.path);
      
      setUploadProgress(100);
      setUploadedUrl(urlData.publicUrl);
      
      toast({
        title: "Uppladdning klar!",
        description: `${file.name} har laddats upp.`
      });

      onUploadComplete?.(data.path, urlData.publicUrl);

    } catch (error: any) {
      console.error('Upload error:', error);
      toast({
        title: "Uppladdning misslyckades",
        description: error.message || "Ett fel uppstod vid uppladdning.",
        variant: "destructive"
      });
      setUploadProgress(0);
      setFileName(null);
    } finally {
      setIsUploading(false);
    }
  };

  const handleReset = () => {
    setUploadedUrl(null);
    setFileName(null);
    setUploadProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
      <input
        ref={fileInputRef}
        type="file"
        accept={acceptedFormats.join(',')}
        onChange={handleFileSelect}
        className="hidden"
        disabled={isUploading}
      />

      {!uploadedUrl ? (
        <div className="space-y-4">
          <div 
            onClick={() => !isUploading && fileInputRef.current?.click()}
            className={`
              border-2 border-dashed rounded-xl p-8
              flex flex-col items-center justify-center gap-4
              transition-colors cursor-pointer
              ${isUploading 
                ? 'border-gray-300 bg-gray-50 cursor-not-allowed' 
                : 'border-gray-300 hover:border-lucy-neon-yellow hover:bg-lucy-neon-yellow/5'
              }
            `}
          >
            {isUploading ? (
              <Loader2 className="w-12 h-12 text-gray-400 animate-spin" />
            ) : (
              <Upload className="w-12 h-12 text-gray-400" />
            )}
            
            <div className="text-center">
              <p className="font-sans text-lg text-gray-700">
                {isUploading ? 'Laddar upp...' : 'Klicka för att välja video'}
              </p>
              <p className="font-sans text-sm text-gray-500 mt-1">
                MP4, WebM, MOV, AVI (max {maxSizeMB} MB)
              </p>
            </div>
          </div>

          {isUploading && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span className="truncate max-w-[200px]">{fileName}</span>
                <span>{uploadProgress}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-lucy-neon-yellow transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="font-sans text-sm font-medium text-green-800">Uppladdning klar!</p>
              <p className="font-sans text-xs text-green-600 truncate">{fileName}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleReset}
              className="flex-shrink-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="font-sans text-xs text-gray-500 mb-1">Video URL:</p>
            <p className="font-mono text-xs text-gray-700 break-all select-all">{uploadedUrl}</p>
          </div>

          <Button 
            onClick={() => fileInputRef.current?.click()}
            variant="outline"
            className="w-full"
          >
            Ladda upp en annan video
          </Button>
        </div>
      )}
    </div>
  );
};

export default VideoUploader;
