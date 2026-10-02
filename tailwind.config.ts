import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F8FAFC",
        ink: "#0F172A",
        night: "#090D16",
        cobalt: "#4F46E5",
        periwinkle: "#818CF8",
        pass: "#10B981",
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          "system-ui",
          "-apple-system",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        heading: ['"Outfit"', '"Plus Jakarta Sans"', "sans-serif"],
        serif: ['"Outfit"', '"Palatino Linotype"', "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 0 30px -5px rgba(99, 102, 241, 0.25)",
        "glow-lg": "0 0 50px -10px rgba(99, 102, 241, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
