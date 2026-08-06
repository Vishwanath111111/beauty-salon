import React from 'react';
import { Star } from 'lucide-react';

export interface RatingProps {
  rating: number;
  maxRating?: number;
}

export const Rating: React.FC<RatingProps> = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex items-center gap-1 text-[#D4AF37]">
      {Array.from({ length: maxRating }).map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};
