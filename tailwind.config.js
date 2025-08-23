/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          900: "#0b1220",
          800: "#0f172a",
          700: "#111827"
        }
      },
      boxShadow: {
        glow: "0 0 24px rgba(56,189,248,0.25)",
      }
    },
  },
  plugins: [],
}
