import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'

import theme from './styles/theme'
import { Routes } from './routes'


/* import { Home } from './pages/Home' */
/* import { MoviePreview } from './pages/MoviePreview' */
/* import { CreateMovie } from './pages/CreateMovie' */
/* import { Profile } from './pages/Profile' */
/* import { SignIn } from './pages/SignIn' */
/* import { SignUp } from './pages/SignUp' */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> {/* compartilhando o theme com toda a aplicação */}
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
)
