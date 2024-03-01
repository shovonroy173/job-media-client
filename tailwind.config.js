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
      green:"#006400" , 
      lightGreen:"#32CD32" ,
      extreamLightGreen:"#90EE90" ,  
      blue: "#010851",
      lightBlue:"#0040ff" , 
      gray:"#404040" ,
      lightGray: "#8d8b8b" ,
      extreamLightGray: "#cccccc",
      white: "#ffff",
      almostWhite:"#f2f2f2" , 
      black: "#000000",
      background: "rgba(167, 163, 165, 0.46)",
      brandBack:"#f2f2f2"

    },
  },
  plugins: [],
};
