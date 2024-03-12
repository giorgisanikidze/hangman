/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '10' : '10px'
      },
      width: {
        '50': '50px',
      },
      height: {
        '50': '50px',
        '100': '100px'
      },
      rotate: {
        '30': '30deg',
        '50' : '50deg'
      },
      spacing: {
        '30px' : '30px',
        '50px': '50px',
        '90px' : '90px',
        '100px': '100px',
        '120px': '120px',
        '130px': '130px',
        '190px': '190px',
        '200px': '200px',
        '250px' : '250px',
        '300px' : '300px',
        '500px' : '500px'
      },
      borderRadius: {
        '20' : '20px'
      },
      gap: {
        '30' : '30px'
      },
      padding: {
        '60': '60px'
      },
      gridTemplateColumns: {
        'full' : 'repeat(auto-fit, minmax(75px, 1fr))'
      }
    }
  },
  plugins: [],
}