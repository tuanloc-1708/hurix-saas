module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "top-pink-gradient":
          "linear-gradient(159.54deg, #FEECE3 -26.35%, #FCD5BF 11.82%, #FEAFAE 50%, #FFA4BD 88.18%, #FFA9CC 126.35%)",
        "left-pink-gradient":
          "linear-gradient(110.45deg, #FEECE3 0%, #FCD5BF 25%, #FEAFAE 50%, #FFA4BD 75%, #FFA9CC 100%)",
      },
    },
  },
  plugins: [],
};
