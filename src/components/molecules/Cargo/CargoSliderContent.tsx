import styled from "@emotion/styled";
import { PrimaryButtonStyled } from "../../atoms/UI/Buttons";

const CargoSliderContent = () => {
  return (
    <CargoSlider>
      <div className="media_slider">
        <div className="media_content">
          <div className="title">
            Программа лояльности <span>Альфа Карго</span>
          </div>
          <div className="subtitle-block">
            Отправляйте посылки копите баллы и оплачивайте ими до 99% стоимости
            услуг Альфа Карго, получайте персональные скидки и участвуйте в
            акциях только для своих
          </div>

          <PrimaryButtonStyled background="#94C325">Стать клиентом Альфа Карго</PrimaryButtonStyled>
        </div>
        <div className="media_slider-image">
          <img
            src={require("../../../assets/images/cargo/cargo.png")}
            alt="Media Slider"
            className="img"
          />
        </div>
      </div>
    </CargoSlider>
  );
};

const CargoSlider = styled.div`
  width: 100%;

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

  @media (max-width: 768px) {
    .media_slider-image {
      display: none;
    }

    .media_content {
      width: 100%;
      max-width: 100%;
    }

    .subtitle-block {
      margin-bottom: 3rem;
    }
  }
`;

export default CargoSliderContent;
