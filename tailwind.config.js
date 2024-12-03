/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        ribeye: ['Ribeye', 'cursive'],
      },
      spacing: {
        '30': '7.5rem', 
        '815': '815px',
        '-365': '-365px',
        '-140': '-140px',
        '-470': '-470px',
        '630': '630px',
      },
      colors: {
        customBlue: '#1478A3', // Add your custom color here
      },
    },
  },
  plugins: [],
}

