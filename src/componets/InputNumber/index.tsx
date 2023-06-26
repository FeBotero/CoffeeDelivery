import { useState } from "react";
import { InputContainer } from "./style";
import menos from "../../assets/menos.svg"
import mais from "../../assets/mais.svg"

export function InputNumber() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }
  return (
    <InputContainer>
      <div className="sets" onClick={decrement}>
        <img src={menos} alt="" />
      </div>
      <div>
        {count}
      </div>
      <div className="sets" onClick={increment}>
        <img src={mais} alt="" />
      </div>


    </InputContainer>
  )
}