/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white_color: "#FFFFFF",
        blue_color: "#7479F5",
        text_color: "#4B4B4B",
        green_color: "#78D6C6",
        gray_color: "#B0B0B0",
        bg_color: "#F4F7FC",
        imagebox_color: "#C4C4C4",
      },
      boxShadow: {
        box_item: "0px 3px 10px 0px rgba(129, 129, 129, 0.21)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
    },
  },

  plugins: [],
};
