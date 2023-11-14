/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Space Grotesk", "Skia", "sans", "sans-serif"],
      line: ["Sketchup", "Skia", "sans", "sans-serif"],
      hand: ["Arthemis", "Marker Felt", "cursive"],
      mono: ["", "OperatorMono Nerd Font", "OperatorMono", "monospace"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
