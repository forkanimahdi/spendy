/** @type {import(tailwindcss).Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        alpha: "#b4ef72",
        beta: "#262626",
        gamma: "#141414",
      },
    },
  },
  plugins: [],
};
