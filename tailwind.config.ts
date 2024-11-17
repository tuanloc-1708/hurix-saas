import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: "900px",
      },
      colors: {
        "white-text-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.70) 0%, #FFF 100%)",
      },
      backgroundImage: {
        "custom-input":
          "linear-gradient(97deg,rgba(255,255,255,0.00) 0%,rgba(255,255,255,0.03) 100%)",
        "pink-gradient":
          "linear-gradient(110deg, #FEECE3 0%, #FCD5BF 25%, #FEAFAE 50%, #FFA4BD 75%, #FFA9CC 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
