import { useState } from "react";
import { InputContainer } from "./style";

import { Minus, Plus } from "@phosphor-icons/react";

export function InputNumber() {
  const [count, setCount] = useState(1)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    if(count>1){
      setCount(count - 1)
    }else{
      ""
    }
  }
  return (
    <InputContainer>
      <div className="sets" onClick={decrement}>
          <Minus size={24} />
      </div>
      <div>
        {count}
      </div>
      <div className="sets" onClick={increment}>
        <Plus size={24} />
      </div>


    </InputContainer>
  )
}