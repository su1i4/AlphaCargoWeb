import styled from "@emotion/styled";

const CargoSpend = () => {
  return (
    <CargoSpendBlock className="flex content-between">
      <div className="title">Как и где потратить баллы</div>

      <div className="spend_block">
        <div className="spend_block-child">
          <div className="title-block">Офисы Альфа Карго</div>
          <div className="subtitle-block subtitle-block--gray">
            Сообщите менеджеру, сколько хотите потратить
          </div>
        </div>
        <div className="spend_block-child">
          <div className="title-block">При вызове курьера</div>
          <div className="subtitle-block subtitle-block--gray">
            Сообщите курьеру, что хотите списать баллы
          </div>
        </div>
        <div className="spend_block-child">
          <div className="title-block">Мобильное приложение и сайт</div>
          <div className="subtitle-block subtitle-block--gray">
            Оплачивайте баллами до 99% от стоимости отправки при оформлении
            онлайн
          </div>
        </div>
      </div>
    </CargoSpendBlock>
  );
};

const CargoSpendBlock = styled.div`
    margin-top: 8rem;

    .spend_block {
        &-child {
            margin-bottom: 4rem;
    
            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    @media (max-width: 1000px) {
        margin-top: 3rem;
        display: block;
        .title {
            margin-bottom: 2rem;
        }
        .spend_block {
            &-child {
                margin-bottom: 2rem;
            }
        }
    }
`;

export default CargoSpend;
