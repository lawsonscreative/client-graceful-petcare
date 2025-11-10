import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  variant?: 'default' | 'gradient';
}

export default function PageHeader({ title, subtitle, variant = 'default' }: PageHeaderProps) {
  const bgClass = variant === 'gradient'
    ? 'bg-gradient-to-b from-primary/10 via-primary/5 to-cream'
    : 'bg-gradient-to-br from-cream via-primary/5 to-cream/80';

  return (
    <section className={`${bgClass} py-16 lg:py-24 border-b border-primary/10`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-heading leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
