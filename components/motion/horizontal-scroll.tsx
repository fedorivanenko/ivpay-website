'use client'

import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { m, useMotionValue, useSpring } from 'framer-motion';

interface HorizontalScrollProps {
  children: ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { damping: 20, stiffness: 200 });

  const [dragConstraints, setDragConstraints] = useState<{ left: number; right: number }>({
    left: 0,
    right: 0,
  });

  const updateConstraints = () => {
    if (constraintsRef.current && contentRef.current) {
      const maxX = 0;
      const minX = -(contentRef.current.scrollWidth || 0) + (constraintsRef.current.clientWidth || 0);
      setDragConstraints({ left: minX, right: maxX });
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        const newX = x.get() - e.deltaX;
        x.set(Math.max(Math.min(newX, dragConstraints.right), dragConstraints.left));
      }
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
  }, [x, dragConstraints]);

  useEffect(() => {
    const handleResize = () => {
      updateConstraints();
    };
    updateConstraints();

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full" ref={constraintsRef}>
      <m.div
        ref={contentRef}
        drag="x"
        dragElastic={0.2}
        dragConstraints={dragConstraints}
        style={{ x: springX }}
        className="flex cursor-grab active:cursor-grabbing"
      >
        {children}
      </m.div>
    </div>
  );
};

export { HorizontalScroll };