import styled from "@emotion/styled";
import { Block } from "../../../components/atoms/UI/Block";
import ProfileLayout from "../../../layouts/ProfileLayout";
import { Link } from "react-router-dom";

const Notification = () => {
  return (
    <ProfileLayout title="Уведомление">
      <div className="title">Уведомления</div>
      <Link to={"/profile/notification/adsdasd"}>
        <NotificationBlock>
          <div className="title-block">О налогах</div>
          <div className="subtitle-block">Дата: 02.12.2021</div>
          <div className="subtitle-block">Статус: прочитано</div>
        </NotificationBlock>
      </Link>
    </ProfileLayout>
  );
};

const NotificationBlock = styled(Block)`
  &:hover {
    background-color: #02447f;
    color: #fff;
  }

  transition: background-color 0.2s linear, color 0.2s linear;

  margin-bottom: 3rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 1000px) {
    margin-bottom: 1.6rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 1.2rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export default Notification;
