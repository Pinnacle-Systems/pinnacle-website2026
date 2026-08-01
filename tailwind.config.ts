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
        navy: {
          900: "#050a1f",
          800: "#0a1128",
        },
        primary: {
          DEFAULT: "#ff5a00",
          hover: "#e65100",
        },
      },
      backgroundImage: {
        'circuit-pattern': "url('/circuit-board.svg')",
      }
    },
  },
  plugins: [],
} satisfies Config;
