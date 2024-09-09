import styled from "@emotion/styled";
import { Block } from "../../atoms/UI/Block";
import { PrimaryButtonStyled } from "../../atoms/UI/Buttons";

const ProfileMainApp = () => {
  return (
    <>
      <BlockStyled>
        <div className="profile_main-content">
          <div className="title-block">Мобильное приложение</div>
          <div className="subtitle-block">
            Отслеживайте, оформляйте и оплачивайте посылки. Получайте
            уведомления о самом важном, оценивайте качество услуг
          </div>

          <PrimaryButtonStyled>Скачать приложение</PrimaryButtonStyled>
        </div>

        <div className="profile_main-image">
          <img
            className="img"
            src={require("../../../assets/images/profile/app.png")}
            alt=""
          />
        </div>
      </BlockStyled>

      <ProfileMainAppBlock className="flex content-between">
        <Block className="profile_main-card">
          <div className="title-block">Франшиза</div>
          <div className="subtitle-block">
            Выгодная доставка по Казахстану для частных лиц
          </div>
        </Block>

        <Block className="profile_main-card">
          <div className="title-block">Альфа Медиа</div>
          <div className="subtitle-block">
            Размещайте рекламу на складах Альфа Карго
          </div>
        </Block>

        <Block className="profile_main-card">
          <div className="title-block">Посылочка</div>
          <div className="subtitle-block">
            Выгодная доставка по Казахстану для частных лиц
          </div>
        </Block>
      </ProfileMainAppBlock>
    </>
  );
};

const BlockStyled = styled(Block)`
  margin-top: 14.2rem;

  button {
    margin-top: 4rem;
  }

  .subtitle-block {
    color: #8c8c8c;

    width: 100%;
    max-width: 561px;
  }

  position: relative;

  .profile_main-image {
    position: absolute;
    bottom: -4px;
    right: 40px;
  }

  @media (max-width: 1000px) {
    margin-top: 2rem; 
  }

  @media (max-width: 768px) {
    .subtitle-block {
      width: 100%;
      max-width: 430px;
    }

    .profile_main-image {
      width: 245px;
      right: 11px;
      bottom: 0;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    padding-block: 0;
    align-items: flex-end;
    .profile_main-image {
      position: static;
      width: 100%;
    }

    .subtitle-block {
        width: 100%;
        max-width: 100%;
    }

    .profile_main-content {
      padding-block: 2rem;
    }

    button {
        margin-top: 2rem;
    }
  }
`;

const ProfileMainAppBlock = styled.div`
  gap: 1rem;
  flex-wrap: wrap !important;

  .profile_main-card {
    width: 31.33333%;

    color: #fff;

    &:nth-child(1) {
      background-color: #4b446d;
    }

    &:nth-child(2) {
      background-color: #e8764d;
    }

    &:nth-child(3) {
      background-color: #7a93d1;
    }
  }

  margin-top: 5rem;

  @media (max-width: 1000px) {
    .profile_main-card {
      width: 100%;
      flex: 1;
    }

    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    display: block;

    .profile_main-card {
        margin-bottom: 1.2rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
  }
`;

export default ProfileMainApp;
