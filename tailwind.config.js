/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/assets/index.css",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "box-shadow": "0px 0px 14px -3px rgba(0,0,0,0.75)",
        "box-shadow2": "0px 0px 300px -11px rgba(0,0,0,0.57)",
      },
    },
    colors: {
      primary: "#010851",
      secondary: "#9A7AF1",
      tertiary: "#707070",
      pink: "#EE9AE5",
      white: "#ffff",
      black: "#000000",
      lightGreen: "#39DC98",
      lightRed: "#FD809E",
      background: "rgba(167, 163, 165, 0.46)",
    },
  },
  plugins: [],
};
