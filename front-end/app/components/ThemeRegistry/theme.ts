import { Roboto } from 'next/font/google'

import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { cyan, deepOrange, orange, teal } from '@mui/material/colors'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

// primary
// secondary
// error
// warning
// info
// success

const theme = extendTheme({
  trello: {
    appBarHeight: '48px',
    boardBarHeight: '60px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      }
    }
  },

  spacing: (factor: number) => `${0.25 * factor}rem`,

  typography: {
    fontFamily: roboto.style.fontFamily
  }
})

export default theme
