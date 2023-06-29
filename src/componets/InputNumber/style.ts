import styled from "styled-components"

export const InputContainer = styled.div`
  display: flex;
  
  background: ${props=>props.theme["base-button"]};
  
  border-radius: 8px;
  height: 3rem;
  align-items: center;
  justify-content: space-between;
  width: 5vw;
  font-weight: bold;
  font-size: large;
  padding: 0.5rem;
  
  div{
    display: flex;
    align-items: center;
    height: 100%;

  }
  img{
    height: 1rem;
  }

  input[type=number]{
    appearance: textfield;
    -moz-appearance: textfield;
    background-color: transparent;
    border: 0;
    text-align: center;
    width: 1.5rem;
  }
  .sets{
    border: 0;
    color: ${props=>props.theme["purple"]};
    cursor: pointer;
    
  }
 
`