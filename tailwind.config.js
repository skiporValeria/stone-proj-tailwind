/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      width: {
        '110': '22.5rem',
      },
      colors: {
        'text-color': '#4D4D4D',
        'pink-stone': '#C7AA8B'
      },
      backgroundImage: {
        'banner': "url('images/top-bg.png')",
        'bg-sea': "url('images/bg-sea.png')"
      },
      fontFamily: {
        'roboto': ["Roboto", "sans-serif"],
        'vollkorn': ["Vollkorn", "serif"]
      }
    },
  },
  plugins: [],
  
}

