/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/context/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        reform: {
          primary: '#00bed6',
          secondary: '#004452',
          light: '#80dfe9',
          dark: '#003340',
          gray: '#f5f5f5',
        },
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'sans-serif'],
        sans: ['var(--font-roboto)', 'sans-serif'],
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        rollIn: {
          '0%': { transform: 'translateX(-100%) rotateY(-180deg)', opacity: '0' },
          '100%': { transform: 'translateX(0) rotateY(0deg)', opacity: '1' }
        },
        spin3d: {
          '0%': { transform: 'perspective(2000px) rotateY(0deg) translateZ(30px)' },
          '100%': { transform: 'perspective(2000px) rotateY(360deg) translateZ(30px)' }
        },
        expandWidth: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' }
        }
      },
      animation: {
        shine: 'shine 1s ease-in-out infinite',
        rollIn: 'rollIn 0.6s ease-out',
        spin3d: 'spin3d 2.5s linear infinite',
        expandWidth: 'expandWidth 0.3s ease-out'
      },
      boxShadow: {
        'logo': '0 25px 30px -12px rgba(0, 190, 214, 0.25), 0 18px 20px -15px rgba(0, 190, 214, 0.2)',
        'logo-dark': '0 25px 30px -12px rgba(255, 255, 255, 0.25), 0 18px 20px -15px rgba(255, 255, 255, 0.2)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.reform.dark'),
            a: {
              color: theme('colors.reform.primary'),
              '&:hover': {
                color: theme('colors.reform.light'),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.white'),
            a: {
              color: theme('colors.reform.light'),
              '&:hover': {
                color: theme('colors.reform.primary'),
              },
            },
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
            h3: { color: theme('colors.white') },
            h4: { color: theme('colors.white') },
            strong: { color: theme('colors.white') },
            code: { color: theme('colors.white') },
            blockquote: { color: theme('colors.gray.400') },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
