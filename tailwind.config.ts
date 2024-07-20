import type { Config } from "tailwindcss"

const plugin = require("tailwindcss/plugin")

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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
        brand: {
          purple: '#9528d5',
          violet: '#201166',
          pink: '#e8a8f3',
          wisteria: '#9066a6',
          martinique: '#3f364e',
          'lavender-gray': '#c7bbdb',
        }
      },
      fontFamily: {
        sans: ['var(--font-bricolage)']
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        "fade-in": {
          "0%": {
            "opacity": "0.9"
          },
          "100%": {
            "opacity": "1"
          }
        },
        "fade-out": {
          "0%": {
            "opacity": "1"
          },
          "100%": {
            "opacity": "0.99"
          }
        },
        "zoom-in": {
          "0%": {
            "opacity": "0",
            "transform": "scale(.5)"
          },
          "100%": {
            "opacity": "1",
            "transform": "scale(1)"
          }
        },
        "zoom-out": {
          "0%": {
            "opacity": "1",
            "transform": "scale(1)"
          },
          "100%": {
            "opacity": "0",
            "transform": "scale(.5)"
          }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        text: 'text 8s ease-in-out infinite',
        "fade-in": "fade-in 0.6s ease-in",
        "fade-out": "fade-out 0.6s ease-out",
        "zoom-in": "zoom-in 0.6s forwards",
        "zoom-out": "zoom-out 0.6s forwards"
      },
    },
  },
  plugins: [
    plugin(
      function({addVariant}:{
        addVariant: (variant: string, classes: string) => void;
      }) {
        addVariant("glow", ".glow-capture .glow-overlay &")
      },
      {
        theme:{
          extend: {
            colors: {
              glow: "color-mix(in srgb, var(--glow-color) calc(<alpha-value> * 100%), transparent)",
            },
          },
        },
      },
    ),
  ],
} satisfies Config

export default config