import styled from "styled-components";

export const LayoutContainer=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

 
 
`

export const HeaderContent= styled.header`
 
    position: fixed;
    background: ${props=>props.theme["white"]};
    top: 0;
    left: 0;
    right: 0;
    
  

`
export const Content=styled.main`
 
    margin-top: 3rem;
    flex-grow: 1;
    
 
`