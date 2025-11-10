import React from 'react';
import Link from 'next/link';
import { Home, Footprints, Clock } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  id: string;
}

const iconMap = {
  home: Home,
  walk: Footprints,
  clock: Clock,
};

export default function ServiceCard({ title, description, icon, id }: ServiceCardProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap] || Home;

  return (
    <Link href={`/services#${id}`}>
      <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full border border-cream">
        <div className="flex flex-col items-center text-center h-full">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
            <IconComponent className="w-8 h-8 text-primary" aria-hidden="true" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 font-heading">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed flex-grow">
            {description}
          </p>
          <div className="mt-6 text-primary font-semibold group-hover:underline">
            Learn more →
          </div>
        </div>
      </div>
    </Link>
  );
}
