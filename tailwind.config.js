/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
      colors: {
        primary: " #560AB5",
        secondary: "#5A5A5A",
        gray_card: "#707070",
        gray_light: "#C0C0C0",
        buttonBg: "#22004D",
        "chinese-black": "#131212",
        "arsenic-gray": "#403F42",
        "smoky-black": "#121800",
        border: "#EBE1F4",
        "creamy-purple": "#6E4CF91A",
      },
      backgroundImage: {
        "hero-pattern": "url('src/assets/svg/hero-pattern.svg')",
        "footer-texture": "url('src/assets/svg/footer-texture.png')",
      },
      fontSize: {
        "80px": "clamp(2rem,4vw,5rem)",
        "60px": "clamp(1.75rem,3.5vw,3.75rem)",
      },
      lineHeight: {
        "80px": "clamp(2.5rem,4.5vw,6rem)",
        "60px": "clamp(2.25rem,4.25vw,4.5rem)",
      },
    },
  },
  plugins: [],
};
