import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        matte: "#0a0a0f",
        neonPink: "#ff2bd6",
        neonBlue: "#22d3ee",
        neonPurple: "#8b5cf6"
      },
      boxShadow: {
        neon: "0 0 20px rgba(255, 43, 214, 0.35)",
        blueGlow: "0 0 20px rgba(34, 211, 238, 0.28)"
      },
      backdropBlur: {
        xs: "2px"
      }
    }
  },
  plugins: []
};

export default config;
