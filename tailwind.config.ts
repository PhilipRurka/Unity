import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'article-background': 'url("/article-background.jpg")',
      },
      width: {
        150: '37.5rem',
        200: '50rem',
        250: '62.5rem',
      },
      boxShadow: {
        article: '0 0 30px 3px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '[data-component="cMarkdown"] p:empty:not(:last-child)': {
          paddingTop: '1rem',
        },
        '[data-component="cMarkdown"]:not(:last-child)': {
          marginBottom: '4rem',
        },
        '[data-component="cMarkdown"] h2 + h3, [data-component="cMarkdown"] h3 + h4': {
          marginTop: '2rem',
        },
      });
    }),
  ],
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

// Background b8b8b8
