// src/components/FadeInOnScroll.tsx
'use client';

import { easeOut, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface FadeInOnScrollProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({ children, delay = 0.2, duration = 0.6 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation only plays once when the element enters the viewport
    threshold: 0.1, // Element is considered in view when 10% is visible
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: {delay, duration, easeOut:"easeOut"} },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
