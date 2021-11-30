import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { tomato  } from '@material-ui/core/colors'

const theme = createTheme({
  palette:{
    primary:{
      main:'#fefefe'
    },
    secondary: tomato
  },
  typography:{
    fontFamily: 'Quicksand',
    fontWeightLight:400,
    fontWeightRegular:500,
    fontWeightMedium:600,
    fontWeightBold:700,
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
         <Component {...pageProps} />
        
    </ThemeProvider>
    </>
  )
}

export default MyApp
