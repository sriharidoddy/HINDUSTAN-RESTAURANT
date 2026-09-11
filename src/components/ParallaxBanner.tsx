import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export const ParallaxBanner: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div
      ref={ref}
      className="relative h-80 sm:h-96 lg:h-[420px] overflow-hidden flex items-center justify-center border-y border-amber-900/10 bg-[#faf6ef]"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: shouldReduceMotion ? '0%' : y }}
        className="absolute inset-0 -top-16 -bottom-16 w-full h-[calc(100%+8rem)]"
      >
        <img
          src="/images/biryani-serving.jpg"
          alt="Chef delicately serving steaming Hyderabadi Biryani at Hindustan Restaurant Kosgi"
          className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05]"
          loading="lazy"
        />
      </motion.div>

      {/* Atmospheric Warm Light Cream Overlays for High Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#faf6ef]/94 via-[#faf6ef]/82 to-[#faf6ef]/94" />
      <div className="absolute inset-0 bg-amber-500/10 mix-blend-color" />

      {/* Center Narrative Content in Deep Charcoal */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-16 h-[3px] bg-amber-600 mx-auto mb-6 rounded-full" />
          <h2 className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 mb-4 tracking-tight leading-tight">
            Made to Be Remembered
          </h2>
          <p className="font-serif-heading text-lg sm:text-2xl text-amber-900 italic font-medium tracking-wide">
            Good food. Warm moments. Authentic flavours.
          </p>
          <div className="w-16 h-[3px] bg-amber-600 mx-auto mt-6 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
};
