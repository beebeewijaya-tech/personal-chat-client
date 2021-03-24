module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#F05830",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#F05830",
    }),
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      museoModerno: ["MuseoModerno"],
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "hover"],
    },
  },
};
