module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: {
        dark: "#28293E",
        "light-dark": "#391400",
        "dark-gray": "rgba(57, 20, 0, 0.64)",
      },
      secondary: {
        dark: "#EF6D58",
        light: "#FDF0E9",
      },
      third: {
        light: "FFFFFF",
        "light-gray": "rgba(255, 255, 255, 0.64)",
      },
    },
    extend: {},
  },
  plugins: [],
};
