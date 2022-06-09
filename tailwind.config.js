module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#30AF91',

          secondary: '#9f79d1',

          accent: '#d31dd6',

          neutral: '#141B1F',

          'base-100': '#FFFFFF',

          info: '#B0D9E8',

          success: '#16A34A',

          warning: '#95540E',

          error: '#E9482F',
        },
      },
    ],
  },
  plugins: [require('daisyui'), require('tw-elements/dist/plugin')],
}
