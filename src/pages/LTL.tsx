import styled from "@emotion/styled";
import { PrimaryButtonStyled } from "../components/atoms/UI/Buttons";
import Calculator from "../components/organisms/Calculater";
import MainLayouts from "../layouts/MainLayouts";
import Service from "../components/molecules/LTL/Service";
import Cargo from "../components/molecules/LTL/Cargo";
import Additional from "../components/molecules/LTL/Additional";
import Contract from "../components/molecules/LTL/Contract";
import Map from "../components/molecules/LTL/Map";

const LTL = () => {
  return (
    <MainLayouts title="LTL" className="section--without-padding">
      <LTLHeader className="flex items-center">
        <div className="ltl_content">
          <div className="title" style={{ marginBottom: "2rem" }}>
            LTL - перевозка сборных грузов для вашего бизнеса
          </div>
          <div className="subtitle-block" style={{ color: "#8C8C8C" }}>
            С доставкой до склада или адреса клиента
          </div>

          <LTLContent className="flex gap-2">
            <PrimaryButtonStyled color="white" background="#94C325">
              Рассчитать стоимость
            </PrimaryButtonStyled>

            <PrimaryButtonStyled color="white" background="#94C325">
              Заключить договор
            </PrimaryButtonStyled>
          </LTLContent>
        </div>
        <div className="ltl_image">
          <img className="img" src={require("../assets/ltl.png")} alt="" />
        </div>
      </LTLHeader>

      <LTLSectionStyled className="ltl">
        <Service />
        <Calculator
          title="Рассчитать стоимость доставки"
          subtitle="Юридические отправления расчитываются в личном кабинете"
          link={false}
        />
        <Cargo />
        <Additional />
        <Contract />
        <Map />
      </LTLSectionStyled>
    </MainLayouts>
  );
};

const LTLSectionStyled = styled.div`
  .ltl_cargo {
    margin-top: 8rem;
  }

  .ltl_cargo-card {
    margin-bottom: 3rem;
  }

  @media (max-width: 1000px) {
    .ltl_card-block {
      width: 100%;
      margin-bottom: 2rem;
    }

    .title {
      margin-bottom: 3rem;
    }
  }

  @media (max-width: 480px) {
    .ltl_cargo {
      margin-top: 2rem;
    }

    img {
        width: 80px;
        height: 80px;
    }
  }
`;

const LTLContent = styled.div`
  margin-top: 5rem;

  @media (max-width: 1000px) {
    margin-top: 2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    button {
      padding-inline: .5rem;
    }
  }

  @media (max-width: 480px) {
    button {
      width: 50%;
    }
  }
`;

const LTLHeader = styled.div`
  @media (max-width: 768px) {
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    .ltl_image {
      display: none;
    }
  }
`;

export default LTL;
