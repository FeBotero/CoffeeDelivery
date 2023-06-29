import { Trash } from "@phosphor-icons/react";
import { SectionCoffeeContainer, Product, OrderDetailsContainer } from "./style";



export function ConfirmOrder(){
  return(
    <SectionCoffeeContainer>
          <div>
            <div >
              <Product >
                <div>
                  <img src="" alt="Café Tradicional" />
                </div>
                <div className="products">
                  <div>
                    <p>Expresso Tradicional</p></div>
                  <div className="buttons">
                     
                   
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
              <button className="confirmButton">CONFIRMAR PEDIDO</button>
            </div>
          </OrderDetailsContainer>
        </SectionCoffeeContainer>
  )

}