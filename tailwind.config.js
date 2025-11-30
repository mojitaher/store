/** @type {import('tailwindcss').Config} */
// import flowbite from "flowbite-react/tailwind";
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js" ,
      flowbite.content(),
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('flowbite/plugin'),
      flowbite.plugin(),
    ],
  }
  