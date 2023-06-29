
import { InputContainer } from "./style";

import { Minus, Plus } from "@phosphor-icons/react";

interface QTDProps{
  size?: "medium" | "small";
  onIncrase:()=>void;
  onDecrase:()=>void;
  quantity:number;
}

export function InputNumber({size = 'medium',onIncrase,onDecrase,quantity}:QTDProps)  {
  
  return (
    <InputContainer size={size}>
      <button className="sets" disabled={quantity<=1} onClick={onDecrase}>
          <Minus size={14} />
      </button>
      
        <input type="number" value={quantity}  />
      
      <button disabled={quantity>=20}  onClick={onIncrase}>
        <Plus size={14}  />
      </button>


    </InputContainer>
  )
}