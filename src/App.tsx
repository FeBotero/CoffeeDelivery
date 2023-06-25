import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"
import { CarContextProvider } from "./contexts/CarContext"

function App() {


  return (

    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CarContextProvider>
          <Router />
        </CarContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
