
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface LanguageSelectorProps {
  isScrolled?: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ isScrolled = false }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn(
        "flex items-center gap-1 text-sm font-medium transition-colors",
        isScrolled ? "text-gray-700 hover:text-primary-light" : "text-white hover:text-gray-200"
      )}>
        <Globe size={16} className={cn(
          isScrolled ? "text-gray-700" : "text-white"
        )} />
        <span className="hidden md:block">{language === 'fr' ? 'Français' : 'English'}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white">
        <DropdownMenuItem 
          onClick={() => setLanguage('fr')}
          className={`cursor-pointer ${language === 'fr' ? 'text-primary font-medium' : ''}`}
        >
          Français
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('en')}
          className={`cursor-pointer ${language === 'en' ? 'text-primary font-medium' : ''}`}
        >
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
