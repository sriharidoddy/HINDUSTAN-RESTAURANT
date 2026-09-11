import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink, ThumbsUp } from 'lucide-react';
import { CUSTOMER_REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#fbf7ed] relative border-t border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Aggregate Rating */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-600/30 text-amber-900 text-xs font-bold uppercase tracking-widest mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>GUEST EXPERIENCES</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-3">
              Real Diners, Real Flavours
            </h2>
            <p className="text-stone-600 text-base sm:text-lg font-normal">
              Here is what genuine guests in Kosgi say about our biryanis, curries, and friendly service.
            </p>
          </div>

          {/* Rating Badge Box - Bright White */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-end gap-6 bg-white p-6 rounded-2xl border border-stone-200/90 shadow-sm">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <span className="font-serif-heading text-4xl sm:text-5xl font-bold text-amber-600">
                  {RESTAURANT_INFO.rating}
                </span>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < 4 ? 'fill-amber-500 text-amber-500' : 'fill-amber-300 text-amber-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-xs font-semibold text-stone-600">
                Based on <span className="text-stone-900 font-bold">{RESTAURANT_INFO.reviewsCount}</span> Google verified reviews
              </p>
            </div>

            <a
              href={RESTAURANT_INFO.writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs font-bold transition-all shadow-md shadow-amber-500/20 whitespace-nowrap"
            >
              <span>Write a Review</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 3 Prominent Verified Review Cards - Bright White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {CUSTOMER_REVIEWS.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative p-7 rounded-2xl bg-white border border-stone-200/90 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between shadow-[0_6px_25px_rgba(0,0,0,0.04)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(rev.rating)
                            ? 'fill-amber-500 text-amber-500'
                            : 'fill-amber-300 text-amber-400'
                        }`}
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-amber-300" />
                </div>

                <p className="text-stone-700 text-base italic leading-relaxed mb-6 font-normal">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="text-stone-900 font-serif-heading font-bold text-sm">
                    {rev.author}
                  </h4>
                  <p className="text-[11px] text-stone-500 font-medium">{rev.date}</p>
                </div>

                {rev.highlightDish && (
                  <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/80">
                    {rev.highlightDish}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust banner */}
        <div className="flex flex-wrap items-center justify-center gap-6 py-4 px-6 rounded-2xl bg-white border border-stone-200/90 text-center text-xs text-stone-600 shadow-sm">
          <span className="flex items-center gap-1.5 font-semibold text-stone-800">
            <ThumbsUp className="w-3.5 h-3.5 text-amber-600" />
            100% Authentic Customer Feedback
          </span>
          <span className="hidden sm:inline text-stone-300">•</span>
          <span>Fresh Preparation Every Morning</span>
          <span className="hidden sm:inline text-stone-300">•</span>
          <span>Serving Families & Takeaway Lovers in Kosgi</span>
        </div>

      </div>
    </section>
  );
};
