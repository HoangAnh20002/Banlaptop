module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
  theme: {
    // screens: {
    //   'smres': { 'max': '639px' },
    //   'mdres': { 'max': '767px' },
    //   'lgres': { 'max': '1023px' },
    //   'xlres': { 'max': '1279px' },
    // },
  }
};