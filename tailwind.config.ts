import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    extend: {
      colors: {
        brown: '#3B3A37',
        darkGray: '#413730',
        sand: '#807567',
        white: '#FFFFFF',
        black: '#000000'
      },
      fontFamily: {
        heading: ['var(--font-playfair)'],
        body: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}

export default config