import BuyButton from "../../assets/BuyButton.svg"
import { BuyContainer, CardContainer } from "./style"
export function CardCooffee({ img, nome, description, price, tipos }: any) {
  return (
    <CardContainer>
      <div className="showCoffee">

        <img src={img} alt={nome} />

        <div>
          {
            tipos.map((tipo:any) => (
              <span>{tipo}</span>
            ))
          }
        </div>




      </div>
      <div className="coffee">
        <h3>{nome}</h3>
        <p>{description}</p>
      </div>
      <BuyContainer>
        <div className="priceProduct"><span>R$ </span>{price}</div>
        <div className="qtdProduct"><input type="number" name="quantidade" /></div>
        <div className="buy">
          <button><img src={BuyButton} alt="" /></button>
        </div>
      </BuyContainer>
    </CardContainer>
  )
}