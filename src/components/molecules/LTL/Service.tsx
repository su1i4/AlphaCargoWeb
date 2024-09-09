import styled from "@emotion/styled";
import { FileTextIcons } from "../../atoms/Icons";
import { Block } from "../../atoms/UI/Block";

const Service = () => {
  return (
    <div className="ltl_service">
      <div className="title">Об услуге</div>

      <div className="ltl_card flex content-between block-mb">
        <Block
          className="ltl_card-block"
          width="32.33333%"
          style={{ textAlign: "center" }}
        >
          <div className="subtitle-block" style={{ marginBottom: "2rem" }}>
            Минимальный вес заказа
          </div>
          <div className="title-block">от 100 кг</div>
        </Block>

        <Block
          className="ltl_card-block"
          width="32.33333%"
          style={{ textAlign: "center" }}
        >
          <div className="subtitle-block" style={{ marginBottom: "2rem" }}>
            Максимальный вес места
          </div>
          <div className="title-block">до 100 кг</div>
        </Block>

        <Block
          className="ltl_card-block"
          width="32.33333%"
          style={{ textAlign: "center" }}
        >
          <div className="subtitle-block" style={{ marginBottom: "2rem" }}>
            Максимальные габариты (без поддона)
          </div>
          <div className="title-block">200x120x150 см</div>
        </Block>
      </div>

      <div className="flex gap-3 block-mb" style={{ marginTop: "3rem" }}>
        <div
          className="flex items-center gap-1_2"
          style={{ marginBottom: "1.3rem" }}
        >
          <FileTextIcons />
          <div className="subtitle-block">
            Требования к упаковке м маркировке отправлений
          </div>
        </div>
        <div
          className="flex items-center gap-1_2"
          style={{ marginBottom: "1.3rem" }}
        >
          <FileTextIcons />
          <div className="subtitle-block">Список запрещенных отправлений</div>
        </div>
      </div>

      <LTLServicesBorder>
        Стоимость услуги актуальна при наличии договора с Альфа Карго
      </LTLServicesBorder>
    </div>
  );
};

const LTLServicesBorder = styled.div`
  display: inline-block;
  margin-block: 7rem;
  border: 1px solid #02447f;
  padding: 1.6rem 5rem;
  border-radius: 10px;
  font-size: 2.4rem;
  font-weight: 600;

  @media (max-width: 1000px) {
    margin-block: 3rem;
  }

  @media (max-width: 480px) {
    margin-block: 3rem;

    font-size: 1.6rem;

    padding: 2rem;
  }
`;

export default Service;
