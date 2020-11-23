module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        brown:
        {
          600: "#4a3f35",
          900: "#2f2519"
        },
        orange: {
          700: "#fa7d09",
          800: "#db6400",
        },
      },
      padding: (theme) => ({
        "2/5": "40%",
      }),
      margin: (theme) => ({
        "2/5": "40%",
      }),
      maxWidth: {
        200: "200px",
        700: "700px",
      },
      fontSize: {
        0: "0",
      },
      fontFamily: {
        "Roboto Condensed": ['"Roboto Condensed"', "sans-serif"],
      },
      inset: {
        '6': '1.5rem',
      }
    },
  },
  variants: {},
  plugins: [],
};
