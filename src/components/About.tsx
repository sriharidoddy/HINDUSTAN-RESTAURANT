import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#faf6ef] relative overflow-hidden border-t border-amber-900/10">
      {/* Subtle Warm Background Glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Realistic Atmosphere Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-600/25 shadow-[0_20px_45px_rgba(50,30,10,0.12)] group bg-white">
              <img
                src={`${import.meta.env.BASE_URL}images/restaurant-ambience.jpg`}
                alt="Welcoming dining ambiance at Hindustan Restaurant Kosgi"
                className="w-full h-[420px] sm:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Inset Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200/90 shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-amber-800 text-xs uppercase font-bold tracking-widest">Kosgi, Telangana</p>
                  <p className="text-stone-900 font-serif-heading text-lg font-bold">Authentic Indian Dining</p>
                </div>
                <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>Dine-in & Takeaway</span>
                </div>
              </div>
            </div>

            {/* Accent Border Frame Decoration */}
            <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-amber-600/40 rounded-tl-2xl pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-amber-600/40 rounded-br-2xl pointer-events-none" />
          </motion.div>

          {/* Right Column: Narrative & Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-600/30 text-amber-900 text-xs font-bold uppercase tracking-widest mb-3">
              <span>ABOUT US</span>
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-6 leading-tight">
              Taste That Brings People Together
            </h2>

            <p className="text-stone-700 text-base sm:text-lg leading-relaxed mb-8 font-normal">
              {RESTAURANT_INFO.aboutStory}
            </p>

            {/* Three Signature Features - White Cards with Soft Shadows */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8">
              
              <div className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🍛</div>
                <h4 className="text-stone-900 font-bold text-sm mb-1">Authentic Flavours</h4>
                <p className="text-stone-600 text-xs leading-relaxed">Traditional spices and recipes curated with care.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">🍗</div>
                <h4 className="text-stone-900 font-bold text-sm mb-1">Fresh & Delicious</h4>
                <p className="text-stone-600 text-xs leading-relaxed">Quality ingredients cooked fresh for every service.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">💰</div>
                <h4 className="text-stone-900 font-bold text-sm mb-1">Affordable Pricing</h4>
                <p className="text-stone-600 text-xs leading-relaxed">₹1–200 per person satisfying meal experience.</p>
              </div>

            </div>

            {/* Callout quote */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-amber-50 border-l-4 border-amber-600 text-stone-800 text-sm font-medium italic">
              "Dedicated to serving authentic Indian hospitality and hearty, mouth-watering food right here in Kosgi."
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
