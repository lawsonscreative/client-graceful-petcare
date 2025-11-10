import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  petType: string;
  text: string;
  rating: number;
}

export default function TestimonialCard({ name, location, petType, text, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg h-full border border-cream">
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
        ))}
      </div>
      <p className="text-gray-700 leading-relaxed mb-6 italic">
        &ldquo;{text}&rdquo;
      </p>
      <div className="border-t border-cream pt-4">
        <p className="font-bold text-gray-800">{name}</p>
        <p className="text-sm text-gray-600">{location}</p>
        <p className="text-sm text-primary font-semibold mt-1">{petType}</p>
      </div>
    </div>
  );
}
