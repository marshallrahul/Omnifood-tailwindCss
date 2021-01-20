module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
       'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/public/img/hero.jpg')",
       'back-customers': "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/public/img/back-customers.jpg')",
      },
      fontFamily: {
        body: ["Quicksand"]
      },
      borderWidth: {
        thin: "1px",
      },
      colors: {
        primary: "#e67e22",
        secondary: "#555",
        facebook: "#3b5998",
        instagram: "#3f729b",
        googleplus: "#dc4e41",
        whatsapp: "#43d854",
      },
       height: {
       sm: '2px',
      }
    },
  },
  variants: {
    extend: {
      borderColor: ['hover'],
      borderWidth: ['hover'],
    },
  },
  plugins: [],
}