/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0072D2',
        seccondary: '#cacaca',
        dark: '#1A1D29',
        light: "#f9f9f9",
      },
    },
  },
  plugins: [],
}
