import { useState } from "react";
import BuyButton from "../../../../assets/BuyButton.svg"
import { InputNumber } from "../../../../componets/InputNumber"
import { BuyContainer, CardContainer } from "./style"
import { formatCash } from "../../../../utils/formatCash";

export interface ICardCoofee {
  img:string;
  nome:string;
  description:string;
  price:number;
  types:string[]
}

export function CardCooffee({ img, nome, description, price, types }: ICardCoofee) {
  const [quantity,setQuantity]=useState(1)
  const priceFormated = formatCash(price)

  function handleIncrese(){
    setQuantity(state=>state+1)
  }
  function handleDecrase(){
    setQuantity(state=>state-1)
  }

  return (
    <CardContainer>
      <div className="showCoffee">
        <img src={img} alt={nome} />
        <div className="types">
          {
            types.map((type:string) => (
              <span>{type}</span>
            ))
          }
        </div>
      </div>
      <div className="coffee">
        <h3>{nome}</h3>
        <p>{description}</p>
      </div>
      <BuyContainer>
        <div className="priceProduct"><span>R$ </span>{priceFormated}</div>
        <div className="qtdProduct">
          <InputNumber 
            onIncrase={handleIncrese}
            onDecrase={handleDecrase}
            quantity={quantity}
          />
          </div>
        <div className="buy">
          <button><img src={BuyButton} alt="" /></button>
        </div>
      </BuyContainer>
    </CardContainer>
  )
}