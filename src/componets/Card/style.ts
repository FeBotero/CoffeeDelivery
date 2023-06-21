import styled from "styled-components";

export const CardContainer = styled.div`
margin-top: 3rem;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme["base-card"]};
  width: 20rem;
  height: 25rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  border-radius: 0 32px;
  padding: 1rem;

  .showCoffee{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    img{
      margin-top: -6rem;
      width: 10rem;
    }
  

  p{
    
    background: ${props => props.theme["yellow-light"]};
    border-radius: 16px;
    font-size: 1rem;
    padding: 0.2rem;
    color:${props => props.theme["yellow-dark"]}
  }
  }
  
  .coffee{
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3{
      color:${props => props.theme["base-subtitle"]}
    }
    p{
      color:${props => props.theme["base-label"]}
    }
  }
`

export const BuyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  .priceProduct{
    display: flex;
    align-items: flex-end;
    gap:0.5rem;
    color:${props => props.theme["base-text"]};
    font-size: 2rem;
    span{
      font-size: 0.8rem;
    }
  }
  .qtdProduct{
    display: flex;
    align-items: center;
      input{
        width: 4rem;  
        height: 2.5rem;
      }
    }
  .buy{
    
    button{
      border:0;
      background: none;
    }
    img{
      height: 2.5rem;
    }
  }

`