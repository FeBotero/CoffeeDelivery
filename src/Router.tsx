import {Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/Index"
import { DefaultLayout } from "./layout/DefaultLayout"

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>}/>
      </Route>


    </Routes>
    
    
  )
}