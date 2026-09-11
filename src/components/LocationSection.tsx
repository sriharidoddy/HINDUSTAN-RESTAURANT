import React from 'react';
import { MapPin, Phone, Utensils, ShoppingBag, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#f8f4ec] relative border-t border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Updated User Requirement Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-600/30 text-amber-900 text-xs font-bold uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            <span>FIND US IN KOSGI</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
            Have a question?
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-normal">
            Call us for menu information, takeaway orders or restaurant enquiries.
          </p>
        </div>

        {/* Two Column Layout: Info Cards & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Details & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Phone Box - Prominent Direct Dial Trigger */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 text-amber-700">
                  <Phone className="w-6 h-6 fill-amber-700" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
                    Phone Inquiries & Takeaway
                  </h3>
                  <a
                    href="tel:09441627556"
                    className="text-stone-900 hover:text-amber-700 text-2xl font-extrabold tracking-wide transition-colors block"
                  >
                    094416 27556
                  </a>
                  <p className="text-stone-600 text-xs mt-1">
                    Tap to call directly from your mobile device.
                  </p>
                </div>
              </div>
            </div>

            {/* Address Box */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 text-amber-700">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
                    Restaurant Address
                  </h3>
                  <p className="text-stone-900 text-base font-bold leading-snug">
                    {RESTAURANT_INFO.address}
                  </p>
                  <p className="text-stone-600 text-xs mt-1.5">
                    Located conveniently adjacent to Amma Hospital, Kosgi town.
                  </p>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-3">
                Dining Options Available
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <Utensils className="w-4 h-4 text-amber-700" />
                  <span className="text-sm font-bold text-stone-900">Dine-in</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <ShoppingBag className="w-4 h-4 text-amber-700" />
                  <span className="text-sm font-bold text-stone-900">Takeaway</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <a
                href="tel:09441627556"
                className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm shadow-md shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>☎ Call Now</span>
              </a>

              <a
                href={RESTAURANT_INFO.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-white hover:bg-stone-50 text-stone-900 font-bold text-sm border-2 border-stone-300 shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Navigation className="w-4 h-4 text-amber-700" />
                <span>Get Directions</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Embedded Map */}
          <div className="lg:col-span-7 h-[380px] sm:h-[450px] lg:h-auto rounded-3xl overflow-hidden border-2 border-amber-600/20 shadow-md relative bg-white">
            <iframe
              title="Hindustan Restaurant Location in Kosgi"
              src={RESTAURANT_INFO.embedMapUrl}
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-stone-200 text-xs font-bold text-stone-800 shadow-sm pointer-events-none">
              📍 Kosgi, Telangana 509339
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
