import styled from "@emotion/styled";

const InvestMixing = () => {
  return (
    <InvestMixingBlock>
      <div className="title">Общие сведения</div>

      <div className="invest_mixing flex gap-3">
        <div className="invest_mixing-block">
          <div className="invest_mixing-content">
            <div className="title-block">Наименование организации</div>
            <div className="subtitle-block">
              Товарищество с ограниченной ответственностью “Альфа Карго”
            </div>
          </div>

          <div className="invest_mixing-content">
            <div className="title-block">Сокращенное наименовение</div>
            <div className="subtitle-block">ТОО “Альфа Карго”</div>
          </div>

          <div className="invest_mixing-content">
            <div className="title-block">Место нахождения</div>
            <div className="subtitle-block">
              630007, г. Новосибирск, ул. Кривощековская, д. 15, корп. 1, эт.
              1,2
            </div>
          </div>

          <div className="invest_mixing-content">
            <div className="title-block">Юридический адрес</div>
            <div className="subtitle-block">
              630007, г. Новосибирск, ул. Кривощековская, д. 15, корп. 1, эт.
              1,2
            </div>
          </div>
        </div>

        <div className="invest_mixing-block">
          <div className="invest_mixing-content">
            <div className="title-block">Зарегистрировавший орган</div>
            <div className="subtitle-block">
              Межрайонная инспекция Федеральной налоговой службы № 16 по
              Новосибирской области
            </div>
          </div>

          <div className="invest_mixing-content">
            <div className="title-block">Номер государственной регистрации</div>
            <div className="subtitle-block">1157746448463</div>
          </div>

          <div className="invest_mixing-content">
            <div className="title-block">Дата государственной регистрации</div>
            <div className="subtitle-block">18.05.2015</div>
          </div>

          <div className="invest_mixing-content">
            <div className="title-block">ФИО руководителя</div>
            <div className="subtitle-block">Гольдрот Леонид Яковлевич</div>
          </div>
        </div>
      </div>
    </InvestMixingBlock>
  );
};

const InvestMixingBlock = styled.div`
  margin-top: 8rem;

  .invest_mixing-content {
    margin-bottom: 3rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 1000px) {
    margin-top: 5rem;
  }

  @media (max-width: 768px) {
    margin-top: 3rem;

    .title {
      margin-bottom: 2rem;
    }

    .invest_mixing {
      display: flex;
      justify-content: space-between;

      .title-block {
        font-size: 2rem;
      }

      .subtitle-block {
        font-size: 1.6rem;
      }
    }
  }

  @media (max-width: 480px) {
    .invest_mixing {
      gap: 0;
      justify-content: space-between;
      .title-block,
      .subtitle-block {
        font-size: 1.3rem;
        font-weight: 400;
      }

      .title-block {
        font-weight: 600;
      }

      .invest_mixing-content {
        margin-bottom: 1.2rem;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;

export default InvestMixing;
