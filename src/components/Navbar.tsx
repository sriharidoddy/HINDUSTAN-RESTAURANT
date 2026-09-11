import React, { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fdfbf7]/95 backdrop-blur-md py-3.5 shadow-[0_4px_25px_rgba(50,35,20,0.06)] border-b border-amber-900/10'
          : 'bg-gradient-to-b from-[#fdfbf7]/90 via-[#fdfbf7]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex flex-col group">
          <span className="font-serif-heading text-lg sm:text-2xl font-bold tracking-wider text-stone-900 group-hover:text-amber-700 transition-colors">
            {RESTAURANT_INFO.name}
          </span>
          <span className="text-xs sm:text-sm font-telugu text-amber-800 font-semibold tracking-wide">
            {RESTAURANT_INFO.teluguName}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-stone-700 hover:text-amber-700 transition-colors duration-200 tracking-wide uppercase text-[12px] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-600 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Call CTA */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href="tel:09441627556"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm shadow-md shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span className="tracking-wide">☎ Call Now</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-stone-800 hover:text-amber-700 hover:bg-stone-100 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-amber-700" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[64px] bg-[#fdfbf7]/98 backdrop-blur-xl border-t border-amber-900/10 flex flex-col justify-between p-6 transition-all duration-300 shadow-2xl">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-stone-800 hover:text-amber-700 py-2 border-b border-stone-200/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 pb-8 flex flex-col gap-3">
            <a
              href="tel:09441627556"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-base shadow-lg shadow-amber-500/25"
            >
              <Phone className="w-5 h-5 fill-white" />
              <span>☎ Call Now (094416 27556)</span>
            </a>
            <a
              href={RESTAURANT_INFO.mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white text-stone-800 font-bold text-base border border-stone-200 shadow-sm"
            >
              <MapPin className="w-5 h-5 text-amber-700" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
