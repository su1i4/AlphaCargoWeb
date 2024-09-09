import styled from "@emotion/styled";
import { PrimaryButton } from "../atoms/UI/Buttons";

const CalculaterCard = () => {
  return (
    <CalculaterCardBlock>
      <div className="title">Наши услуги</div>

      <div className="calculater_cards">
        <div className="calculater_card mb-3 flex content-between items-center">
          <div className="calculater_content">
            <div className="title-block">Хранение на складе</div>
            <div className="subtitle-block">
              Храните свой товар у нас на складе в Кыргызстане и России
            </div>
            <PrimaryButtonStyled>Подробнее</PrimaryButtonStyled>
          </div>

          <div className="calculater_image">
            <img
              className="img"
              src={require("../../assets/cub2.png")}
              alt=""
            />
          </div>
        </div>
        <div className="calculater_card--flex-block flex gap-3">
          <div className="calculater_card calculater_card--flex flex content-between items-center">
            <div className="calculater_content">
              <div className="title-block">Логистические услуги</div>
              <div className="subtitle-block">
                Поможем с оформлением документов и страховки
              </div>
              <PrimaryButtonStyled className="outline">
                Подробнее
              </PrimaryButtonStyled>
            </div>

            <div className="calculater_image">
              <img
                className="img"
                src={require("../../assets/cub3.png")}
                alt=""
              />
            </div>
          </div>
          <div className="calculater_card calculater_card--flex flex content-between items-center">
            <div className="calculater_content">
              <div className="title-block">Доставка</div>
              <div className="subtitle-block">
                Доставим любой груз, в удобное для вас время
              </div>
              <PrimaryButtonStyled className="outline">
                Подробнее
              </PrimaryButtonStyled>
            </div>

            <div className="calculater_image">
              <img
                className="img"
                src={require("../../assets/cub4.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </CalculaterCardBlock>
  );
};

const CalculaterCardBlock = styled.div`
  width: 100%;

  padding-block: 8rem;
  background-color: white;
  box-shadow: 0 0 0 100vmax #fff;
  clip-path: inset(0 -100vmax);

  .calculater_card {
    background-color: #efefef;
    border-radius: 10px;
    padding: 4rem;

    &.calculater_card--flex {
      &:nth-child(1),
      &:nth-child(2) {
        width: 50%;

        @media (max-width: 1000px) {
          width: 100%;

          &:nth-child(1) {
            margin-bottom: 3rem;
          }
        }
      }
    }

    @media (max-width: 480px) {
      padding: 2rem;
    }
  }

  .calculater_card--flex-block {
    @media (max-width: 1000px) {
      display: block;
    }
  }

  @media (max-width: 480px) {
    .title-block {
      font-size: 1.5rem;
    }

    .subtitle-block {
      font-size: 1.3rem;
    }

    padding-block: 2rem;
    margin-bottom: 3rem;
  }
`;

const PrimaryButtonStyled = styled(PrimaryButton)`
  background: #02447f;
  color: #fff;
  font-size: 1.8rem;
  border-radius: 15px;
  padding: 1rem 3rem 1.2rem 3rem;

  margin-top: 5.3rem;

  &.outline {
    background-color: transparent;
    color: #02447f;
    border: 2px solid #02447f;
  }

  @media (max-width: 480px) {
    margin-top: 1.6rem;
  }
`;
export default CalculaterCard;
