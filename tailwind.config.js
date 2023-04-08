/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        success: "#008E48",
        successDeep: "#0A3B1E",
        navbar: "#0A3B1E",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
    backgroundImage: {
      circularLight:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5f5 5px, #f5f5f5 100px)",
      blueGradient:
        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(11,136,99,1) 0%, rgba(12,147,175,1) 100%)",
      greenGradient:
        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(11,136,65,1) 0%, rgba(5,108,45,1) 90%)",
      darkGradient:
        "linear-gradient(90deg, rgba(11,39,136,1) 0%, rgba(5,108,103,1) 100%, rgba(61,55,148,0.989233193277311) 100%)",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
};
