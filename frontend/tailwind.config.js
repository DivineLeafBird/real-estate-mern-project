/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#0069FF",
        darkblue: "#041B4F",
        royalblue: "#1333D6",
        slateblue: "#34466C",
        lightblue: "#CFEDFF",
        softgray: "#ABB7CD",
        skyblue: "#4F95FD",
      },
    },
  },
  plugins: [],
};
