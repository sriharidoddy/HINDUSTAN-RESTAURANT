import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Star, Banknote, MapPin, CheckCircle2 } from 'lucide-react';

const REASONS = [
  {
    icon: Utensils,
    title: 'Delicious Food',
    description: 'Authentic Indian biryanis, richly spiced non-veg curries, and freshly baked tandoor breads prepared daily.',
    highlight: 'Authentic Recipes',
    emoji: '🍛',
  },
  {
    icon: Star,
    title: '4.1 Rated',
    description: 'Trusted and appreciated by 89+ verified local reviews for consistent taste and attentive hospitality.',
    highlight: '89+ Happy Diners',
    emoji: '⭐',
  },
  {
    icon: Banknote,
    title: 'Affordable Pricing',
    description: 'Wholesome, generous dining and takeaway portions budget-friendly at ₹1–200 per person.',
    highlight: 'Unbeatable Value',
    emoji: '💰',
  },
  {
    icon: MapPin,
    title: 'Convenient Location',
    description: 'Conveniently situated near Amma Hospital in Kosgi, easy to reach for both quick takeaways and relaxed dine-in.',
    highlight: 'Heart of Kosgi',
    emoji: '📍',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#f4eee3] relative overflow-hidden border-t border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-600/30 text-amber-900 text-xs font-bold uppercase tracking-widest mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
            <span>EXCELLENCE IN EVERY BITE</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-normal">
            We take pride in bringing flavorful authentic food and warm Indian dining experiences to Kosgi.
          </p>
        </div>

        {/* 4 Feature Cards - Pure White on Warm Beige */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative p-7 rounded-2xl bg-white border border-stone-200/90 hover:border-amber-500/40 transition-all duration-300 transform hover:-translate-y-1.5 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl">{reason.emoji}</span>
                  </div>

                  <h3 className="font-serif-heading text-xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors mb-2">
                    {reason.title}
                  </h3>

                  <p className="text-stone-600 text-sm leading-relaxed mb-6 font-normal">
                    {reason.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <span className="text-xs font-bold text-amber-800 tracking-wide uppercase">
                    {reason.highlight}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
