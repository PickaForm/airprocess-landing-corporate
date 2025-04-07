
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface DemoButtonProps {
  className?: string;
  fullWidth?: boolean;
}

const DemoButton: React.FC<DemoButtonProps> = ({ className = '', fullWidth = false }) => {
  return (
    <Button 
      className={`bg-primary-light hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 text-base ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      Bookez une démo
      <ArrowRight className="ml-2 w-4 h-4" />
    </Button>
  );
};

export default DemoButton;
