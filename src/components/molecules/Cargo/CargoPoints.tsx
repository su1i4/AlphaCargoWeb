import styled from "@emotion/styled";
import { Block } from "../../atoms/UI/Block";

const CargoPoints = () => {
  return (
    <CargoPointsBlock>
      <div className="title">
        <span>Еще больше</span> баллов
      </div>

      <div className="cargo_points flex content-between">
        <Block className="cargo_points-block">
          <div className="title-block">50 приветственных баллов</div>
          <div className="subtitle-block">
            За регистрацию в Альфа Карго и подключение программы лояльности
          </div>
          <div className="subtitle-block subtitle-block--des">
            <div>
              <span>Успейте потратить!</span> Срок действия 30 дней с началы
              даты начисления
            </div>
          </div>
        </Block>
        <Block className="cargo_points-block">
          <div className="flex cargo_points-flex gap-3">
            <div className="title-block">
              Индивидуальные акции по программе лояльности Альфа
            </div>
            <div className="subtitle-block">
              Следите за оповещениями в приложении и просматривайте электронную
              почту: мы регулярно рассказываем об акциях с простыми условиями.
              Выполняйте их и получайте баллы в подарок!
            </div>
          </div>

          <hr />

          <div className="subtitle-block" style={{ textAlign: "center" }}>
            <span>Успейте потратить!</span> Срок действия 30 дней с началы даты
            начисления
          </div>
        </Block>
      </div>

      <Block className="block-full">
        <div className="block-full_title">
          <div className="title-block">
            Повышенный кешбэк в честь дня рождения
          </div>
        </div>
        <div className="block-full_subtitle">
          <div className="block-full_subtitle-child">
            <div className="block-full_subtitle-child--block">
              <div className="subtitle-block subtitle-block--list">
                Для тех кто отправляет посылки
              </div>
              <div className="subtitle-block">
                Получайте х2 баллов за каждую отправку в течении 7 дней до и 7
                дней после дня пождения
              </div>
            </div>
            <div  className="block-full_subtitle-child--block">
              <div className="subtitle-block subtitle-block--list">
                Для тех, кто еще не совершал отправку
              </div>
              <div className="subtitle-block">
                За неделю до дня рождения на вашем счету появятся 100 бонусных
                баллов
              </div>
            </div>
          </div>
          <hr />
          <div className="block-full_subtitle-child" style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className="subtitle-block"><span>Успейте потратить!</span> Срок действия 90 дней с даты начисления</div>
            <div className="subtitle-block"><span>Успейте потратить!</span> Срок действия 14 дней с даты начисления</div>
          </div>
        </div>
        <div></div>
      </Block>
    </CargoPointsBlock>
  );
};

const CargoPointsBlock = styled.div`
  .title {
    span {
      color: #94c325;
    }
  }

  .cargo_points-block {
    &:nth-child(1) {
      width: 29%;
    }

    &:nth-child(2) {
      width: 70%;
    }

    .cargo_points-flex {
      div {
        &:nth-child(1) {
          width: 50%;
        }

        &:nth-child(2) {
          width: 49%;
        }
      }
    }

    .subtitle-block {
      color: #8c8c8c;

      span {
        color: #94c325;
      }

      &--des {
        margin-top: 5rem;
        div {
          width: 175px;
        }

        display: flex;
        justify-content: flex-end;

        @media (max-width: 768px) {
            margin-top: 1.2rem;
        }
      }
    }
  }

  .block-full {
    margin-top: 3rem;

    @media (max-width: 480px) {
        margin-top: 1.2rem;
    }

    display: flex;
    justify-content: space-between;
    &_title {
      width: 30%;
    }

    &_subtitle {
      width: 60%;

      &-child {
        display: flex;
        gap: 1rem;
      }
    }
  }

  .subtitle-block {
    color: #8c8c8c;

    span {
      color: #94c325;
    }

    &--list {
        margin-bottom: 2rem;
        display: flex;
        align-items: center;

        &::before {
            content: "";
            display: inline-block;
            padding: .3rem;
            border-radius: 50%;
            background-color: #8c8c8c;
            margin-right: .2rem;
            
            @media (max-width: 768px) {
                margin-right: 1rem;
            }
        }

        @media (max-width: 768px) {
            margin-bottom: 0;
        }
    }
  }

  hr {
    border-top: 4px dashed #02447f;
    margin-block: 4rem;
  }

  @media (max-width: 1000px) {
    .title {
        margin-bottom: 2rem;
    }
    .cargo_points {
        display: block;

        .cargo_points-block {
            width: 100%;
            max-width: 100%;

            margin-bottom: 3rem;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    .block-full {
        display: block;

        .block-full_title, .block-full_subtitle {
            width: 100%;
        }
    }
  }

  @media (max-width: 768px) {
    .block-full_subtitle-child {
        display: block;

        &--block {
            margin-bottom: 2rem;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    hr {
        margin-block: 2rem;
    }
  }

  @media (max-width: 480px) {
    .cargo_points-block {
        width: 100%;
        max-width: 100%;

        margin-bottom: 1rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
  }
`;

export default CargoPoints;
