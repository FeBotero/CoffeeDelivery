import { AddressPayment, ConfirmationContainer, } from "./style";

import { Address } from "./components/Address";
import { ConfirmOrder } from "./components/ConfirmOrder";

export function ConfirmationSell() {
  

  return (
    <ConfirmationContainer>
      <AddressPayment>
        <h3>Complete seu pedido</h3>
        <Address/>
      </AddressPayment>
      <div>
        <h3>Cafés selecionados</h3>
        <ConfirmOrder/>
      </div>
    </ConfirmationContainer>

  )
}