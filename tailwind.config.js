/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dm: ["DM Serif Text", "serif"],
      },
      backgroundImage: {
        sofia_header: "url('src/assets/sofia.png')",
        pink: "radial-gradient(50% 50% at 50% 50%, #FF4AAC 0%, rgba(255, 203, 231, 0) 100%)",
      },
    },
  },
  plugins: [],
};
