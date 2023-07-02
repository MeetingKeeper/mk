const config = require('@pm/styles/tailwind.config');

module.exports = {
  ...config,
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
};
