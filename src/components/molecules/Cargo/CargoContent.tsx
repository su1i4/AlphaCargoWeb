import styled from "@emotion/styled";
import { PrimaryButtonStyled } from "../../atoms/UI/Buttons";

const CargoContent = () => {
  return (
    <CargoContentBlock>
      <div className="media_slider">
        <div className="media_content">
          <div className="title">
          Уровень может повышаться или понижаться в соответствии с количеством отправок в текущем месяце
          </div>
          <div className="subtitle-block">
          Например, если ваш уровень - 3%, и в течении месяца вы отправите 7 посылок, то со следующего календарного месяца вы будете получать 10% баллами от стоимости каждой отправки. Если в следующем месцяце отрпавленных посылок будет всего 3, то через месяц ваш уровень понизится до 5%
          </div>

          <PrimaryButtonStyled background="#94C325">Стать клиентом Альфа Карго</PrimaryButtonStyled>
        </div>
        <div className="media_slider-image">
          <img
            src={require("../../../assets/images/cargo/c1.png")}
            alt="Media Slider"
            className="img"
          />
        </div>
      </div>
    </CargoContentBlock>
  );
};

const CargoContentBlock = styled.div`
  width: 100%;
  margin-top: 8rem;

  .media_slider {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .media_content {
    width: 50%;

    .title {
      margin-bottom: 2rem;

      span {
        color: #02447F;
      }
    }
  }

  .media_slider-image {
    width: 50%;

    display: flex;
    justify-content: flex-end;
  }

  .subtitle-block {
        color: #8C8C8C;
        margin-bottom: 5rem;
  }

  @media(max-width: 1000px) {
    margin-block: 3rem;
    .media_content {
        width: 80%;
    }
  }

  @media (max-width: 768px) {
    .media_slider {
        display: block;
    }

    img {
        display: none;
    }

    .media_content {
        width: 100%;

        .subtitle-block {
            margin-bottom: 2rem;
        }
    }
  }
`;

export default CargoContent;
