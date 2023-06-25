import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"
import { ProductsContextProvider } from "./contexts/ProductContext"

function App() {


  return (

    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ProductsContextProvider>
          <Router />
        </ProductsContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
