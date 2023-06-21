import { HomeContainer, HomeContent, ProductContainer } from "./style";
import coffeeHome from "../../assets/coffeHome.svg"
import IconBox from "../../assets/IconBox.svg"
import IconCar from "../../assets/IconCar.svg"
import IconCoffee from "../../assets/IconCoffee.svg"
import IconTime from "../../assets/IconTime.svg"





export function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        
        <div className="content">
          <div className="promCoffee">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebbe seu café onde estiver, a qualquer hora</p>
          </div>
          <div className="promDelivery">
            <p><img src={IconCar} alt="BuyCar" /> Compra simples e segura</p>
            <p><img src={IconBox} alt="Box" /> Embalagem mantém o café intacto</p>
            <p><img src={IconTime} alt="Time" /> Entrega rápida e rastreada</p>
            <p><img src={IconCoffee} alt="Coffee" /> O café chega fresquino até você</p>
          </div>
        </div>
        <div>
          <img src={coffeeHome} alt="" />
        </div>
      </HomeContent>
      <ProductContainer>
        <div>
          <h3>Nossos Cafés</h3>
        </div>
        <div className="products">

        </div>
      </ProductContainer>
    </HomeContainer>
  )
}