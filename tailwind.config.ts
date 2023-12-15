import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#265073", // Dark teal
        secondary: "#2D9596", // Medium teal
        tertiary: "#9AD0C2", // Light teal
        quaternary: "#ECF4D6", // Soft cream
      },
      height: {
        "1/2screen": "50vh",
      },
      animation: {
        slideInFromLeft: "slideInFromLeft 0.5s ease-out forwards",
        slideInFromRight: "slideInFromRight 0.5s ease-out forwards",
      },
      opacity: {
        "0": "0",
        "100": "1",
      },
    },
  },
  plugins: [],
};

export default config;
