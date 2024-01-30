/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primary:"#87549F",
        secondary:"#7ECDCE",
        accent1:"#B6EAA4",
        accent2:"#253A74",
        appBackground: "#FEFEFE",
      },
      fontFamily:{
        heading: ['Montserrat', sans-serif],
        body: ['Source Sans 3', sans-serif],
      },
    },
  },
  plugins: [],
};
