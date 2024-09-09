import ProfileLayout from "../../../../layouts/ProfileLayout";
import NotificationComponent from "./notification/NotificationComponent";

const NotificationById = () => {
  return (
    <ProfileLayout title="Уведомление по индексу">
      <NotificationComponent />
    </ProfileLayout>
  );
};

export default NotificationById;
