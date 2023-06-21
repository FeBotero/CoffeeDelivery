import { HomeContainer } from "./style";
import coffeeHome from "../../assets/coffeHome.svg"

export function Home() {
  return (
    <HomeContainer>
      <div>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebbe seu café onde estiver, a qualquer hora</p>
        </div>
        <div>
          <p>Compra simples e segura</p>
          <p>Embalagem mantém o café intacto</p>
          <p>Entrega rápida e rastreada</p>
          <p>O café chega fresquino até você</p>
        </div>
      </div>
      <div>
        <img src={coffeeHome} alt="" />
      </div>

    </HomeContainer>

  )
}