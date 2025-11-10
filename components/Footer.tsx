import React from 'react';
import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading text-primary-light">
              Graceful Pet Care
            </h3>
            <p className="text-gray-300 mb-4">
              Over 15 years of caring for pets in Ashford and surrounding villages.
              Fully insured, reliable, and dedicated to giving your pets the love they deserve.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary-light transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary-light transition-colors">
                  About Grace
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-primary-light transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-primary-light mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:hello@gracefulpetcare.co.uk"
                  className="text-gray-300 hover:text-primary-light transition-colors"
                >
                  hello@gracefulpetcare.co.uk
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-light mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-300">
                  Ashford and surrounding villages, Kent
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Graceful Pet Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
