import styled from "@emotion/styled";
import { Block } from "../components/atoms/UI/Block";
import MainLayouts from "../layouts/MainLayouts";

const Contacts = () => {
  return (
    <MainLayouts title="Контакты">
      <div className="title">Контакты представительств в Кыргызстане</div>

      <BlockStyled>
        <div className="contacts-block">
          <div className="title-block">Бишкек</div>

          <ContactsBlockBorder className="flex items-center content-between">
            <ContactsListBlock className="subtitle-block">
              Адрес: ​ул. Анкара (бывш. Горького), 58​
            </ContactsListBlock>
            <ContactsListBlock className="subtitle-block">
              Контактные номера: +996 550‒55‒98‒46
            </ContactsListBlock>
          </ContactsBlockBorder>

          <ContactsBlockBorder className="flex items-center content-between">
            <ContactsListBlock className="subtitle-block">
              Адрес: Келечек ж/м, ​Келечек 15-я, 95/2
            </ContactsListBlock>
            <ContactsListBlock className="subtitle-block">
              Контактные номера: +996 550‒55‒98‒46
            </ContactsListBlock>
          </ContactsBlockBorder>

          <ContactsBlockBorder className="flex items-center content-between">
            <ContactsListBlock className="subtitle-block">
              Адрес: Анарбека Бакаева 23
            </ContactsListBlock>
            <ContactsListBlock className="subtitle-block">
              Контактные номера: +996 550‒55‒98‒46
            </ContactsListBlock>
          </ContactsBlockBorder>
        </div>

        <div className="contacts-block">
          <div className="title-block">Ошская область</div>

          <ContactsBlockBorder
            active
            className="flex items-center content-between"
          >
            <ContactsListBlock className="subtitle-block">
              Адрес: г. Кара-Суу, ул. Бакиева / ул. МЭ3 (напротив гос.
              нотариуса)
            </ContactsListBlock>
            <ContactsListBlock className="subtitle-block">
              Контактные номера: +996 550‒55‒98‒46
            </ContactsListBlock>
          </ContactsBlockBorder>
        </div>
      </BlockStyled>

      <div className="title">Контакты представительств в России</div>

      <BlockStyled>
        <div className="contacts-block">
          <div className="title-block">Москва</div>

          <ContactsBlockBorder className="flex items-center content-between">
            <ContactsListBlock className="subtitle-block">
              Адрес: ТК «Садовод»
            </ContactsListBlock>
            <ContactsListBlock className="subtitle-block">
              Контактные номера : +7 967 272 92 11
            </ContactsListBlock>
          </ContactsBlockBorder>
        </div>

        <div className="contacts-block">
          <div className="title-block">Казань</div>

          <ContactsBlockBorder className="flex items-center content-between">
            <ContactsListBlock className="subtitle-block">
               Адрес: Зеленодольский район, Технополис , Новая-Тура
            </ContactsListBlock>
            <ContactsListBlock className="subtitle-block">
              Контактные номера : +7  906 326 06 55, +7 937 617 51 66
            </ContactsListBlock>
          </ContactsBlockBorder>
        </div>

        <div className="contacts-block">
          <div className="title-block">Ростов на дону</div>

          <ContactsBlockBorder className="flex items-center content-between">
            <ContactsListBlock className="subtitle-block">
               Адрес: Лелюшенко 19/5(временно)
            </ContactsListBlock>
            <ContactsListBlock className="subtitle-block">
              Контактные номера : +7 961 275 20 00, +7 961 313 08 88
            </ContactsListBlock>
          </ContactsBlockBorder>
        </div>

        <div className="contacts-block">
          <div className="title-block">Самара</div>

          <ContactsBlockBorder className="flex items-center content-between">
            <ContactsListBlock className="subtitle-block">
               Адрес: проспект Кирова 30а
            </ContactsListBlock>
            <ContactsListBlock className="subtitle-block">
              Контактные номера : +7 917 952 05 97
            </ContactsListBlock>
          </ContactsBlockBorder>
        </div>

        <div className="contacts-block">
          <div className="title-block"> Оренбург</div>

          <ContactsBlockBorder className="flex items-center content-between">
            <ContactsListBlock className="subtitle-block">
               Адрес: пер.Кондукторский 2а
            </ContactsListBlock>
            <ContactsListBlock className="subtitle-block">
              Контактные номера : +7 987 899 07 12
            </ContactsListBlock>
          </ContactsBlockBorder>
        </div>

        <div className="contacts-block">
          <div className="title-block">Уфа</div>

          <ContactsBlockBorder className="flex items-center content-between">
            <ContactsListBlock className="subtitle-block">
               Адрес: р-к Вьетнамский, ул.Вахтангова 25 (за 3-павильоном)
            </ContactsListBlock>
            <ContactsListBlock className="subtitle-block">
              Контактные номера : +7 917 787 97 89
            </ContactsListBlock>
          </ContactsBlockBorder>
        </div>

        <div className="contacts-block">
          <div className="title-block">Челябинск</div>

          <ContactsBlockBorder className="flex items-center content-between">
            <ContactsListBlock className="subtitle-block">
               Адрес: Свердловский тракт 14б
            </ContactsListBlock>
            <ContactsListBlock className="subtitle-block">
              Контактные номера : +7 982 102 75 53
            </ContactsListBlock>
          </ContactsBlockBorder>
        </div>

        <div className="contacts-block">
          <div className="title-block">Екатеринбург</div>

          <ContactsBlockBorder className="flex items-center content-between">
            <ContactsListBlock className="subtitle-block">
               Адрес: ул.Ольховская 2
            </ContactsListBlock>
            <ContactsListBlock className="subtitle-block">
              Контактные номера : +7 909 705 22 44 (+996 500 402 444 WhatsApp)
            </ContactsListBlock>
          </ContactsBlockBorder>
        </div>

        <div className="contacts-block">
          <div className="title-block">Омск</div>

          <ContactsBlockBorder className="flex items-center content-between">
            <ContactsListBlock className="subtitle-block">
               Адрес: ул. 3 Енисейская 3/2 корп.1 склады за ТК Китай город
            </ContactsListBlock>
            <ContactsListBlock className="subtitle-block">
              Контактные номера : +7 951 425 43 48, +7 960 988 03 30
            </ContactsListBlock>
          </ContactsBlockBorder>
        </div>

        <div className="contacts-block">
          <div className="title-block">Новосибирск</div>

          <ContactsBlockBorder className="flex items-center content-between">
            <ContactsListBlock className="subtitle-block">
               Адрес: Территория СНТ Весна Сибири ,65 ТК «Восток»
            </ContactsListBlock>
            <ContactsListBlock className="subtitle-block">
              Контактные номера : +7 923 192 96 99, +7 913 774 60 99, +7 913 715
              25 75
            </ContactsListBlock>
          </ContactsBlockBorder>
        </div>

        <div className="contacts-block">
          <div className="title-block">Красноярск</div>

          <ContactsBlockBorder className="flex items-center content-between">
            <ContactsListBlock className="subtitle-block">
               Адрес: проспект Газеты «Красноярский Рабочий» 27 строение 70, ТК
              «Восточный»
            </ContactsListBlock>
            <ContactsListBlock className="subtitle-block">
              Контактные номера : +7 923 379 52 53
            </ContactsListBlock>
          </ContactsBlockBorder>
        </div>

        <div className="contacts-block">
          <div className="title-block">Иркутск</div>

          <ContactsBlockBorder className="flex items-center content-between">
            <ContactsListBlock className="subtitle-block">
               Адрес: ул.Челябинская 27
            </ContactsListBlock>
            <ContactsListBlock className="subtitle-block">
              Контактные номера : +7 964 115 35 55
            </ContactsListBlock>
          </ContactsBlockBorder>
        </div>

        <div className="contacts-block">
          <div className="title-block">Хасавюрт</div>

          <ContactsBlockBorder
            active
            className="flex items-center content-between"
          >
            <ContactsListBlock className="subtitle-block">
               Адрес: возле отеля Киева
            </ContactsListBlock>
            <ContactsListBlock className="subtitle-block">
              Контактные номера : +7 916 419 42 40
            </ContactsListBlock>
          </ContactsBlockBorder>
        </div>
      </BlockStyled>
    </MainLayouts>
  );
};

const ContactsListBlock = styled.div`
  &::before {
    content: "";
    display: inline-block;

    padding: 0.4rem;
    background-color: #000018;

    border-radius: 50%;

    @media (max-width: 768px) {
      padding: 0.2rem;
    }
  }

  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

const ContactsBlockBorder = styled.div<{ active?: boolean }>`
  border-bottom: ${(props) => (!props.active ? "1px solid #02447f" : "")};
  padding-block: 1rem;

  margin-top: 1.2rem;

  display: grid !important;
  grid-template-columns: 83rem auto;

  @media (max-width: 1000px) {
    grid-template-columns: 51rem auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: 30rem auto;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    grid-template-columns: 15rem auto;
  }
`;

const BlockStyled = styled(Block)`
  .contacts-block {
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  margin-bottom: 8rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

export default Contacts;
