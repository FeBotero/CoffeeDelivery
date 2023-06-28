import Local from "../../assets/local.svg"
import Timer from "../../assets/IconTime.svg"
import Cash from "../../assets/cash.svg"
import Illustration from "../../assets/Illustration.svg"
import { DeliveryContainer, DestinyContainer, TypeContent } from "./style"

export function Delivery(){

  return(
    <DeliveryContainer>
    <div>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <DestinyContainer>
        <TypeContent>
          <img src={Local} alt="" />
          <div>
            <p>Entrega em Rua João Daniel Martinelli, 102</p>
            <p>Farrapos - Porto Alegre, RS</p>
          </div>
        </TypeContent>
        <TypeContent>
          <img src={Timer} alt="" />
          <div>
            <p>Previsão de entrega</p>
            <p>20 min - 30 min</p>
          </div>
        </TypeContent>
        <TypeContent>
          <img src={Cash} alt="" />
          <div>
            <p>Pagamento na entrega</p>
            <p>Cartão de Crédito</p>
          </div>
        </TypeContent>
      </DestinyContainer>
    </div>
    <div>
      <img src={Illustration} alt="" />
    </div>
    </DeliveryContainer>
  )
}