import styled from "@emotion/styled";
import { Block } from "../../atoms/UI/Block";

const CargoCard = () => {
  return (
    <CargoCardBlock>
      <div className="title">
        Приемущества подключения к программе лояльности
      </div>

      <div className="cargo_card flex content-between">
        <Block className="cargo_card-block">
            <div>
                <img className="img" src={require('../../../assets/images/cargo/s1.png')} alt="Card Image" />
            </div>

            <div className="card_card-content">
                <div className="title-block">Посылки без документов</div>
                <div className="subtitle-block">Вручение за минуту по push-уведомлению или SMS-коду</div>
            </div>
        </Block>
        <Block className="cargo_card-block">
        <div>
                <img className="img" src={require('../../../assets/images/cargo/s2.png')} alt="Card Image" />
            </div>

            <div className="card_card-content">
                <div className="title-block">Копите кешбек баллами</div>
                <div className="subtitle-block">Возвращаем до 10% баллами от стоимости каждой посылки</div>
            </div>
        </Block>
        <Block className="cargo_card-block">
        <div>
                <img className="img" src={require('../../../assets/images/cargo/s3.png')} alt="Card Image" />
            </div>

            <div className="card_card-content">
                <div className="title-block">Отправляйте со скидками</div>
                <div className="subtitle-block">Оплачивайте часть стоимости баллами или купонами</div>
            </div>
        </Block>
      </div>
    </CargoCardBlock>
  );
};

const CargoCardBlock = styled.div`
margin-top: 3rem;
  cargo_card {
    flex-wrap: wrap;
  }
  .cargo_card-block {
    width: 31.33333%;
    max-width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-bottom: 3rem;
    }
  }

  @media (max-width: 768px) {
    margin-top: 3rem;
    .cargo_card {
        display: block;
    }

    .cargo_card-block {
        width: 100%;
        margin-bottom: 3rem;
    }
  }
`;

export default CargoCard;
