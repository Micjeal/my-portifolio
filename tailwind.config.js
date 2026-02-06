/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/utils/**/*.{js,jsx}",
    "./src/data/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#0b1120",
          800: "#111827",
          700: "#1f2937"
        },
        accent: {
          400: "#22d3ee",
          500: "#06b6d4"
        },
        surface: "#f8fafc"
      },
      fontFamily: {
        heading: ["Poppins", "Inter", "sans-serif"],
        body: ["Inter", "Roboto", "sans-serif"]
      },
      boxShadow: {
        glass: "0 20px 50px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};
