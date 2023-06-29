import styled from "styled-components"

export const AddressPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
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
export const Payment = styled(BaseForm)`
  gap: 1rem;
  h4{
    display: flex;
    align-items: center;
    font-size:x-large;
    font-weight: 400;
  }
.paymentForm{
  display: flex;
  justify-content: center;
  gap: 2rem;

  button{
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 0.3rem;
    border: 2px solid transparent;
    width: 100%;
    height:4rem ;
    border-radius: 8px;
    justify-content: center;
    font-size: smaller;
    color:${props => props.theme["base-text"]};
    background: ${props => props.theme["base-button"]};
    cursor:pointer
  }
  .chose{
    background: ${props => props.theme["purple-light"]};
    border:2px solid ${props => props.theme["purple"]};
  }
}
  
`

export const Add = styled(BaseForm)`
  gap: 1rem;

  input[name="CEP"]{
    width: 35%;
  }
  input[name="NUMERO"]{
    width: 55%;
  }
  input[name="BAIRRO"]{
    width: 65%;
  }
  input[name="UF"]{
    width: 15%;
  }

`