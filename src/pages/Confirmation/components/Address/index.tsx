import { CurrencyDollar, CreditCard, Bank, Money } from "@phosphor-icons/react";
import { AddressPayment, Payment, Add } from "./style";
import { useState } from "react";

export function Address(){
  const [payChose,setPayChose] = useState("")
  return(
    <AddressPayment>
    <Add>
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
        </Add>
        <Payment>
          <h4><CurrencyDollar size={32} color="#9141ac" /> Pagamento</h4>
          <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
          <div className="paymentForm">
            <button className={payChose=="credit"?"chose":""} onClick={()=>setPayChose("credit")} value={payChose}>
            <CreditCard size={32} color="#9141ac" /> CARTÃO DE CRÉDITO
            </button>
            <button className={payChose=="debit"?"chose":""} onClick={()=>setPayChose("debit")} value={payChose}> <Bank size={32} color="#9141ac" />CARTÃO DE DÉBITO
            </button>
            <button  className={payChose=="cash"?"chose":""} onClick={()=>setPayChose("cash")} value={payChose}>
              <Money size={32} color="#9141ac" /> DINHEIRO
              </button>
          </div>

        </Payment>
    </AddressPayment>
  )
}