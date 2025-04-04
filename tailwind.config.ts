const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
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
        'serif': ["var(--font-serif)", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        'marker': ["var(--font-marker)"],
        'raleway': ["var(--font-raleway)"],
        '2p': ["var(--font-2p)"],
        'rubik': ["var(--font-rubik)"],
   
      },
      colors: {
        windows: "#DEDBD5",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },

     
 
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "animation-container": "flowing-animation 30s linear infinite",
        "animation-container-follow": "flowing-animation-follow 40s linear infinite",
        "move-xs": "move-xs 20s linear infinite",
        "move-small": "move-small 25s linear infinite",
        "move-medium": "move-medium 30s linear infinite",
        "move-large": "move-large 35s linear infinite",
        "move-xl": "move-xl 40s linear infinite",
        "bounce-temporary": " pulse 1s linear 4 ",
        "bounce-left": "bounce-left 1s infinite"
        
      },
      
    },
  },
  plugins: [require("tailwindcss-animate")],
}