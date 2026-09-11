import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Phone, Flame, Sparkles } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import type { MenuItem } from '../data/restaurantData';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Biryani');

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#f8f4ec] relative border-t border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-600/30 text-amber-900 text-xs font-bold uppercase tracking-widest mb-3">
            <Utensils className="w-3.5 h-3.5 text-amber-700" />
            <span>AUTHENTIC TASTE OF KOSGI</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
            Our Restaurant Menu
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-normal max-w-2xl mx-auto">
            From dum biryanis and rich meat curries to fresh tandoori breads, explore our delicious culinary offerings.
          </p>
        </div>

        {/* Category Tabs with Smooth Active State */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 scrollbar-none gap-2 px-2">
          {MENU_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-md shadow-amber-500/20'
                    : 'text-stone-700 hover:text-stone-900 bg-white border border-stone-200/90 hover:border-amber-300 shadow-sm'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeMenuPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-amber-600"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid - Bright Cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: MenuItem) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl overflow-hidden bg-white border border-stone-200/90 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_rgba(217,119,6,0.1)]"
              >
                <div>
                  {/* Food Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                    {/* Veg / Non-Veg Standard FSSAI Indicator */}
                    <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-white/95 backdrop-blur-sm border border-stone-200 flex items-center gap-1.5 shadow-sm">
                      <div className="w-3.5 h-3.5 border border-current p-[1.5px] rounded-[2px] flex items-center justify-center">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            item.isVeg ? 'bg-emerald-600 border-emerald-600' : 'bg-red-600 border-red-600'
                          }`}
                        />
                      </div>
                      <span className="text-[10px] uppercase font-bold text-stone-800">
                        {item.isVeg ? 'Veg' : 'Non-Veg'}
                      </span>
                    </div>

                    {/* Spicy / Signature Tag */}
                    <div className="absolute top-3 right-3 flex items-center gap-1">
                      {item.isSignature && (
                        <span className="flex items-center gap-1 text-[10px] uppercase font-bold px-2.5 py-1 rounded-md bg-amber-500 text-white shadow-sm">
                          <Sparkles className="w-3 h-3" /> Special
                        </span>
                      )}
                      {item.isSpicy && (
                        <span className="flex items-center gap-0.5 text-[10px] uppercase font-bold px-2 py-1 rounded-md bg-red-600 text-white shadow-sm">
                          <Flame className="w-3 h-3" /> Spicy
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-5">
                    <h3 className="font-serif-heading text-lg font-bold text-stone-900 group-hover:text-amber-700 transition-colors mb-2">
                      {item.name}
                    </h3>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer with Price on Request & Direct Call Now */}
                <div className="px-5 pb-5 pt-3 border-t border-stone-100 flex items-center justify-between bg-stone-50/50">
                  <div>
                    <span className="text-amber-800 font-bold text-xs bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/80">
                      {item.priceText}
                    </span>
                  </div>
                  <a
                    href="tel:09441627556"
                    className="flex items-center gap-1.5 text-xs text-stone-800 hover:text-amber-800 font-bold px-3 py-1.5 rounded-lg bg-white border border-stone-200 shadow-sm hover:border-amber-300 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-700 fill-amber-700" />
                    <span>☎ Call Now</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Menu Note Box */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-xs sm:text-sm text-stone-600">
            <span className="text-amber-800 font-bold">Note:</span> Prices are subject to daily availability and seasonal market produce. Call directly for current rates and hot takeaway parcel orders.
          </div>
          <a
            href="tel:09441627556"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs sm:text-sm font-bold transition-all duration-300 shadow-md shadow-amber-500/20"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>☎ Call Now: {RESTAURANT_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
