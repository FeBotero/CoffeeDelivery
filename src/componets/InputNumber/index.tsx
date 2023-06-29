
import { InputContainer } from "./style";

import { Minus, Plus } from "@phosphor-icons/react";

interface QTDProps{
  onIncrase:()=>void;
  onDecrase:()=>void;
  quantity:number;
}

export function InputNumber({onIncrase,onDecrase,quantity}:QTDProps)  {
  
  return (
    <InputContainer>
      <button className="sets" disabled={quantity<=1} onClick={onDecrase}>
          <Minus size={14} />
      </button>
      <div>
        <input type="number" value={quantity}  />
      </div>
      <button className="sets" disabled={quantity>=20}  onClick={onIncrase}>
        <Plus size={14}  />
      </button>


    </InputContainer>
  )
}