import React from 'react';
import { Phone, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const MobileBottomBar: React.FC = () => {
  return (
    <aside
      aria-label="Quick contact actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#fdfbf7]/95 backdrop-blur-lg border-t border-amber-900/10 px-4 py-3 shadow-[0_-4px_25px_rgba(50,30,10,0.08)] pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))]"
    >
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        {/* Direct Call Trigger */}
        <a
          href="tel:09441627556"
          className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 active:from-amber-600 active:to-amber-700 text-white font-bold text-sm shadow-md shadow-amber-500/20 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span>☎ Call Now</span>
        </a>

        {/* Direct Google Directions */}
        <a
          href={RESTAURANT_INFO.mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-white text-stone-900 font-bold text-sm border border-stone-300 shadow-sm active:scale-95 transition-transform"
        >
          <Navigation className="w-4 h-4 text-amber-700" />
          <span>📍 Directions</span>
        </a>
      </div>
    </aside>
  );
};
