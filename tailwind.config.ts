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
        // Core Sacred Colors
        'rice-white': '#FBFBF7',      // Background / Canvas
        'kumkum': '#B31B1B',          // Primary Actions / Sacred Red
        'pasupu': '#FFDF00',          // Highlights / Turmeric Yellow
        'mango-leaf': '#046A38',      // Accents / Deep Waxy Green
        'kalasam-silver': '#C0C0C0',  // Borders / Metadata Text
        
        // Material Secondary Colors
        'brass': '#B87333',           // Hover States / Warm Metallic
        'copper': '#9C5221',          // Text Depths
        'betel-nut': '#682E1F',       // Footer / Grounding Brown
        'coin-silver': '#8D8D8D',     // Secondary UI elements
      },
      fontFamily: {
        // Suggesting a Serif font for a traditional Hindu temple feel
        serif: ['var(--font-geist-sans)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
