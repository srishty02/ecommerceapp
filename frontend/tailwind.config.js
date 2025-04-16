/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Add your content paths here
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        fadeInLeft: 'fadeInLeft 1s ease-out forwards',
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        slideInRight: 'slideInRight 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Add your content paths here
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        progressLoading: {
          '0%': {
            width: '0%',
          },
          '100%': {
            width: '80%',
          },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1.5s ease-out forwards',
        progressLoading: 'progressLoading 3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
