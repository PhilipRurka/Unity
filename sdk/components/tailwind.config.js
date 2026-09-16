import sharedConfig from '@unity/tailwind';

const tailwindConfig = {
  ...sharedConfig,
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
};

export default tailwindConfig;
