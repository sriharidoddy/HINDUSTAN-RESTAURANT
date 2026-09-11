import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Phone, ArrowRight, Star, Users, Banknote, UtensilsCrossed, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 lg:py-0 bg-[#faf6ef]"
    >
      {/* Bright Food Background Image Container with Ken Burns subtle scale */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1, opacity: 0 }}
          animate={{
            scale: shouldReduceMotion ? 1 : [1, 1.05, 1],
            opacity: 1,
          }}
          transition={{
            opacity: { duration: 1.0, ease: 'easeOut' },
            scale: {
              duration: 22,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            },
          }}
          className="w-full h-full"
        >
          <img
            src="/images/hero-biryani.jpg"
            alt="Fresh Chicken Biryani in Traditional Handi with Aromatic Basmati Rice at Hindustan Restaurant Kosgi"
            className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05] saturate-[1.1]"
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>

        {/* Bright Warm Cream & Ivory Overlays for High Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf6ef]/98 via-[#faf6ef]/92 to-[#faf6ef]/70 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf6ef] via-[#faf6ef]/30 to-[#faf6ef]/60" />
        <div className="absolute inset-0 bg-amber-100/10 mix-blend-color pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-left">
            
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-600/30 text-amber-900 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>WELCOME TO HINDUSTAN RESTAURANT</span>
            </motion.div>

            {/* Restaurant Title in Deep Charcoal / Warm Brown */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-serif-heading text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#1c1917] mb-2 leading-[1.1]"
            >
              HINDUSTAN <span className="text-amber-700">RESTAURANT</span>
            </motion.h1>

            {/* Telugu Title in Rich Terracotta */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-telugu text-xl sm:text-2xl lg:text-3xl font-bold text-amber-800 tracking-wide mb-4"
            >
              హిందూస్తాన్ రెస్టారెంట్
            </motion.div>

            {/* Main Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-serif-heading text-xl sm:text-2xl text-stone-800 font-medium italic mb-3 tracking-wide"
            >
              {RESTAURANT_INFO.tagline}
            </motion.p>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-stone-700 text-base sm:text-lg max-w-2xl leading-relaxed mb-8 font-normal"
            >
              {RESTAURANT_INFO.description}
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
            >
              <a
                href="#menu"
                className="group flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-base shadow-[0_4px_20px_rgba(217,119,6,0.25)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="tel:09441627556"
                className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white hover:bg-stone-50 text-stone-900 font-bold text-base border-2 border-amber-600/30 hover:border-amber-600/60 shadow-md transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
              >
                <Phone className="w-4 h-4 text-amber-700 fill-amber-700" />
                <span>☎ Call Now</span>
              </a>
            </motion.div>

            {/* Hero Information Row - Bright Theme Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="w-full max-w-2xl grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200/90 shadow-[0_10px_25px_rgba(0,0,0,0.06)]"
            >
              {/* Rating */}
              <div className="flex items-center gap-3 pr-2">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <div className="text-sm font-bold text-stone-900 leading-tight">4.1 Rating</div>
                  <div className="text-[11px] text-stone-500">Google Verified</div>
                </div>
              </div>

              {/* Reviews */}
              <div className="flex items-center gap-3 sm:border-l sm:border-stone-200 sm:pl-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <div className="text-sm font-bold text-stone-900 leading-tight">89+ Reviews</div>
                  <div className="text-[11px] text-stone-500">Local Diners</div>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 sm:border-l sm:border-stone-200 sm:pl-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
                  <Banknote className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <div className="text-sm font-bold text-stone-900 leading-tight">₹1–200</div>
                  <div className="text-[11px] text-stone-500">Per Person</div>
                </div>
              </div>

              {/* Services */}
              <div className="flex items-center gap-3 sm:border-l sm:border-stone-200 sm:pl-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
                  <UtensilsCrossed className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <div className="text-sm font-bold text-stone-900 leading-tight">Dine-in</div>
                  <div className="text-[11px] text-stone-500">& Takeaway</div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Floating Food Card Element - Bright White Theme */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 justify-center items-center relative">
            <motion.div
              animate={{
                y: shouldReduceMotion ? 0 : [-6, 6, -6],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-full max-w-sm"
            >
              {/* Subtle warm glow */}
              <div className="absolute -inset-2 rounded-3xl bg-amber-400/20 blur-xl opacity-80" />
              
              <div className="relative rounded-2xl overflow-hidden bg-white border border-amber-500/30 shadow-2xl p-3">
                <div className="relative h-64 w-full rounded-xl overflow-hidden bg-stone-100">
                  <img
                    src="/images/hero-biryani.jpg"
                    alt="Signature Handi Biryani"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Chef's Pride
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-serif-heading font-bold text-lg text-stone-900">
                      Special Chicken Biryani
                    </h3>
                    <span className="flex items-center text-amber-600 text-xs font-bold gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> 4.1
                    </span>
                  </div>
                  <p className="text-stone-600 text-xs line-clamp-2 mb-3">
                    Aromatic basmati rice slow cooked with tender chicken, caramelized onions & fresh mint.
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-xs">
                    <span className="text-amber-800 font-semibold">Kosgi Speciality</span>
                    <span className="text-stone-800 font-bold bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                      Price on request
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
