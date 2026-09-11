import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { SIGNATURE_FAVOURITES } from '../data/restaurantData';

export const Specialities: React.FC = () => {
  return (
    <section id="specialities" className="py-20 lg:py-28 bg-[#ffffff] relative border-t border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-600/30 text-amber-900 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>AUTHENTIC SPECIALITIES</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
            Our Signature Favourites
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-normal">
            Prepared fresh using time-honoured Indian recipes and authentic fragrant spices.
          </p>
        </div>

        {/* 4 Signature Cards - Bright Premium Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SIGNATURE_FAVOURITES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative rounded-2xl overflow-hidden bg-white border border-stone-200/90 hover:border-amber-500/50 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_35px_rgba(217,119,6,0.12)] transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col h-full"
            >
              {/* Image Container with Subtle Hover Zoom (scale 1.05) */}
              <div className="relative h-60 w-full overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Subtle Gradient Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Golden Badge */}
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-amber-500/30 text-amber-900 text-[11px] font-bold tracking-wide uppercase shadow-sm">
                  {item.badge}
                </span>

                {/* Veg / Non-Veg Indicator */}
                <div className="absolute top-3 right-3 w-5 h-5 rounded-sm bg-white/95 backdrop-blur-sm border border-stone-300 flex items-center justify-center shadow-sm">
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      item.isVeg ? 'bg-emerald-600' : 'bg-red-600'
                    }`}
                  />
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 flex flex-col justify-between flex-grow bg-white">
                <div>
                  <h3 className="font-serif-heading text-xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors mb-2">
                    {item.name}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
                  <span className="text-amber-800 text-xs font-bold bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/80">
                    {item.priceText}
                  </span>
                  <a
                    href="#menu"
                    className="inline-flex items-center gap-1 text-xs text-stone-700 group-hover:text-amber-700 transition-colors font-bold"
                  >
                    <span>View Menu</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
