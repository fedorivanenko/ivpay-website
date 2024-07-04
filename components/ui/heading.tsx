'use client'

import React from 'react';

import { motion } from "framer-motion"
import { contentAppearing } from '@/lib/motion_utils';

type HeadingProps = {
  type: 'h1' | 'h2' | 'h3';
  size: '100' | '80' | '60' | '40' | '32';
  children: Readonly<React.ReactNode>;
};

const Heading: React.FC<HeadingProps> = ({ type, size, children }) => {

  const getSizeClass = (size: '100' | '80' | '60' | '40' | '32') => {
    switch (size) {
      case '100':
        return 'text-100';
      case '80':
        return 'text-80';
      case '60':
        return 'text-60';
      case '40':
        return 'text-40';
      case '32':
        return 'text-32';
      default:
        return 'text-60';
    }
  };

  const HeadingTag = type;

  return (
    <HeadingTag className={getSizeClass(size) + ' uppercase leading-none tracking-tight text-center overflow-hidden'}>
      <motion.div
        variants={contentAppearing}
      >
        {children}
      </motion.div>
    </HeadingTag>
  );
};

export default Heading;