import sharedConfig from '@unity/tailwind';

const tailwindConfig = {
  ...sharedConfig,
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../sdk/components/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};

export default tailwindConfig;
