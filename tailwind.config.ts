import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx,jsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-nohemi)", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "2.5xl": ["1.75rem", "2.5rem"], // 28px
        "3xl": ["2rem", "2.5rem"], // 32px
        "6xl": ["4rem", "4rem"], // 64px
      },
      maxWidth: {
        "1/2": "50%",
        "2/3": "66%",
        "3/4": "75%",
      },
      spacing: {
        "2.5": "0.625rem",
        "7.5": "1.875rem",
        "12.5": "3.125rem",
        "15": "3.75rem",
        "25": "6.25rem",
        "30": "7.5rem",
        "90": "22.5rem",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "blue-94": "hsl(var(--blue-94))",
        "blue-88": "hsl(var(--blue-88))",
        "blue-70": "hsl(var(--blue-70))",
        "blue-45": "hsl(var(--blue-45))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        /**0.5rem -> 8px*/
        DEFAULT: "calc(var(--radius) - 1rem)", 
        /** 0.75rem -> 12px*/
        sm: "calc(var(--radius) - 0.75rem)", 
        /**1rem -> 16px*/
        md: "calc(var(--radius) - 0.5rem)", 
        /**1.75rem -> 28px*/
        lg: "calc(var(--radius) + 0.25rem)", 
        /** 2rem -> 36px */
        xl: "calc(var(--radius) + 0.5rem)", 
        /*3rem -> 48px*/
        "2xl": "calc(var(--radius) + 1.5rem)", 
      },
      lineHeight: {
        snug: "1.35",
        none: "1.12",
      },
      backgroundImage: {
        "soft-gradient": "linear-gradient(to bottom, transparent 0%, hsl(var(--blue-94)) 75%, hsl(var(--blue-94)) 100%)",
        "blue-shadow-gradient": "radial-gradient(closest-side, hsla(235, 100%, 60%, 0.4) 0%, hsla(235, 100%, 60%, 0.2) 20%, hsla(235, 100%, 60%, 0) 100%)",
        "hero-gradient": "linear-gradient(to bottom, hsla(234, 100%, 80%, 0) 0%, hsla(234, 100%, 80%, 0.2) 20%, hsla(235, 100%, 80%, 0.8) 80%, hsla(235, 100%, 75%, 0.8) 100%), radial-gradient(ellipse 100% 100% at bottom left, hsl(var(--accent)) 10%, transparent 50%), radial-gradient(ellipse 100% 100% at bottom right, hsl(var(--accent)) 10%, transparent 50%), radial-gradient(ellipse 100% 100% at center, hsl(var(--background)) 20%, transparent 100%)",
        "blue-gradient" : "radial-gradient(ellipse 80% 180% at top left, hsl(var(--accent)) 10%, transparent 100%), radial-gradient(ellipse 80% 180% at bottom right, hsl(var(--accent)) 10%, transparent 100%), linear-gradient(to bottom, hsla(235, 100%, 60%, 0.2) 0%, transparent 50%)",
        "globe-cta-gradient" : ""
      },
      boxShadow: {
        'on-blue-header-sm': '0px -40px 40px -40px hsl(var(--accent))',
        'on-blue-header-xl': '0px -60px 80px -80px hsl(var(--accent))',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      aspectRatio: {
        "3/4": "0.75",
        "4/3": "1.33",
        "16/9": "1.77",
        "2/1": "2",
        "11/10": "2.5",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-gradient-mask-image"),
  ],
} satisfies Config;

export default config;
