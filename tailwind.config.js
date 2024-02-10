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

      screens:{
        'sm': '640px',
        'md': '768px',
        'lg': '1028px',
        'xl': '1280px',
        '2xl': '1536px',
      },

      colors:{
        primary:"#87549F",
        secondary:"#7ECDCE",
        accent1:"#B6EAA4",
        accent2:"#253A74",
        appBackground: "#FEFEFE",
        azulGris50: "#ECEFF1",
        azulGris100: "#CFD8DC",
        azulGris200: "#B0BEC5",
        azulGris300: "#90A4AE",
        azulGris400: "#78909C",
        azulGris500: "#607D8B",
        azulGris600: "#546E7A",
        azulGris700: "#455A64",
        azulGris800: "#37474F",
        azulGris900: "#263238",
      },
      fontFamily:{
        'heading': ['Montserrat'],
        'body': ['Source Sans 3'],
        'logoFont': ['Protest Riot'],
      //   sans: [ ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      //   serif: [ui-serif, Georgia, Cambria, "Times New Roman", Times, serif],
      },
      fontSize:{
        'h1':['1.875rem', {
          lineHeight: '2.25rem',
          letterSpacing: '-0.01em',
          fontWeight: '700',
        }],
        'h2':['1.5rem', {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '400',
        }],
        'h3':['1.25rem', {
          lineHeight: '1.75rem',
          letterSpacing: '-0.01em',
          fontWeight: '700',
        }],
        'h4':['1.25rem', {
          lineHeight: '1.75rem',
          letterSpacing: '-0.01em',
          fontWeight: '600',
        }],
        'regular':['0.875rem', {
          lineHeight: '1.25rem',
          letterSpacing: '-0.01em',
          fontWeight: '400',
        }],
        'regularBold':['0.875rem', {
          lineHeight: '1.25rem',
          letterSpacing: '-0.01em',
          fontWeight: '700',
        }],
        'regularSemiBold': ['0.875rem', {
          lineHeight: '1.25rem',
          letterSpacing: '-0.01em',
          fontWeight: '600',
       }],
        'link':['0.875rem', {
          lineHeight: '1.25rem',
          letterSpacing: '-0.01em',
          fontWeight: '300',
       }],
      },
    },
  },
  plugins: [],
};
