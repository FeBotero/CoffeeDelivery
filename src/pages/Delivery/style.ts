import styled from "styled-components";

export const DeliveryContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  gap: 1rem;
  margin-top: 5rem;
  
  .contentContainer{
    padding: 0 6rem;
    margin-bottom: 2rem;
    display: flex;
    width: 70%;
    justify-content: center;
    flex-direction: column;
    
  }


`
export const TypeContent= styled.div`
  display: flex;
 
  gap: 1rem;
  padding: 1rem;
`
export const DeliveryContent = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;

`
export const DestinyContainer= styled.div`
    
    padding: 2.5rem;
    border-radius: 6px 36px 6px 36px;
    background: ${props=>props.theme["white"]};
    min-width: 32rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        inset: -2px;
        z-index: -1;
        border-radius: 7px 37px 7px 37px;
        background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    }

  
`