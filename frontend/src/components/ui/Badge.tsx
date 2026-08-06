import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'gold' | 'rose' | 'emerald' | 'dark' | 'outline';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'gold',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-all';

  const variants = {
    gold: 'bg-[#D4AF37]/15 text-[#9A7B1C] border border-[#D4AF37]/30',
    rose: 'bg-[#E8C5B8]/25 text-[#9E5D4B] border border-[#E8C5B8]/40',
    emerald: 'bg-[#1B3B2B]/15 text-[#1B3B2B] border border-[#1B3B2B]/30',
    dark: 'bg-[#0A0E0C] text-[#FAF8F5] border border-white/20',
    outline: 'border border-[#D4AF37] text-[#D4AF37]',
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
};
