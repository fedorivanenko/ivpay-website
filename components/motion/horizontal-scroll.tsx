import React, { useRef, useEffect, ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface HorizontalScrollProps {
  children: ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { damping: 20, stiffness: 200 });

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const newX = x.get() - e.deltaX - e.deltaY;
      const maxX = 0;
      const minX = -(contentRef.current?.scrollWidth || 0) + (constraintsRef.current?.clientWidth || 0);
      x.set(Math.max(Math.min(newX, maxX), minX));
    };

    const element = constraintsRef.current;
    if (element) {
      element.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (element) {
        element.removeEventListener('wheel', handleWheel);
      }
    };
  }, [x]);

  return (
    <div className="relative w-full" ref={constraintsRef}>
      <motion.div
        ref={contentRef}
        drag="x"
        dragElastic={0.2}
        dragConstraints={{
          left: -(contentRef.current?.scrollWidth || 0) + (constraintsRef.current?.clientWidth || 0),
          right: 0
        }}
        style={{ x: springX }}
        className="flex cursor-grab active:cursor-grabbing"
      >
        {children}
      </motion.div>
    </div>
  );
};

export { HorizontalScroll };