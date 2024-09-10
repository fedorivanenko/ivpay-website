import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";

import LazyMotionWrapper from "@/components/motion/lazyMotionWrapper";
import { Header } from "@/components/globals/header";
import { Footer } from "@/components/globals/footer";

export const metadata: Metadata = {
  title: "IVPAY | A simple way to start accepting crypto in your business",
  description: "A simple way to start accepting crypto in your business",
};

const nohemi = localFont({
  display: "swap",
  variable: "--font-nohemi",
  src: [
    {
      path: "../fonts/Nohemi-Light.woff2",
      style: "normal",
    },
    {
      path: "../fonts/Nohemi-Light.ttf",
      style: "normal",
    },
    {
      path: "../fonts/Nohemi-Light.otf",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LazyMotionWrapper>
      <html lang="en" className={`${nohemi.variable}`}>
        <body>
          <Header />
          {children}
          <SpeedInsights />
          <Footer />
        </body>
      </html>
    </LazyMotionWrapper>
  );
}
