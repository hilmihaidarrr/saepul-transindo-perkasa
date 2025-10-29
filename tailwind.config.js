/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0057A0",   // biru utama logo
          light: "#1E88E5",     // biru muda pelengkap
        },
        accent: {
          DEFAULT: "#2BB673",   // hijau toska logo
        },
      },
    },
  },
  plugins: [],
}
