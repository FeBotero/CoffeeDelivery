import styled, { css } from "styled-components"

interface QuantityInputProps {
  size?: "medium" | "small";
}

export const InputContainer = styled.div<QuantityInputProps>`
  display: flex;
  background: ${props=>props.theme["base-button"]};
  border-radius: 8px;
  height: 3rem;
  align-items: center;
  justify-content: space-between;
  width: 6vw;
  font-weight: bold;
  font-size: large;
  padding: 0.5rem;
  
  div{
    display: flex;
    align-items: center;
    height: 100%;

  }


  input[type=number]{
    appearance: textfield;
    -moz-appearance: textfield;
    background-color: transparent;
    border: 0;
    text-align: center;
    width: 1.5rem;
    &:focus {
            outline: none;
    }

    ${({ size }) => size === 'medium' && css`
    padding: 0.5rem;
    `}

    ${({ size }) => size === 'small' && css`
    padding: 0.3rem 0.5rem;
    `}
  }
  button{
    width: 1rem;
    border: 0;
    color: ${props=>props.theme["purple"]};
    cursor: pointer;
    background: transparent;
    
  }
 
`