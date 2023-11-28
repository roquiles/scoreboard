/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        showModal: "showModal .7s ease-in-out",
        hideModal: "hideModal .6s ease-in-out both",
      },
      fontFamily: {
        sans: ['"Zen Kaku Gothic Antique"', "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
      },
      keyframes: {
        showModal: {
          "0%": { transform: "scale(0)" },
          "60%": { transform: "scale(1.1)" },
          "80%": { transform: "scale(.95)" },
          "100%": { transform: "scale(1)" },
        },
        hideModal: {
          "0%": { transform: "scale(1)" },
          "20%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(0)" },
        },
      },
    },
  },
  plugins: [],
};
