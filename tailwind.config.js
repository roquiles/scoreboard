/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Zen Kaku Gothic Antique"', "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
      },
    },
  },
  plugins: [],
};
