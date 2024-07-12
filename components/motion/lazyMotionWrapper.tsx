'use client'

import React from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';

function LazyMotionWrapper({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <LazyMotion features={domAnimation}>
        {children}
    </LazyMotion>
  );
}

export default LazyMotionWrapper;