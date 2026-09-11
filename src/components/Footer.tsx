import React from 'react';
import { MapPin, Phone, Utensils, ChevronUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Specialities', href: '#specialities' },
    { label: 'Menu', href: '#menu' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#161412] text-stone-300 pt-16 pb-24 md:pb-16 border-t border-amber-900/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand & Story (Col 1-5) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a href="#home" className="mb-3">
              <span className="font-serif-heading text-2xl font-bold tracking-wider text-white block">
                {RESTAURANT_INFO.name}
              </span>
              <span className="text-base font-telugu text-amber-400 font-bold block mt-0.5">
                {RESTAURANT_INFO.teluguName}
              </span>
            </a>
            
            <p className="font-serif-heading italic text-amber-200/90 text-sm mb-4">
              "{RESTAURANT_INFO.tagline}"
            </p>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Serving Kosgi with rich Hyderabadi-style biryanis, aromatic curries, and warm hospitality at family-friendly prices.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-300 bg-amber-500/15 px-3.5 py-1.5 rounded-full border border-amber-500/30">
              <Utensils className="w-3.5 h-3.5" />
              <span>Dine-in & Takeaway Available</span>
            </div>
          </div>

          {/* Quick Links (Col 6-8) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif-heading text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2.5">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-stone-400 hover:text-amber-400 transition-colors text-xs tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Col 9-12) */}
          <div className="lg:col-span-4">
            <h3 className="font-serif-heading text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2.5">
              Contact & Location
            </h3>
            
            <div className="space-y-3.5 text-xs text-stone-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0 fill-amber-400" />
                <a
                  href="tel:09441627556"
                  className="text-white hover:text-amber-400 font-bold text-sm tracking-wide transition-colors"
                >
                  094416 27556
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={RESTAURANT_INFO.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs font-bold text-amber-400 hover:underline"
                >
                  Open in Google Maps &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            &copy; 2026 {RESTAURANT_INFO.name}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Kosgi, Telangana 509339</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-amber-400 border border-white/5 transition-colors"
              aria-label="Back to Top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
