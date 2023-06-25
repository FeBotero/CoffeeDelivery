import styled from "styled-components";

export const ConfirmationContainer = styled.main`
  display: flex;
  padding: 6rem;
  justify-content: space-between;
  

`
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
.paymentForm{
  display: flex;
  justify-content: center;
  gap: 2rem;

  button{
    border: 0;
    width: 100%;
    border-radius: 8px;
    height:3rem ;
    background: ${props => props.theme["base-button"]};
  }
}
`
export const Address = styled(BaseForm)`
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
export const SelectionProducts = styled(BaseForm)`
  display: flex;

  

`
export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  img{
    width: 3rem;
  }
  
`