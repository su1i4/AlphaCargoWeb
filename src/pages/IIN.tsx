import {
  BriefCaseIcons,
  FilesIcons,
  RocketIcons,
  TrackIcons,
} from "../components/atoms/Icons";
import IINField from "../components/organisms/IINField";
import MainLayouts from "../layouts/MainLayouts";
import styled from "@emotion/styled";

const IIN = () => {
  return (
    <MainLayouts title="Заключить договор инн введен">
      <IINStyled className="iin">
        <div className="iin_block flex items-flex-start content-between">
          <div className="iin_content">
            <div className="title">
              Отправляй товары и документы как компания
            </div>

            <div className="iin_content-card flex items-flex-start gap-3">
              <div className="iin_content-block">
                <div className="iin_content-icon flex items-center content-center">
                  <BriefCaseIcons />
                </div>

                <div className="iin_content-text">
                  <div className="title-block" style={{ fontSize: "2.1rem" }}>
                    Решение любых бизнес-задач
                  </div>
                  <div className="subtitle-block">
                    Коммерческие поставки, хранение, интеграции
                  </div>
                </div>
              </div>

              <div className="iin_content-block">
                <div className="iin_content-icon flex items-center content-center">
                  <TrackIcons />
                </div>

                <div className="iin_content-text">
                  <div className="title-block" style={{ fontSize: "2.1rem" }}>
                    Комфортная доставка
                  </div>
                  <div className="subtitle-block">
                    По РФ и за рубеж. Курьером, в офисы или постаматы
                  </div>
                </div>
              </div>

              <div className="iin_content-block">
                <div className="iin_content-icon flex items-center content-center">
                  <FilesIcons />
                </div>

                <div className="iin_content-text">
                  <div className="title-block" style={{ fontSize: "2.1rem" }}>
                    Всё для отчетности
                  </div>
                  <div className="subtitle-block">
                    Оплата с расчётного счета и документация
                  </div>
                </div>
              </div>

              <div className="iin_content-block">
                <div className="iin_content-icon flex items-center content-center">
                  <RocketIcons />
                </div>

                <div className="iin_content-text">
                  <div className="title-block" style={{ fontSize: "2.1rem" }}>
                    Быстрый старт
                  </div>
                  <div className="subtitle-block">
                    Подключение онлайн за несколько минут
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="iin_image flex content-between">
            <img className="img" src={require("../assets/iin.png")} alt="" />
          </div>
        </div>

        {/* IIN Field */}

        <IINField />
      </IINStyled>
    </MainLayouts>
  );
};

const IINStyled = styled.div`
  .iin_content {
    width: 65%;

    .iin_content-block {
      width: 100%;
      max-width: 215px;

      .iin_content-icon {
        width: 44px;
        height: 44px;
        background-color: #fff;
        border-radius: 10px;

        margin-bottom: 2rem;
      }
    }
  }

  .iin_image {
    width: 35%;
  }

  @media (max-width: 1000px) {
    .iin_image {
      display: none;
    }

    .iin_content {
      width: 100%;

      .iin_content-block {
        width: 100%;
        max-width: 165px;
      }
    }

    .iin_content-card {
      flex-wrap: wrap;
      
      gap: 0rem;
      justify-content: space-between;
      row-gap: 2rem;

      .title-block {
        font-size: 1.5rem!important;
      }
    }

    .iin_content-block {
      max-width: 206px;
    }
  }
`;

export default IIN;
