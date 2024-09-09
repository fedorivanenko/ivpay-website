'use client'

import React, { useRef, useEffect, ReactNode } from 'react';
import { m, useMotionValue, useSpring } from 'framer-motion';

interface HorizontalScrollProps {
  children: ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { damping: 20, stiffness: 200 });
  const [refsInitialized, setRefsInitialized] = React.useState(false);

  useEffect(() => {
    if (constraintsRef.current && contentRef.current) {
      setRefsInitialized(true);

      const handleWheel = (e: WheelEvent) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
          e.preventDefault();
          const newX = x.get() - e.deltaX;
          const maxX = 0;
          const minX = -(contentRef.current?.scrollWidth || 0) + (constraintsRef.current?.clientWidth || 0);
          x.set(Math.max(Math.min(newX, maxX), minX));
        }
      };

      const element = constraintsRef.current;
      element.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        element.removeEventListener('wheel', handleWheel);
      };
    }
  }, [x]);

  useEffect(() => {
    if (refsInitialized) {
      const maxX = 0;
      const minX = -(contentRef.current?.scrollWidth || 0) + (constraintsRef.current?.clientWidth || 0);
      x.set(Math.max(Math.min(x.get(), maxX), minX));
    }
  }, [refsInitialized]);

  return (
    <div className="relative w-full" ref={constraintsRef}>
      <m.div
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
      </m.div>
    </div>
  );
};

export { HorizontalScroll };