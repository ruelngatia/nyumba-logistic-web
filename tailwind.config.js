/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '1xl': '0px 0px 4px rgba(0,0,0,0.1)',
        '2xl': '0px 0px 6px rgba(0,0,0,0.2)',
      }
    },
    colors: {
      'primary-color': '#0082C6',
      'white': '#ffff ',
      'b-grey': '#9ca3af',
      'sider-blue': '#E6FAFF',
      'active': '#001529',
      'card-border': '#9d9898'
    }
  },
  plugins: [],
}

