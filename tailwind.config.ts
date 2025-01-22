import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "#d0c9c915",
      },
      lineHeight: {
        "12": "3.7rem",
      },
      brightness: {
        80: ".8",
        85: ".85",
        90: ".9",
      },
      transitionDuration: {
        "800": "800ms",
      },
    },
  },
  plugins: [],
} satisfies Config;
