/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        hover:
          "0px 2px 8px rgba(40, 41, 61, 0.15), 0px 16px 24px rgba(96, 97, 112, 0.15)",
      },
    },
    colors: {
      title: "#314753",
      sub: "#707172",
      secondary: "#F1673A",
      primary: "#25C2E8",
      body: "#0B2337",
      black: "#000",
      white: "#fff",
      title2: "#090606",
      sub2: "#5f5d5c",
    },
    screens: {
      lg: { max: "1023px" },
      sm: { max: "600px" },
      s: { max: "420px" },
      // => @media (max-width: 600px) { ... }
      xl: { min: "1440px" },
    },
  },
  plugins: [],
};
