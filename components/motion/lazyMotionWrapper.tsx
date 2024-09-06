'use client'

import React from 'react';
import { 
  LazyMotion, 
  //domAnimation, 
  domMax 
} from "framer-motion";

function LazyMotionWrapper({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <LazyMotion features={domMax}>
        {children}
    </LazyMotion>
  );
}

export default LazyMotionWrapper;