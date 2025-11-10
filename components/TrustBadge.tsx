import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TrustBadgeProps {
  icon: LucideIcon;
  title: string;
  description?: string;
}

export default function TrustBadge({ icon: Icon, title, description }: TrustBadgeProps) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-primary" aria-hidden="true" />
      </div>
      <h3 className="font-bold text-gray-800 mb-2 font-heading">{title}</h3>
      {description && (
        <p className="text-sm text-gray-600">{description}</p>
      )}
    </div>
  );
}
