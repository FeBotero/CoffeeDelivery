import { Address, AddressPayment, ConfirmationContainer, OrderDetailsContainer, Payment, Product, SectionCoffeeContainer, } from "./style";
import ExTrad from "../../assets/cafes/exTrad.svg"
import { InputNumber } from "../../componets/InputNumber";
import { Trash } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export function ConfirmationSell() {
  const navigate = useNavigate()

  function confirmOrder(){
    navigate("/delivery")
  }

  return (
    <ConfirmationContainer>
      <AddressPayment>
        <h3>Complete seu pedido</h3>
        <Address>
          <h4>Endereço de Entrega</h4>
          <span>Informe o endereço onde deseja receber seu pedido</span>
          <form action="">
            <input type="text" placeholder="CEP" name="CEP" />
            <input type="text" placeholder="Rua" name="RUA" />
            <div>
              <input type="text" placeholder="Numero" name="NUMERO" />
              <input type="text" placeholder="Complemento" name="COMPLEMENTO" />
            </div>
            <div>
              <input type="text" placeholder="Bairro" name="BAIRRO" />
              <input type="text" placeholder="Cidade" name="CIDADE" />
              <input type="text" placeholder="UF" name="UF" />
            </div>
          </form>
        </Address>
        <Payment>
          <h4>Pagamento</h4>
          <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
          <div className="paymentForm">
            <button>CARTÃO DE CRÉDITO</button>
            <button>CARTÃO DE DÉBITO</button>
            <button>DINHEIRO</button>
          </div>

        </Payment>
      </AddressPayment>
      <div>
        <h3>Cafés selecionados</h3>
        <SectionCoffeeContainer>
          <div>
            <div >
              <Product >
                <div>
                  <img src={ExTrad} alt="" />
                </div>
                <div className="products">
                  <div>
                    <p>Expresso Tradicional</p></div>
                  <div className="buttons">
                    <InputNumber />
                   
                    <button className="button"> <Trash size={24} color="#8047F8" />REMOVER</button>
                  </div>
                </div>
                <div >
                  <p className="price">R$ 9,90</p>
                </div>
              </Product>
              <hr />  
            </div>
            <div >
              <Product >
                <div>
                  <img src={ExTrad} alt="" />
                </div>
                <div className="products">
                  <div>
                    <p>Expresso Tradicional</p></div>
                  <div className="buttons">
                    <InputNumber />
                    <button className="button"> <Trash size={24} color="#8047F8" />REMOVER</button>
                  </div>
                </div>
                <div >
                  <p className="price">R$ 9,90</p>
                </div>
              </Product>
              <hr />  
            </div>
          </div>
          <OrderDetailsContainer>
            
            <div>
              <div>Total de itens</div>
              <div>R$ 29,70</div>
            </div>
            <div>
              <div>Entrega</div>
              <div>R$ 3,50</div>
            </div>
            <div className="orderTotal">
              <div>Total</div>
              <div>R$ 33,20</div>
            </div>
            <div>
              <button onClick={confirmOrder} className="confirmButton">CONFIRMAR PEDIDO</button>
            </div>
          </OrderDetailsContainer>
        </SectionCoffeeContainer>
      </div>
    </ConfirmationContainer>

  )
}