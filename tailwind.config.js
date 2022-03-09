module.exports = {
  content: {
      enabled: false, // change at true for production
      content: ['*.html'],
    },
  media: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
