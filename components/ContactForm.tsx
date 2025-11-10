'use client';

import React, { useState } from 'react';
import Button from './Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petType: '',
    dates: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // EmailJS integration will go here
    // For now, we'll simulate sending
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        petType: '',
        dates: '',
        message: '',
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all"
          placeholder="John Smith"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all"
          placeholder="john@example.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
          Phone Number (optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all"
          placeholder="07123 456789"
        />
      </div>

      {/* Pet Type */}
      <div>
        <label htmlFor="petType" className="block text-sm font-semibold text-gray-900 mb-2">
          Pet Type *
        </label>
        <select
          id="petType"
          name="petType"
          required
          value={formData.petType}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all"
        >
          <option value="">Select pet type</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="multiple-pets">Multiple Pets</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Dates */}
      <div>
        <label htmlFor="dates" className="block text-sm font-semibold text-gray-900 mb-2">
          Dates Needed
        </label>
        <input
          type="text"
          id="dates"
          name="dates"
          value={formData.dates}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all"
          placeholder="e.g., 15th-20th December"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-4 focus:ring-primary/20 outline-none transition-all resize-none"
          placeholder="Tell me about your pet and what type of care you're looking for..."
        />
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="bg-green-50 text-green-800 px-4 py-3 rounded-xl">
          Thank you for your message! I&rsquo;ll get back to you within 24 hours.
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 text-red-800 px-4 py-3 rounded-xl">
          Sorry, there was an error sending your message. Please email me directly at hello@gracefulpetcare.co.uk
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        onClick={undefined}
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </Button>

      <p className="text-sm text-gray-600 text-center">
        * Required fields
      </p>
    </form>
  );
}
