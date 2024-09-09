import styled from "@emotion/styled";
import { Block } from "../../../components/atoms/UI/Block";
import ProfileLayout from "../../../layouts/ProfileLayout";
import { PrimaryButtonStyled } from "../../../components/atoms/UI/Buttons";
import Calculator from "../../../components/organisms/Calculater";
import ProfileMainApp from "../../../components/molecules/Profile/ProfileMainApp";
import { useNavigate } from "react-router-dom";

const ProfileMain = () => {
  const navigate = useNavigate()
  return (
    <ProfileLayout title="Главная">
      <div className="title">Главная</div>

      <BlockStyled className="flex items-center content-between">
        <div className="profile_main-content">
          <div className="title-block">Заполните профиль</div>
          <div className="subtitle-block">
            Для автозаполнения данных и других услуг
          </div>

          <PrimaryButtonStyled onClick={() => navigate('/profile/main/change')}>Заполнить профиль</PrimaryButtonStyled>
        </div>

        <div className="profile_main-image">
          <img className="img" src={require("../../../assets/profilemain.png")} alt="" />
        </div>
      </BlockStyled>

      <Calculator
        subtitle="Юридические отправления расчитываются в личном кабинете"
        title="Рассчитать стоимость доставки"
        link={false}
      />

      <ProfileMainApp />
    </ProfileLayout>
  );
};

const BlockStyled = styled(Block)`
  padding: 1.3rem 4rem;

  .subtitle-block {
    color: #8c8c8c;
  }

  button {
    margin-top: 4rem;
  }

  margin-bottom: 5rem;

  @media (max-width: 480px) {
    button {
        padding-inline: 1.2rem;
        margin-top: 2rem;
    }
  }
`;

export default ProfileMain;
