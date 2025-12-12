import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#C0392B",
          hover: "#A93226",
          light: "#E74C3C",
          dark: "#922B21",
        },
        secondary: {
          DEFAULT: "#2C3E50",
          light: "#34495E",
        },
        accent: {
          DEFAULT: "#F39C12",
          light: "#F1C40F",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
