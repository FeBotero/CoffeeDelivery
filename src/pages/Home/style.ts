import styled from "styled-components";

export const HomeContainer=styled.main`
  display: flex;
  flex-direction: column;

`


export const HomeContent=styled.div`
  background-image: url("/src/assets/Background.svg");
  background-size: 100vw;
  
  display: flex;
  justify-content: space-between;
  padding: 6rem;

  

  .content{
    display: flex;
    
    flex-direction: column;
    
  }
  .promCoffee{
    display: flex;
    flex-direction: column;

    h1{
      font-size: 4rem;
      color: ${props=>props.theme["base-title"]};
    }
    p{
      font-size:1.5rem;
      color: ${props=>props.theme["base-subtitle"]};
    }
  }
  .promDelivery{
    display: grid;
    grid-template-rows: repeat(2,1fr);
    grid-template-columns: repeat(2,1fr);
    grid-row-gap: 1rem;
    margin-top: 4rem;
    grid-column-gap: 1rem;
    color: ${props=>props.theme["base-text"]};

    p{
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

`
export const ProductContainer=styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 6rem;



  .products{
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 3rem;
  }
`