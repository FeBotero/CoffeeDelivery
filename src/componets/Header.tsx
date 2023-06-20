import logo from "../assets/Logo.svg"
import ping from "../assets/Vector.svg"
import car from "../assets/Empty.svg"
import { BuyUser, HeaderContainer } from "./style"


export function Header(){
  return(
    <HeaderContainer>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <BuyUser>
        <div className="local"><img src={ping} alt="Localization" /> Manaus, AM</div>
        <div><img className="buyCar" src={car} alt="" /></div>
      </BuyUser>
    </HeaderContainer>
  )
}