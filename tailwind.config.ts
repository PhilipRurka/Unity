import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        150: '37.5rem',
        200: '50rem',
        250: '62.5rem',
      },
    },
  },
  plugins: [],
  safelist: [
    /** widths */
    'w-4',
    'w-6',
    'w-8',
    'w-10',
    'w-12',
    'w-14',
    'w-16',
    'w-18',
    'w-20',
    'w-150',
    'w-200',
    'w-250',

    /** heights */
    'h-4',
    'h-6',
    'h-8',
    'h-10',
    'h-12',
    'h-14',
    'h-16',
    'h-18',
    'h-20',
  ],
};
export default config;
