import type { Config } from "tailwindcss"
import type { PluginAPI } from 'tailwindcss/types/config'

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
        'sans': ['Nohemi', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'xs': ['0.75rem', '1rem'],  // 12px font-size, 16px line-height
        'sm': ['0.875rem', '1.25rem'],  // 14px font-size, 20px line-height
        'base': ['1rem', '1.5rem'],  // 16px font-size, 24px line-height
        'lg': ['1.125rem', '1.75rem'],  // 18px font-size, 28px line-height
        'xl': ['1.25rem', '1.75rem'],  // 20px font-size, 28px line-height
        '2xl': ['1.5rem', '2rem'],  // 24px font-size, 32px line-height
        '3xl': ['2rem', '2.25rem'],  // 32px font-size, 36px line-height
        '4xl': ['2.5rem', '2.5rem'],  // 40px font-size, 40px line-height
        '5xl': ['3.75rem', '4rem'],  // 60px font-size, 64px line-height
        '6xl': ['5rem', '5rem'],  // 80px font-size, 80px line-height
        '7xl': ['6.25rem', '6.25rem'],  // 100px font-size, 100px line-height
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        soft: "hsl(var(--soft))",
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
        lg: "var(--radius)",
        md: "calc(var(--radius) - 0.5rem)",
        sm: "calc(var(--radius) - 1rem)",
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
        "16/9": "1.77",
        "5/4": "1.25",
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    /*
    function({ addUtilities } : PluginAPI) {
      const newUtilities = {
        '.mask-gradient-r': {
          maskImage: 'linear-gradient(to right, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, black, transparent)',
        },
        '.mask-gradient-l': {
          maskImage: 'linear-gradient(to left, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to left, black, transparent)',
        },
        // Add more directions as needed
      }
      addUtilities(newUtilities)
    }*/
  ],
} satisfies Config

export default config