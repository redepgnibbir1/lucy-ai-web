import { Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface VideoPlaceholderProps {
  className?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
}

const VideoPlaceholder = ({ className = '', aspectRatio = '16:9' }: VideoPlaceholderProps) => {
  const { t } = useLanguage();
  
  const aspectClasses = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square'
  };

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
      {/* Play button */}
      <div className="
        w-20 h-20 rounded-full
        bg-lucy-neon-yellow
        flex items-center justify-center
        transition-transform duration-300 group-hover:scale-110
        shadow-lg
      ">
        <Play className="w-8 h-8 text-lucy-black ml-1" fill="currentColor" />
      </div>
      
      {/* Placeholder text */}
      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-500 font-sans">
        {t('cp.hero.video.placeholder')}
      </span>
    </div>
  );
};

export default VideoPlaceholder;
