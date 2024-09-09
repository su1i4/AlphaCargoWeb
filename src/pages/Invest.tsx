import styled from "@emotion/styled";
import {
  OutlinedButton,
  PrimaryButtonStyled,
} from "../components/atoms/UI/Buttons";
import MainLayouts from "../layouts/MainLayouts";
import InvesAboutUs from "../components/molecules/Invest/InvesAboutUs";
import InvestMixing from "../components/molecules/Invest/InvestMixing";

const Invest = () => {
  return (
    <MainLayouts title="Инвесторам">
      <CalculaterBlock className="calculater">
        <div className="calculater_content">
          <div className="calculater_title">
            Мы - доставляем{" "}
            <span className="calculater_title--blue">быстро</span>, вы - платите{" "}
            <span className="calculater_title--green">мало</span>
          </div>

          <div className="calculater_subtitle">По России и Кыргызстану</div>

          <div className="calculater_btn">
            <PrimaryButtonStyled color="white" background="#94C325">
              Стать инвестором
            </PrimaryButtonStyled>

            <OutlinedButton background="#94C325">
              Презентация для инвесторов
            </OutlinedButton>
          </div>
        </div>
      </CalculaterBlock>

      <div className="invest">
        <InvesAboutUs />

        <InvestMixing />
      </div>
    </MainLayouts>
  );
};

const CalculaterBlock = styled.div`
  .calculater_content {
    text-align: center;

    button {
      margin-bottom: 8rem;
      @media (max-width: 480px) {
        margin-bottom: 3rem;
      }
    }
  }

  .calculater_title {
    font-size: 3.8rem;
    font-weight: 600;
    margin-bottom: 2rem;

    @media (max-width: 480px) {
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }

    &--blue {
      color: #02447f;
    }

    &--green {
      color: #94c325;
    }
  }

  .calculater_subtitle {
    font-size: 2.4rem;
    font-weight: 600;
    margin-bottom: 4rem;

    @media (max-width: 480px) {
      font-size: 1.8rem;
      margin-bottom: 3rem;
    }
  }

  .calculater_btn {
    display: flex;
    justify-content: center;
    gap: 1.2rem;

    @media (max-width: 480px) {
      gap: 0.5rem;
      button {
        width: 50%;
        padding-inline: 0;
        font-size: 1.1rem;
      }
    }
  }
`;

export default Invest;
