import { Address, AddressPayment, ConfirmationContainer, Payment, Product, SelectionProducts } from "./style";
import ExTrad from "../../assets/cafes/exTrad.svg"
import { InputNumber } from "../../componets/InputNumber";

export function ConfirmationSell() {
  
   



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
        <SelectionProducts>
          <div >
            <Product >
              <div>
                <img src={ExTrad} alt="" />
              </div>
              <div>
                <div><p>Expresso Tradicional</p></div>
                <div>
                  <InputNumber/>

                  <button>Remover</button>
                </div>
              </div>
              <div>
                R$ 9,90
              </div>
            </Product>
            <div>
              <div>
                <img src={ExTrad} alt="" />
              </div>
              <div>
                <div><p>Expresso Tradicional</p></div>
                <div>
                  <input type="number" />
                  <button>Remover</button>
                </div>
              </div>
              <div>R$ 9,90</div>
            </div>

          </div>

        </SelectionProducts>
      </div>
    </ConfirmationContainer>

  )
}