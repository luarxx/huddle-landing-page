/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: { // serve para criar classes personalizadas 
    extend: { 
      backgroundImage: { // serve para criar classes personalizadas para background
        'background-mobile': "url('./src/assets/bg-mobile.svg')", // background-mobile is the name of the class
        'background-desktop': "url('./src/assets/bg-desktop.svg')", // background-desktop is the name of the class
      },
      colors: { // serve para criar classes personalizadas para cores
        'Violet': 'hsl(257, 40%, 49%)',
        'Soft-Magenta': 'hsl(300, 69%, 71%)',
      },
    },
  },
  plugins: [],
}

