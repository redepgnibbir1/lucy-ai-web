import { Monitor } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface MockupPlaceholderProps {
  className?: string;
}

const MockupPlaceholder = ({ className = '' }: MockupPlaceholderProps) => {
  const { t } = useLanguage();

  return (
    <div 
      className={`
        relative aspect-[4/3] w-full rounded-xl overflow-hidden
        bg-gradient-to-br from-gray-50 to-gray-100
        border border-gray-200
        flex flex-col items-center justify-center gap-3
        ${className}
      `}
    >
      <Monitor className="w-12 h-12 text-gray-300" />
      <span className="text-sm text-gray-400 font-sans">
        {t('cp.mockup.placeholder')}
      </span>
    </div>
  );
};

export default MockupPlaceholder;
