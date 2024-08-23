/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom-darkgray': 'inset 1px 1px 20px 10px darkgray',
      },
    },
  },
  plugins: [],
};
