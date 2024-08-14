import type { Config } from "tailwindcss"

const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
        'sans': ['var(--font-nohemi)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '2.5xl': ['1.75rem', '2.5rem'],  // 28px
        '3xl': ['2rem', '2.5rem'],       // 32px
        '6xl': ['4rem', '4rem'],       // 64px
      },
      maxWidth : {
        '1/2' : "50%",
        '2/3' : "66%",
        '3/4' : "75%",
      },
      spacing: {
        '2.5': '0.625rem',
        '7.5': '1.875rem',
        '12.5': '3.125rem',
        '15': '3.75rem',
        '25': '6.25rem',
        '30': '7.5rem',
        '90': '22.5rem'
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
        "blue-60": "hsl(var(--blue-60))",
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
        DEFAULT: "calc(var(--radius) - 1rem)", //0.5rem -> 8px
        sm: "calc(var(--radius) - 0.75rem)", //0.75rem -> 12px
        md: "calc(var(--radius) - 0.5rem)", //1rem -> 16px
        lg: "var(--radius)", //1.5rem -> 24px
        xl: "calc(var(--radius) + 0.5rem)", //2rem -> 36px
        '2xl': "calc(var(--radius) + 1.5rem)", //3rem -> 48px
      },
      lineHeight: {
        'tighten': '1.15',
        'snug' : '1.4',
      },
      backgroundImage: {
        "soft-gradient": "linear-gradient(to bottom, transparent 0%, hsl(var(--blue-94)) 75%, hsl(var(--blue-94)) 100%)",
        "blue-88-94-gradient": "radial-gradient(closest-side, hsl(var(--blue-88)) 20%, hsl(var(--blue-94)) 100%)",
        "blue-60-94-radial-gradient": "radial-gradient(ellipse 100% 80% at top right, hsl(var(--blue-60)) 20%, transparent 90%), radial-gradient(ellipse 100% 80% at bottom left, hsl(var(--blue-60)) 10%, transparent 90%)"
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
      aspectRatio : {
        "3/4": "0.75",
        "4/3": "1.33",
        "16/9": "1.77",
        "2/1": "2",
        "11/10": "2.5"
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-gradient-mask-image")
  ],
} satisfies Config

export default config