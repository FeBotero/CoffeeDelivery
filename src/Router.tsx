import {Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/Index"
import { DefaultLayout } from "./layout/DefaultLayout"
import { ConfirmationSell } from "./pages/Confirmation"
import { Delivery } from "./pages/Delivery"

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/car" element={<ConfirmationSell/>}/>
        <Route path="/delivery" element={<Delivery/>}/>
      </Route>


    </Routes>
    
    
  )
}