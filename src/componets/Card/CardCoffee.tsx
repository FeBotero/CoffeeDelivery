import exTrad from "../../assets/exTrad.svg"
import BuyButton from "../../assets/BuyButton.svg"
import { BuyContainer, CardContainer } from "./style"
export function CardCooffee() {
  return (
    <CardContainer>
      <div className="showCoffee">
        
          <img src={exTrad} alt="Café Tradicional" />
        
        
            <span>Tradicional</span>
        
      </div>
      <div className="coffee">
          <h3>Expresso Tradicional</h3>        
          <p>O tradicional café feito com água quente e grãos moídos</p>
      </div>
      <BuyContainer>
        <div className="priceProduct"><span>R$ </span>9,90</div>
        <div className="qtdProduct"><input type="number" name="quantidade" /></div>
        <div className="buy">
            <button><img src={BuyButton} alt="" /></button>
        </div>
      </BuyContainer>
    </CardContainer>
  )
}