'use client';
import { easeInOut, motion } from 'motion/react';

export default function HandWave() {
  const handWaveAnimation = {
    rotate: [0, 15, -10, 15, -10, 15, -10, 15, -10, 15, 0],
    transition: {
      duration: 1.5,
      ease: easeInOut,
    },
  };

  return (
    <motion.div
      animate={handWaveAnimation}
      style={{ transformOrigin: 'bottom right', display: 'inline-block' }}
      className="mx-2 inline"
    >
      👋🏽
    </motion.div>
  );
}
