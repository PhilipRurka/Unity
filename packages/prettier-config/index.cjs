/**
 * @format
 * @type {import("prettier").Config}
 */

module.exports = {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],

  tabWidth: 2,
  printWidth: 120,
  singleQuote: true,
  trailingComma: "es5",

  importOrder: ["^@unity/(.*)", "^@/(.*)", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
