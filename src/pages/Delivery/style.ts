import styled from "styled-components";

export const DeliveryContainer = styled.main`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 5rem;
`
export const TypeContent= styled.div`
  display: flex;
 
  gap: 1rem;
  padding: 1rem;
`
export const DestinyContainer= styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  border-radius: 50px; /*1*/
  border: 2px solid transparent; /*2*/
  border-image: linear-gradient(45deg, purple, orange) 1;
`