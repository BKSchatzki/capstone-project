import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        lemon: {
          primary: '#4a5e57',
          secondary: '#fef4eb',
          accent: '#f3cf42',
          'base-100': '#ffffff',
          'base-200': '#ededee',
          neutral: '#333333',
        },
      },
    ],
  },
};
