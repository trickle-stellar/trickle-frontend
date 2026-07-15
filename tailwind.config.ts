import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './providers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        stellar: {
          blue: '#14b6e7',
          purple: '#7c3aed',
          dark: '#0a0a1a',
          darker: '#050510',
          card: '#111127',
          border: '#1e1e3f',
        },
      },
    },
  },
  plugins: [],
};

export default config;
