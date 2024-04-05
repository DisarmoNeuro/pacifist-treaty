/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['NotoSans', 'sans-serif']
    },
    extend: {
      fontFamily: {
        brigada: ['Brygada1918', 'sans-serif']
      },
      colors: {
        primary: {
          900: '#1B2855',
          700: '#146A99'
        },
        secondary: {
          900: '#2FAAC9',
          700: '#6EADB2'
        },
        background: '#FCFCFC'
      }
    }
  },
  plugins: []
}
