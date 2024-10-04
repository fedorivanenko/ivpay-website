'use client';

import { FC, ReactNode, useEffect } from 'react';
import Gleap from 'gleap';

export const GleapInit: FC<{ children?: ReactNode }> = ({ children }) => {
  useEffect(() => {
    Gleap.initialize("KpxVfZ1H5FunI4Ly6yBWKMMSH9tnKv49");
  });

  return <>{children}</>;
};