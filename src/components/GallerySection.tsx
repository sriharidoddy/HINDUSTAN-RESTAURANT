import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Biryani' | 'Food' | 'Restaurant'>('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = ['All', 'Biryani', 'Food', 'Restaurant'] as const;

  const filteredItems = activeTab === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  // Lightbox navigation handlers
  const handlePrev = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev! > 0 ? prev! - 1 : filteredItems.length - 1
    );
  }, [selectedImageIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev! < filteredItems.length - 1 ? prev! + 1 : 0
    );
  }, [selectedImageIndex, filteredItems.length]);

  const handleClose = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, handleClose, handlePrev, handleNext]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#ffffff] relative border-t border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-600/30 text-amber-900 text-xs font-bold uppercase tracking-widest mb-3">
            <ImageIcon className="w-3.5 h-3.5 text-amber-700" />
            <span>VISUAL GALLERY</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
            A Feast for the Eyes
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-normal">
            Take a glance into our kitchen, signature handi biryanis, hot tandoor breads, and cozy Kosgi atmosphere.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveTab(cat);
                  setSelectedImageIndex(null);
                }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md shadow-amber-500/20'
                    : 'bg-stone-50 text-stone-700 hover:text-stone-900 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImageIndex(index)}
                className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-stone-100 cursor-pointer border border-stone-200/80 shadow-sm hover:shadow-md"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5" />

                {/* Top Badge */}
                <span className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-bold uppercase tracking-wider text-amber-200 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-400/30">
                  {item.category}
                </span>

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Maximize2 className="w-4 h-4 text-amber-400" />
                </div>

                {/* Bottom Details on Hover */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="font-serif-heading text-base font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-200 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={handleClose}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-stone-900/80 border border-white/20 text-white hover:text-amber-400 hover:bg-stone-800 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-stone-900/80 border border-white/20 text-white hover:text-amber-400 hover:bg-stone-800 transition-colors"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-stone-900/80 border border-white/20 text-white hover:text-amber-400 hover:bg-stone-800 transition-colors"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Image Box */}
            <div
              className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={filteredItems[selectedImageIndex].id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25 }}
                src={filteredItems[selectedImageIndex].image}
                alt={filteredItems[selectedImageIndex].title}
                className="max-w-full max-h-[72vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />

              <div className="mt-4 text-center">
                <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-white">
                  {filteredItems[selectedImageIndex].title}
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-1 max-w-xl">
                  {filteredItems[selectedImageIndex].description}
                </p>
                <span className="text-[11px] text-stone-400 mt-2 block">
                  {selectedImageIndex + 1} of {filteredItems.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
