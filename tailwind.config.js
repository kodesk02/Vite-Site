const flowbite = require("flowbite-react/tailwind");
// import { flowbite } from 'flowbite-react'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    flowbite.content(),
  
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': '#e7eaf6',
        'neutralBlue': '#a2a8d3',
        'brandBlue': '#38598b',
        'neutralBluey': '#113f67',
        'neutralGrey': '#d5def5',
        'Blue': '#8594e4',
        'neutralPurple': '#6643b5',
        'brandPurple': '#430f58',
        'Yellow': '#FFBF00',
        'brandYellow': '#E49B0F',
        'Cherry': '#D2042D',
        'brandRed' : '#8B0000',
      }
    },
  },
    plugins: [
        flowbite.plugin(),
    ]
  // plugins: [require('flowbite/plugin')],
}

