module.exports = {
  useTabs: false,
  tabWidth: 2,
  singleQuote: false,
  trailingComma: "all",
  printWidth: 100,
  plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.js",
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};
