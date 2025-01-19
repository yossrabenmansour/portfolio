module.exports = {
  theme: {
    extend: {
      animation: {
        updown: 'updown 3s linear infinite',
      },
      keyframes: {
        updown: {
          '0%': {
            transform: 'translateY(-20px)',
          },
          '50%': {
            transform: 'translateY(20px)',
          },
          '100%': {
            transform: 'translateY(-20px)',
          },
        },
      },
    },
  },
  plugins: [],
}

