module.exports = {
  content: ["./src/**/*.{html,svelte,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui:{
    themes: true,
    darkTheme: "night"
  }
}
