import styled from "@emotion/styled";
import { Block } from "../../atoms/UI/Block";
import { PrimaryButtonStyled } from "../../atoms/UI/Buttons";

const MediaContact = () => {
  return (
    <MediaContactBlock className="flex">
      <div className="media_contact-block">
        <div className="title">
          Используйте возможности Альфа Медиа - расширьте сеть контактов свашей
          целевой аудиторией!
        </div>
        <PrimaryButtonStyled>Запросить точки размещения</PrimaryButtonStyled>
      </div>
      <Block className="media_contact-block">
        <div className="media_contact">
          <div className="subtitle-block">Контактный номер:</div>
          <div className="title">8 777 214 6644</div>
        </div>

        <div className="media_contact">
          <div className="subtitle-block">По всем вопросам:</div>
          <div className="title">alpha.cargo@gmail.com</div>
        </div>

        <div className="media_contact">
          <div className="subtitle-block subtitle-block--green">График работы:</div>
          <div className="title">с 9:00 до 18:00 по Москве</div>
        </div>
      </Block>
    </MediaContactBlock>
  );
};

const MediaContactBlock = styled.div`
  margin-top: 8rem;

  .media_contact-block {
    width: 50%;
  }

  .media_contact {
    margin-bottom: 3rem;
    &:last-child {
        margin-bottom: 0;
    }
    .title {
        margin-bottom: 0;
    }

    .subtitle-block {
        margin-bottom: 2rem;
        color: #8C8C8C;
        &--green {
            color: #94C325;
        }
    }
  }

  @media (max-width: 1000px) {
    display: block;

    .media_contact-block {
        width: 70%;
        margin-bottom: 5rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
  }

  @media (max-width: 768px) {
    margin-top: 3rem;
    .media_contact-block {
        width: 100%;

        margin-bottom: 3rem;
    }

    .media_contact {
        margin-bottom: 1.6rem;
    }
  }
`;

export default MediaContact;
