import styled from "styled-components"

export const InputContainer = styled.div`
  display: flex;
  
  background: ${props=>props.theme["base-button"]};
  
  border-radius: 8px;
  height: 3rem;
  align-items: center;
  justify-content: space-between;
  width: 7rem;
  font-weight: bold;
  font-size: large;
  
  div{
    display: flex;
    align-items: center;
    height: 100%;

  }
  
  img{
    height: 1rem;
  }
  .sets{
    color: ${props=>props.theme["purple"]};
    cursor: pointer;
   
  }
  .count{
    color: ${props=>props.theme["base-title"]};
  }
`