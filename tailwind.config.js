/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        brightBlue: "hsl(220, 98%, 61%)",
        // Light Theme
        veryLightGray: "hsl(0, 0%, 98%)",
        veryLightGrayishBlue: "hsl(236, 33%, 92%)",
        darkGrayishBlue: "hsl(236, 9%, 61%)",
        veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
      },
    },
  },
  plugins: [],
};
