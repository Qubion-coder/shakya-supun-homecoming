import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

export const CoupleDetails: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-brand-lavender/15 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="text-center mb-16 sm:mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-4 mb-6 mt-4">
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-brand-plum/60" />
            <span className="text-brand-plum uppercase tracking-[0.5em] text-[11px] font-semibold font-sans drop-shadow-sm">The Protagonists</span>
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-brand-plum/60" />
          </div>
          <h2 className="text-5xl sm:text-7xl font-names text-stone-800 tracking-tight drop-shadow-sm">
            Shakya <span className="text-brand-plum font-light mx-2">&</span> Supun
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 relative z-10">
        {/* Groom Details (Left on Desktop, Bottom on Mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-center lg:text-right flex-1 lg:pr-10 order-1"
        >
          <div className="mb-4 flex flex-col items-center lg:items-end">
            <p className="text-stone-500/90 font-sinhala text-sm sm:text-base text-center lg:text-right mb-4 leading-relaxed">
              අත්තිඩිය විදානලාගේ දොන් තිලක් රෝහිත කුමාර සහ<br/>
              ජාසින්ලියනගේ දෝන අචලා කාමිනී විජේගුණසේකරගේ<br/>
              ආදරණීය පුත්,
            </p>
            <h4 className="text-2xl sm:text-3xl font-sinhala text-stone-700 drop-shadow-sm">ව්‍යාපාරික(ජාල ඉංජිනේරු) සුපුන් සංජීව</h4>
          </div>
          <div className="hidden lg:flex justify-end mt-8">
            <Heart className="w-6 h-6 text-brand-lavender/60 fill-brand-lavender/20 transform hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </motion.div>

        {/* Center Couple Image (Arch Design) */}


        {/* Bride Details (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-center lg:text-left flex-1 lg:pl-10 order-2"
        >
          <div className="mb-4 flex flex-col items-center lg:items-start">
            <p className="text-stone-500/90 font-sinhala text-sm sm:text-base text-center lg:text-left mb-4 leading-relaxed">
              හේරත් බංඩාර මුදියන්සේලාගේ චමින්ද පුෂ්පකුමාර හේරත් සහ<br/>
              දොම්පේගේ ශාලිකා මදුෂිණි සිරිවර්ධනගේ<br/>
              ආදරණීය දියණිය,
            </p>
            <h4 className="text-2xl sm:text-3xl font-sinhala text-stone-700 drop-shadow-sm">නීතිවේදි ශාක්‍යා හේරත්</h4>
          </div>
          <div className="hidden lg:flex justify-start mt-8">
            <Heart className="w-6 h-6 text-brand-lavender/60 fill-brand-lavender/20 transform hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
