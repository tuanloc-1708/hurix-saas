import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      container: {
        center: false,
      },
      screens: {
        sm: "375px",
        md: "440px",
        xl: "768px",
        "2xl": "1500px",
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
