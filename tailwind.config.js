/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2f9e44",
        secondary: "#ebfbee",
        customGreen: "#d5ecda",
        customDarkGreen: "#133f1b", // Add custom green color
        // Add custom light green color
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
