/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF9357",
      },
      borderRadius: {
        20: "20px",
      },
      backgroundImage: {
        hero: "url('./assets/images/backgrounds/bg-hero.jpg')",
      },
    },
  },
  plugins: [],
};
