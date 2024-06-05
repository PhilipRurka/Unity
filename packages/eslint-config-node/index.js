module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-base', 'airbnb-typescript/base', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off', // this is to make monorepo level package.json work
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
  },
  ignorePatterns: ['.eslintrc', '*.config.[jt]s', 'node_modules', 'build', 'dist', 'coverage'],
};
