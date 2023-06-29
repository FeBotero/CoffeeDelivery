import styled from "styled-components";

export const BaseForm = styled.div`
  display: flex;
  background: ${props => props.theme["base-card"]};
  border-radius: 8px;
  padding: 2rem;
  flex-direction: column;

  form{
    display: flex;
    flex-direction: column;
    gap:0.5rem;

    input{
      background: ${props => props.theme["base-button"]};
      border: 0;
      height: 3rem;
      padding-left: 0.5rem;
      border-radius: 6px;
      width: 100%;
      color: ${props=>props.theme["base-text"]};
    }

    div{
      display: flex;
      gap: 0.5rem;
    }
  }

`



export const ProductContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 25vw;
  img{
    width: 5rem;
  }
  .buttons{
    display: flex;
    gap: 1rem;
  }
  .products{
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
  }

  p{
      font-size: larger;
    }

  .button{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 0;
    height: 3rem;
    border-radius: 8px;
    padding: 0.5rem;
  }
`
    
export const SectionCoffeeContainer=styled(BaseForm)`
display: flex;
margin-top: 1rem;
gap:1rem;

hr{
  margin-top: 1rem;
  margin-bottom: 1rem;
  
  color: ${props=>props.theme["base-button"]};
}
`


export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 25vw;
  img{
    width: 5rem;
  }
  .buttons{
    display: flex;
    gap: 1rem;
  }
  .products{
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
  }

  p{
      font-size: larger;
    }

  .button{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 0;
    height: 3rem;
    border-radius: 8px;
    padding: 0.5rem;
    color:${props=>props.theme["base-text"]}
  
  }
  .price{
    font-weight: bold;
  }

  
`
export const OrderDetailsContainer=styled.div`
  display: flex;
  flex-direction: column;


  div{
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }

  .orderTotal{
    display: flex;
    font-size: larger;
    font-weight: bold;
  }
  .confirmButton{
    display: flex;
    width: 100%;
    justify-content: center;
    height: 3rem;
    align-items: center;
    background: ${props=>props.theme["yellow"]};
    border: 0;
    border-radius: 8px;
    color: ${props=>props.theme["white"]};
    font-weight: 600;
  }
  
  
  .price{
    font-weight: bold;
  }

  
`