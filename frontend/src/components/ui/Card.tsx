import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  dark?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = true,
  dark = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        'rounded-3xl p-6 sm:p-8 transition-all duration-300 border',
        dark
          ? 'bg-[#0A0E0C]/90 text-[#FAF8F5] border-white/10 shadow-2xl'
          : 'bg-white/80 backdrop-blur-md text-[#0A0E0C] border-[#D4AF37]/20 shadow-xl shadow-[#D4AF37]/5',
        hoverEffect && 'hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#D4AF37]/40',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
