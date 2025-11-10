'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-cream last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-primary transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-bold text-gray-900 pr-8 font-heading">
          {question}
        </span>
        <ChevronDown
          className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-700 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}
