import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Petal {
  id: number;
  x: number;
  size: number;
  rotation: number;
  duration: number;
  delay: number;
  color: string;
  drift: number;
}

function getPetalCount() {
  if (typeof window === 'undefined') return 12;
  const coarse = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  const narrow = window.innerWidth < 768;
  if (coarse || narrow) return 10;
  return 18;
}

export const FloatingPetals: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Maroon / burgundy colors
    const colors = ['#800000', '#8b0000', '#600000', '#92000a'];
    const count = getPetalCount();

    const newPetals = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 10 + 10, // size: 10 to 20px
      rotation: Math.random() * 360,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * -15, // Negative delay so they are already falling when the page loads!
      color: colors[Math.floor(Math.random() * colors.length)],
      drift: Math.random() * 40 - 20,
    }));
    setPetals(newPetals);
  }, []);

  if (petals.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[40]">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute will-change-transform"
          initial={{
            x: `${petal.x}vw`,
            y: '-20vh',
            rotateZ: petal.rotation,
            opacity: 0,
          }}
          animate={{
            y: '120vh',
            x: `${petal.x + petal.drift}vw`,
            rotateZ: petal.rotation + 720,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: 'linear',
            times: [0, 0.1, 0.9, 1]
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            className="opacity-80"
          >
            <path
              d="M 12 2 C 5 2 2 8 4 14 C 6 20 12 22 12 22 C 12 22 18 20 20 14 C 22 8 19 2 12 2 Z"
              fill={petal.color}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};
