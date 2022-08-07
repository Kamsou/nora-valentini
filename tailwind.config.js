module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-down": {
          "0%": {
            transform: 'translateY(0px)'
          },
          "100%": {
            transform: 'translateY(100%)'
          }
        }
      },
      animation: {
        "slide-down": "slide-down 2s 4s ease-in-out forwards"
      }
    },
  },
  plugins: [],
}