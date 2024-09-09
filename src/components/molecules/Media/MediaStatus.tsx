import styled from "@emotion/styled";
import { Block } from "../../atoms/UI/Block";
import { PrimaryButtonStyled } from "../../atoms/UI/Buttons";

const MediaStatus = () => {
  return (
    <MediaStatusBlock>
      <div className="title">
        Два сособа размещения видеорекламы в Альфа Медиа
      </div>

      <div className="media_block">
        <Block className="media_lists">
          <div className="media_list">
            <div className="title-block">С помощью менеджера</div>
            <ul>
              <li>
                <div className="subtitle-block">
                  Запрос на размещение рекламы менеджеру
                </div>
              </li>
              <li>
                <div className="subtitle-block">
                  Сбор требований и согласование рекламной кампании
                </div>
              </li>
              <li>
                <div className="subtitle-block">Подписание договора</div>
              </li>
              <li>
                <div className="subtitle-block">Оплата</div>
              </li>
              <li>
                <div className="subtitle-block">Запуск рекламной компании</div>
              </li>
              <li>
                <div className="subtitle-block">
                  Предоставление отчета по итогам
                </div>
              </li>
            </ul>
          </div>

          <div className="media_list">
            <div className="title-block">Преимущества</div>
            <ul>
              <li>
                <div className="subtitle-block">
                  Создание рекламы под ключ - вы описываете свои цели и
                  потребности, мы их реализуем
                </div>
              </li>
              <li>
                <div className="subtitle-block">
                  Сбор требований и согласование рекламной кампании
                </div>
              </li>
              <li>
                <div className="subtitle-block">Подписание договора</div>
              </li>
              <li>
                <div className="subtitle-block">Оплата</div>
              </li>
              <li>
                <div className="subtitle-block">Запуск рекламной компании</div>
              </li>
              <li>
                <div className="subtitle-block">
                  Предоставление отчета по итогам
                </div>
              </li>
            </ul>

            <PrimaryButtonStyled>Обратиться к менеджеру</PrimaryButtonStyled>
          </div>
        </Block>

        <div className="media-content">
            <div className="title">География проекта</div>

            <div className="media_status-info">
                <div className="title media-title">4200</div>
                <div className="subtitle-block">Экранов на складах</div>
            </div>

            
            <div className="media_status-info">
                <div className="title media-title">350+</div>
                <div className="subtitle-block">Городов</div>
            </div>

            
            <div className="media_status-info">
                <div className="title media-title">12 000 000</div>
                <div className="subtitle-block">Человек в месяц - гарантированный охват</div>
            </div>
        </div>
      </div>

      <Block className="media-knew">
        <div className="title-block">Узнайте, в каких районах вашего города можно разместить рекламу на Альфа Медиа</div>
        <PrimaryButtonStyled>Узнать</PrimaryButtonStyled>
      </Block>
    </MediaStatusBlock>
  );
};

const MediaStatusBlock = styled.div`
    .media_block {
        display: flex;
        align-items: flex-start;
        gap: 3rem;
    }

    .media_lists {
        width: 55%;

        button {
            margin-top: 3rem;
        }
    }

    .media_list {

        margin-bottom: 2rem;
        &:last-child {
            margin-bottom: 0;
        }

        li {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            &::before {
                content: "";
                display: inline-block;
                padding: .25rem;
                border-radius: 50%;
                background-color: #000;
            }
        }
    }

    .media-content {
        width: 45%;
        .title {
            margin-bottom: 2rem;
        }

        .media-title {
            color: #94C325;
        }

        .media_status-info {
            margin-bottom: 5rem;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    .media-knew {
        background-color: #94C325;

        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #FFF;

        margin-top: 5rem;
        
        .title-block {
            margin-bottom: 0;
        }
    }

    @media (max-width: 768px) {
        margin-top: 3rem;

        .media_block {
            display: block;
        }

        .media_lists, .media-content {
            width: 100%;
        }

        .media_lists, .media_status-info {
            margin-bottom: 3rem!important;
        }

        .media-title {
            margin-bottom: 1.6rem!important;
            font-size: 5rem;
        }

        .media-knew {
            margin-top: 3rem;
        }
    }
`;

export default MediaStatus;
