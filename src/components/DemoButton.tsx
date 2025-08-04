
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/constants/translations';

interface DemoButtonProps {
  className?: string;
  fullWidth?: boolean;
  text?: string;
}

const DemoButton: React.FC<DemoButtonProps> = ({ 
  className, 
  fullWidth = false,
  text
}) => {
  const { language } = useLanguage();
  const buttonText = text || getTranslation('header.demo', language);

  return (
    <a
      href="https://calendly.com/airprocess/airprocess-live-demo"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "bg-primary-light hover:bg-primary-dark text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 px-6 py-3",
        fullWidth ? "w-full" : "inline-flex",
        className
      )}
    >
      {buttonText}
      <ArrowRight size={18} />
    </a>
  );
};

export default DemoButton;
