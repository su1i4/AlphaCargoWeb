import styled from "@emotion/styled";
import InvesAboutUs from "../components/molecules/Invest/InvesAboutUs";
import MainLayouts from "../layouts/MainLayouts";

const History = () => {
  return (
    <MainLayouts title="История компании">
      <InvesAboutUs />

      <HistorySyled>
        <div className="history_block">
          <div className="title-block">Приемущества компании</div>

          <div className="subtitle-block">
            Сеть представительств. Собственные и партнерские склады расположены
            в крупнейших городах России, и Кыргызстана. Сотрудничая с нами, вы
            сможете наладить эффективное взаимодействие и бесперебойный
            товарооборот с зарубежными партнерами.{" "}
          </div>
          <div className="subtitle-block">
            Складское хранение. Хранение и консолидация грузов производится на
            специально оборудованных надежных складах с опытным штатом и
            профессиональным оборудованием. Это позволяет нам принимать к
            отправке практически любые грузы.
          </div>
          <div className="subtitle-block">
            Складские услуги. В дополнение к хранению, мы предлагаем все работы
            по обслуживанию грузов. взвешивание, упаковку, сортировку,
            маркировку и т.д. Это позволит вам сэкономить время на поиске
            дополнительных рабочих и проверку их надежности. Комплекс
            логистических услуг. Мы помогаем также с подготовкой
            сопроводительных документов, страхованию, а также предоставляем
            профессиональное консультирование по всем вопросам, связанным с
            организацией перевозки и таможенным оформлением грузов.
          </div>
          <div className="subtitle-block">
            Оперативная доставка. В сфере логистических услуг наша компания
            успешно работает уже 14 лет. У нас есть отработанные маршруты,
            оптимизированные схемы доставки грузов, а также широкая партнерская
            сеть. Мы регулярно совершаем транспортировку по популярным
            направлениям, поэтому мы можем организовать быструю доставку.
          </div>
        </div>

        <div className="history_block">
          <div className="title-block">Услуги для экспорта</div>

          <div className="subtitle-block">
            ТК «Альфа Карго» предлагает услугу консолидации грузов на складах
            для дальнейшей отправки их в составе сборных грузов из Кыргызстана в
            Россию.
          </div>
          <div className="subtitle-block">
            Наличие собственных складов на территории данных стран позволяет нам
            оптимизировать временные и транспортные расходы, обеспечить
            повышенную надежность перевозки и хранения грузов, а также
            предлагать выгодные тарифы для клиентов.
          </div>
          <div className="subtitle-block">
            Собственный автопарк грузовых автомобилей и надежные партнеры
            позволяют нам перевозить различные типы грузов: от товаров народного
            потребления до товаров промышленного назначения.
          </div>
        </div>
      </HistorySyled>
    </MainLayouts>
  );
};

const HistorySyled = styled.div`
    margin-top: 10rem;

    .subtitle-block {
        margin-bottom: 2rem;
    }

    .history_block {
        margin-bottom: 10rem;

        &:last-child {
            margin-bottom: 0;
        }
    }

    width: 100%;
    max-width: 838px;

    @media (max-width: 1000px) {
        max-width: 100%;
        margin-top: 5rem;

        .history_block {
            margin-bottom: 3rem;
    
            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    @media (max-width: 768px) {
        margin-top: 3rem;

        .subtitle-block {
            margin-bottom: 1.2rem;
        }
    }
`;

export default History;
