import { useState } from "react";
import BuyButton from "../../../../assets/BuyButton.svg"
import { InputNumber } from "../../../../componets/InputNumber"
import { BuyContainer, CardContainer } from "./style"

export interface ICardCoofee {
  img:string;
  nome:string;
  description:string;
  price:number;
  types:string[]
}

export function CardCooffee({ img, nome, description, price, types }: ICardCoofee) {
  const [quantity,setQuantity]=useState(1)


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
        <div>
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
        <div className="priceProduct"><span>R$ </span>{price}</div>
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