/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#164881',
          light: '#2A5C95',
          dark: '#0D3B74',
        },
        secondary: {
          DEFAULT: '#CE2028',
          light: '#E54C53',
          dark: '#B51820',
        },
        marine: {
          blue: '#164881',
          red: '#CE2028',
          gold: '#DCAF35',
        }
      },
      lineClamp: {
        2: '2',
        3: '3',
        4: '4',
      },
      keyframes: {
        textColor: {
          '0%, 100%': {
            color: '#164881',
          },
          '33%': {
            color: '#CE2028',
          },
          '66%': {
            color: '#DCAF35',
          },
        },
      },
      animation: {
        'text-color': 'textColor 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};