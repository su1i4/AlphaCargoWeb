import styled from "@emotion/styled";
import MainLayouts from "../layouts/MainLayouts";
import { PrimaryButtonStyled } from "../components/atoms/UI/Buttons";
import Calculater from "../components/organisms/Calculater";
import CalculaterCard from "../components/molecules/CalculaterCard";
import useManagerModal from "../hooks/useManagerModal";
import RequestDeliveryModal from "../components/modal/RequestDeliveryModal";

const Business = () => {
  const { modalInfo, setRequestDelivery, clearModal } = useManagerModal();

  const onShowModalRequest = () => {
    setRequestDelivery("Оформить заказ");
  }

  return (
    <>
      {modalInfo && (
        <RequestDeliveryModal
          title={modalInfo.title as string}
          clearModal={clearModal}
        />
      )}
      <MainLayouts title="Бизнес">
        <CalculaterBlock className="calculater">
          <div className="calculater_content">
            <div className="calculater_title">
              Мы - доставляем{" "}
              <span className="calculater_title--blue">быстро</span>, вы -
              платите <span className="calculater_title--green">мало</span>
            </div>

            <div className="calculater_subtitle">По России и Кыргызстану</div>

            <PrimaryButtonStyled color="white" background="#94C325" onClick={onShowModalRequest}>
              Оформить заказ
            </PrimaryButtonStyled>
          </div>

          <Calculater
            title="Рассчитать стоимость доставки"
            subtitle="Юридические отправления расчитываются в личном кабинете"
            link
          />
        </CalculaterBlock>
        <CalculaterCard />
      </MainLayouts>
    </>
  );
};

const CalculaterBlock = styled.div`
  padding-block: 8rem;
  padding-top: 0;

  @media (max-width: 480px) {
    padding-block: 3rem;
  }

  .calculater_content {
    text-align: center;

    button {
      margin-bottom: 10rem;
      @media (max-width: 480px) {
        margin-bottom: 3rem;
      }
    }
  }

  .calculater_title {
    font-size: 3.8rem;
    font-weight: 600;
    margin-bottom: 3rem;

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
    margin-bottom: 5rem;

    @media (max-width: 480px) {
      font-size: 1.8rem;
      margin-bottom: 3rem;
    }
  }
`;

export default Business;
