import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Utensils, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactCTA: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden border-t border-amber-900/10 bg-[#faf6ef]">
      {/* Background Image with Light Warm Cream Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-biryani.jpg"
          alt="Delicious Biryani meal waiting at Hindustan Restaurant Kosgi"
          className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.05]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf6ef] via-[#faf6ef]/90 to-[#faf6ef]" />
        <div className="absolute inset-0 bg-amber-100/20 mix-blend-color" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-600/30 text-amber-900 text-xs font-bold uppercase tracking-widest mb-4">
            <Utensils className="w-3.5 h-3.5 text-amber-700" />
            <span>AUTHENTIC DINING AWAITS</span>
          </div>

          <h2 className="font-serif-heading text-4xl sm:text-6xl font-bold text-stone-900 mb-4 tracking-tight">
            Hungry Yet?
          </h2>

          <p className="text-stone-800 text-lg sm:text-2xl font-serif-heading italic mb-8 max-w-2xl mx-auto font-medium">
            Your next delicious meal is waiting for you.
          </p>

          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto mb-10 font-normal">
            Whether you are stepping in for lunch with family or grabbing a hot parcel after a long day, Hindustan Restaurant brings you genuine taste and honest hospitality.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#menu"
              className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-base shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-1 active:translate-y-0"
            >
              <span>View Menu</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="tel:09441627556"
              className="flex items-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-stone-50 text-stone-900 font-bold text-base border-2 border-amber-600/40 shadow-md transition-all transform hover:-translate-y-1 active:translate-y-0"
            >
              <Phone className="w-4 h-4 text-amber-700 fill-amber-700" />
              <span>☎ Call Now ({RESTAURANT_INFO.phone})</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
