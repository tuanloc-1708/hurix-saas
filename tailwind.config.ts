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
        "pink-gradient":
          "linear-gradient(159.54deg, #FEECE3 -26.35%, #FCD5BF 11.82%, #FEAFAE 50%, #FFA4BD 88.18%, #FFA9CC 126.35%)",
      },
      screens: {
        xl: "900px",
      },
    },
  },
  plugins: [],
} satisfies Config;
