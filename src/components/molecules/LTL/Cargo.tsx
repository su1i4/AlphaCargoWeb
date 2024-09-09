import { Block } from "../../atoms/UI/Block";

const Cargo = () => {
  return (
    <div className="ltl_cargo">
      <div className="title">Доставим ваш груз</div>

      <div className="ltl_cargo-card flex content-between block-mb">
        <Block className="ltl_card-block" width="32.33333%" style={{ textAlign: "center" }}>
          <img src={require("../../../assets/images/ltl/money.png")} />

          <div className="ltl_cargo-content">
            <div className="title-block">Товары</div>
            <div className="subtitle-block">
              На маркетплейс, склад, в магазин
            </div>
          </div>
        </Block>

        <Block className="ltl_card-block" width="32.33333%" style={{ textAlign: "center" }}>
          <img src={require("../../../assets/images/ltl/bag.png")} />

          <div className="ltl_cargo-content">
            <div className="title-block">Заказы</div>
            <div className="subtitle-block">Клиентам</div>
          </div>
        </Block>

        <Block className="ltl_card-block" width="32.33333%" style={{ textAlign: "center" }}>
          <img src={require("../../../assets/images/ltl/tool.png")} />

          <div className="ltl_cargo-content">
            <div className="title-block">Материалы, технику</div>
            <div className="subtitle-block">И многое другое</div>
          </div>
        </Block>
      </div>

      <div className="subtitle-block" style={{ color: "#8C8C8C" }}>
        Перевезем любой груз, если он подходит под указанные габариты и не
        запрещен
      </div>
    </div>
  );
};

export default Cargo;
