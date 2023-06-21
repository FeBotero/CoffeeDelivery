import {Outlet} from "react-router-dom"
import { Header } from "../componets/Header"
import { LayoutContainer } from "./style"

export function DefaultLayout(){
  return(
    <LayoutContainer>
      <Header/>
      <Outlet/>
    </LayoutContainer>
  )
}