import { useState } from 'react';
import { Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';

interface VideoPlayerProps {
  className?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
  videoPath?: string; // Path in storage bucket, e.g., "hero-video.mp4"
  posterPath?: string; // Optional poster image path
  autoPlay?: boolean; // Start playing automatically
}

const VideoPlayer = ({ 
  className = '', 
  aspectRatio = '16:9',
  videoPath,
  posterPath,
  autoPlay = false
}: VideoPlayerProps) => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [hasError, setHasError] = useState(false);
  
  const aspectClasses = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square'
  };

  // Get public URL from Supabase Storage
  const getVideoUrl = () => {
    if (!videoPath) return null;
    const { data } = supabase.storage.from('videos').getPublicUrl(videoPath);
    return data?.publicUrl;
  };

  const getPosterUrl = () => {
    if (!posterPath) return undefined;
    const { data } = supabase.storage.from('videos').getPublicUrl(posterPath);
    return data?.publicUrl;
  };

  const videoUrl = getVideoUrl();

  // Show placeholder if no video or error
  if (!videoUrl || hasError) {
    return (
      <div 
        className={`
          relative ${aspectClasses[aspectRatio]} w-full rounded-2xl overflow-hidden
          bg-gradient-to-br from-gray-100 to-gray-200
          flex items-center justify-center
          group cursor-pointer
          transition-all duration-300 hover:shadow-lg
          ${className}
        `}
      >
        <div className="
          w-20 h-20 rounded-full
          bg-lucy-neon-yellow
          flex items-center justify-center
          transition-transform duration-300 group-hover:scale-110
          shadow-lg
        ">
          <Play className="w-8 h-8 text-lucy-black ml-1" fill="currentColor" />
        </div>
        
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-500 font-sans">
          {t('cp.hero.video.placeholder')}
        </span>
      </div>
    );
  }

  return (
    <div 
      className={`
        relative ${aspectClasses[aspectRatio]} w-full rounded-2xl overflow-hidden
        bg-gradient-to-br from-gray-100 to-gray-200
        ${className}
      `}
    >
      {!isPlaying ? (
        <div 
          className="absolute inset-0 flex items-center justify-center cursor-pointer group"
          onClick={() => setIsPlaying(true)}
        >
          {posterPath && (
            <img 
              src={getPosterUrl()} 
              alt="Video thumbnail" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <div className="
            w-20 h-20 rounded-full
            bg-lucy-neon-yellow
            flex items-center justify-center
            transition-transform duration-300 group-hover:scale-110
            shadow-lg
            z-10
          ">
            <Play className="w-8 h-8 text-lucy-black ml-1" fill="currentColor" />
          </div>
        </div>
      ) : (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoUrl}
          poster={getPosterUrl()}
          controls
          autoPlay
          muted={autoPlay}
          loop
          playsInline
          onError={() => setHasError(true)}
        >
          Din webbläsare stöder inte videouppspelning.
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
