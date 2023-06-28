import {Outlet} from "react-router-dom"
import { Header } from "../componets/Header"
import { LayoutContainer } from "./style"

export function DefaultLayout(){
  return(
    <LayoutContainer>
      <div className="header"><Header /></div>
      <div className="content"><Outlet/></div>
    </LayoutContainer>
  )
}