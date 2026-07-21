import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: "#F6F7F6",
        foreground: "#152420",
        primary: {
          DEFAULT: "#0E3D2E",
          light: "#155641",
          dark: "#0A2B21",
          foreground: "#FFFFFF",
        },
        night: {
          DEFAULT: "#081F19",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#D6A64B",
          light: "#E6C077",
          foreground: "#1A1406",
        },
        muted: {
          DEFAULT: "#EEF1EE",
          foreground: "#5B6B65",
        },
        border: "#E1E6E1",
        card: "#FFFFFF",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3.5s ease-in-out infinite",
        marquee: "marquee 26s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
