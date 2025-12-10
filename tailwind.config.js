module.exports = {
  content: [
    "./src/pages/bsx-license-calculator/**/*.{js,jsx,ts,tsx}",
    "./src/components/bsx-license-calculator/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  important: ".license-calculator",
  corePlugins: {
    preflight: false,
  },
};