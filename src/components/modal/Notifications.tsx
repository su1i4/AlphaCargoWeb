import styled from "@emotion/styled";

interface INotificationProps {
  notification: string;
}

export const SuccessNotification = ({ notification }: INotificationProps) => {
  return (
    <NotificationStyled className="subtitle-block">
      {notification}
    </NotificationStyled>
  );
};

const NotificationStyled = styled.div`
  width: 100%;
  background-color: #94c325;
  color: #ffffff;
  margin-top: 1.6rem;
  padding: 1.2rem;
`;
