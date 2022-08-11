const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    colors: {
      'slate': {
        dark: '#94AAB1',
        light: '#959595',
        'bg': '#F7F7F7'
      }
    },
    fontSize: {
      sm: defaultTheme.fontSize.sm,
      xs: ['10px', '11.72px'],
      base: ['17px', '19.92px']
    }
  }
}
