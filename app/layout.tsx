import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";

import LazyMotionWrapper from "@/components/motion/lazyMotionWrapper";
import { Header } from "@/components/globals/header";
import { Footer } from "@/components/globals/footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://ivpay.io'),
  title: "IVPAY | Welcome to Your Gateway to Crypto Payments",
  description: "IVPAY is an easy, safe, and fast way to accept crypto payments for retail, e-commerce, and vending machines. Our platform supports multiple cryptocurrencies, providing diverse payment options for your business. Discover over 100+ locations that accept cryptocurrency payments and start reaping the benefits of the crypto world today",
  openGraph: {
    title: "IVPAY | Welcome to Your Gateway to Crypto Payments",
    description:
    "IVPAY is an easy, safe, and fast way to accept crypto payments for retail, e-commerce, and vending machines. Our platform supports multiple cryptocurrencies, providing diverse payment options for your business. Discover over 100+ locations that accept cryptocurrency payments and start reaping the benefits of the crypto world today",
    type: "website",
    url: "https://ivpay.io/",
    siteName: "IVPAY"
  },
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
