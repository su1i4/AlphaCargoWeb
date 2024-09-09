import styled from "@emotion/styled";
import { Block } from "../../atoms/UI/Block";
import { ClockIcons, TVIcons, YoutubeIcons } from "../../atoms/Icons";
import { PrimaryButtonStyled } from "../../atoms/UI/Buttons";

const MediaCards = () => {
  return (
    <MediaCardsBlock>
      <div className="media_cards">
        <Block className="media_card">
          <TVIcons />
          <div className="media_card-content">
            <div className="title-block">
              Экраны расположены в зоне выдачи посылок
            </div>
            <div className="subtitle-block">
              Вашу ракламу увидят все посетители пункта выдачи
            </div>
          </div>
        </Block>
        <Block className="media_card">
          <ClockIcons />
          <div className="media_card-content">
            <div className="title-block">
              Посетители Альфа находятся в офисе в среднем 5 минут
            </div>
            <div className="subtitle-block">
              За это время посетитель 1-2 раза посмотрит ролик
            </div>
          </div>
        </Block>
        <Block className="media_card">
          <YoutubeIcons />
          <div className="media_card-content">
            <div className="title-block">
              За 30 дней вы получите 6000 показов вашего ролика
            </div>
            <div className="subtitle-block">
              Всего за 4500 рублей. Расчет для ролика длительностью 15 сек
            </div>
          </div>
        </Block>
      </div>

      <div className="title">Кому подходит реклама на мониторах</div>

      <div className="media_cards">
        <Block className="media_card">
          <TVIcons />
          <div className="media_card-content">
            <div className="subtitle-block">
              Для бизнеса "рядом с домом" — магазинам, салонам красоты,
              фитнес-центрам, барбершопам
            </div>
          </div>
        </Block>
        <Block className="media_card">
          <ClockIcons />
          <div className="media_card-content">
            <div className="subtitle-block">
              Для сетей и крупных заведений городского масштаба — центрам
              здоровья, ресторанам, клубам
            </div>
          </div>
        </Block>
        <Block className="media_card">
          <YoutubeIcons />
          <div className="media_card-content">
            <div className="subtitle-block">
              Для интернет-магазинов, банков, сотовых операторов и других
              крупных компаний
            </div>
          </div>
        </Block>
      </div>

      <div className="title">Задачи которые решает реклама</div>

      <div className="media_cards">
        <Block className="media_card">
          <TVIcons />
          <div className="media_card-content">
            <div className="title-block">
              Информирование об открытии нового заведения
            </div>
          </div>
        </Block>
        <Block className="media_card">
          <ClockIcons />
          <div className="media_card-content">
            <div className="title-block">
              Привлечение аудитории на мероприятие в вашей точке Вечеринка,
              праздник
            </div>
          </div>
        </Block>
        <Block className="media_card">
          <YoutubeIcons />
          <div className="media_card-content">
            <div className="title-block">Реклама товаров, услуг</div>
          </div>
        </Block>
      </div>

      <Block className="media-knew">
        <div className="title-block">
          Узнайте, в каких районах вашего города можно разместить рекламу на
          Альфа Медиа
        </div>
        <PrimaryButtonStyled>Узнать</PrimaryButtonStyled>
      </Block>
    </MediaCardsBlock>
  );
};

const MediaCardsBlock = styled.div`
  margin-top: 5rem;
  .media_cards {
    margin-bottom: 8rem;
    display: flex;
    justify-content: space-between;

    .media_card {
      width: 32.33333%;
      display: flex;
      flex-direction: column;
      align-items: center;

      svg {
        margin-bottom: 2rem;
      }

      .subtitle-block {
        color: #8c8c8c;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .media-knew {
    background-color: #94c325;

    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;

    margin-top: 5rem;

    .title-block {
      margin-bottom: 0;
    }
  }

  @media (max-width: 1000px) {
    .media_cards {
      display: block;

      .media_card {
        width: 100%;
        margin-bottom: 1.6rem;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .media_cards {
      margin-bottom: 3rem;
    }
  }
`;

export default MediaCards;
