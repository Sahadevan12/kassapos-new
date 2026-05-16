import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: "#030818",
          900: "#070C1B",
          850: "#0A1228",
          800: "#0D1629",
          750: "#101E38",
          700: "#152447",
          600: "#1B3A8F",
          500: "#1D4ED8",
          400: "#2563EB",
          300: "#3B82F6",
          200: "#60A5FA",
          100: "#93C5FD",
          50:  "#DBEAFE",
        },
        cyan: {
          600: "#0891B2",
          500: "#06B6D4",
          400: "#22D3EE",
          300: "#67E8F9",
          200: "#A5F3FC",
        },
        surface: {
          DEFAULT: "#030818",
          1: "#070C1B",
          2: "#0D1629",
          3: "#131F38",
          4: "#1A2847",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem,8vw,6rem)", { lineHeight: "1.0", letterSpacing: "-0.04em", fontWeight: "800" }],
        "display-xl":  ["clamp(2.5rem,6vw,4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "800" }],
        "display-lg":  ["clamp(2rem,5vw,3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-md":  ["clamp(1.75rem,4vw,2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-sm":  ["clamp(1.5rem,3vw,2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #1B3A8F 0%, #2563EB 50%, #06B6D4 100%)",
        "brand-gradient-hover": "linear-gradient(135deg, #1D4ED8 0%, #3B82F6 50%, #22D3EE 100%)",
        "dark-gradient": "linear-gradient(180deg, #030818 0%, #070C1B 100%)",
        "glow-blue": "radial-gradient(ellipse at center, rgba(37,99,235,0.15) 0%, transparent 70%)",
        "glow-cyan": "radial-gradient(ellipse at center, rgba(6,182,212,0.1) 0%, transparent 70%)",
        "hero-mesh": "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(37,99,235,0.25) 0%, transparent 60%)",
        "card-shine": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.02) 100%)",
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(37,99,235,0.3)",
        "glow":    "0 0 25px rgba(37,99,235,0.4)",
        "glow-lg": "0 0 50px rgba(37,99,235,0.5)",
        "glow-cyan": "0 0 25px rgba(6,182,212,0.4)",
        "card":    "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(37,99,235,0.2), 0 0 30px rgba(37,99,235,0.1)",
        "glass":   "inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 24px rgba(0,0,0,0.4)",
        "premium": "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "orbit": "orbit 20s linear infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "spin-slow": "spin 20s linear infinite",
        "counter": "counter 2s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(37,99,235,0.3)" },
          "50%": { boxShadow: "0 0 50px rgba(37,99,235,0.7)" },
        },
        orbit: {
          from: { transform: "rotate(0deg) translateX(100px) rotate(0deg)" },
          to: { transform: "rotate(360deg) translateX(100px) rotate(-360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16,1,0.3,1)",
        "expo-in-out": "cubic-bezier(0.87,0,0.13,1)",
      },
    },
  },
  plugins: [],
};

export default config;
