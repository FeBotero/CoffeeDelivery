import styled from "styled-components";

export const LayoutContainer=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  .header{
    position: fixed;
    background: white;
    top: 0;
    left: 0;
    right: 0;
    
  }
  .content{
    margin-top: 3rem;
    flex-grow: 1;
  }
`