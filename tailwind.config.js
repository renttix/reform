/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'reform-primary': '#00bed6',
        'reform-secondary': '#0099b3',
        'reform-light': '#33d6ea',
        'reform-dark': '#1a1a1a',
        'reform-gray': '#666666',
      },
      animation: {
        'spin3d': 'spin3d 20s linear infinite',
        'rollIn': 'rollIn 1.5s ease-out forwards',
        'ticker': 'ticker 30s linear infinite',
      },
      keyframes: {
        spin3d: {
          '0%': { 
            transform: 'perspective(1000px) rotateY(0deg)',
            WebkitTransform: 'perspective(1000px) rotateY(0deg)'
          },
          '100%': { 
            transform: 'perspective(1000px) rotateY(360deg)',
            WebkitTransform: 'perspective(1000px) rotateY(360deg)'
          },
        },
        rollIn: {
          '0%': { 
            transform: 'translateX(-100%) rotate(-120deg)',
            WebkitTransform: 'translateX(-100%) rotate(-120deg)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateX(0) rotate(0deg)',
            WebkitTransform: 'translateX(0) rotate(0deg)',
            opacity: '1'
          },
        },
        ticker: {
          '0%': { 
            transform: 'translateX(0)',
            WebkitTransform: 'translateX(0)'
          },
          '100%': { 
            transform: 'translateX(-50%)',
            WebkitTransform: 'translateX(-50%)'
          },
        },
      },
      boxShadow: {
        'logo': '0 0 15px rgba(0, 190, 214, 0.5)',
        'logo-dark': '0 0 15px rgba(51, 214, 234, 0.5)',
      },
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding',
      },
      willChange: {
        'transform': 'transform',
        'opacity': 'opacity',
        'colors': 'background-color, border-color, color, fill, stroke',
      },
    },
  },
  plugins: [],
}
