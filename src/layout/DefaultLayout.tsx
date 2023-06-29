import { Outlet } from "react-router-dom"
import { Header } from "../componets/Header"
import { Content, LayoutContainer, HeaderContent } from "./style"

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <HeaderContent>
        <Header />
      </HeaderContent>
      <Content>
        <Outlet />
      </Content>
    </LayoutContainer>
  )
}