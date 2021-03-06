module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        firstMain: 'hsl(217, 28%, 15%)',
        secondMain: 'hsl(218, 28%, 13%)',
        darkMain: 'hsl(216, 53%, 9%)',
        testMos: 'hsl(219, 30%, 18%)',
        Cyan: 'hsl(176, 68%, 64%)',
        Blue: 'hsl(198, 60%, 50%)'
      },
      backgroundImage: {
        curvyDesk: "url('../images/bg-curvy-desktop.svg')",
        curvyMobi: "url('../images/bg-curvy-mobile.svg')",
      },
      zIndex: {
        '-10': -10,
      }
    },
    container: {
      center: true
    },
    fontFamily: {
      Raleway: ['Raleway, sans-serif'],
      OpenSans: ['Open Sans, sans-serif'],
    },
    
  },
  plugins: [],
}
