import type { Config } from "tailwindcss"

const plugin = require("tailwindcss/plugin")

const svgToDataUri = require("mini-svg-data-uri");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

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
        heart: {
          '0%': {
            'transform': 'scale(1)',
          },
          '50%': {
            'transform': 'scale(1.3)',
          },
          '100%': {
            'transform': 'scale(1)',
          },
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
        "zoom-out": "zoom-out 0.6s forwards",
        heart: 'heart 1.5s ease-in-out infinite',
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
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config

export default config