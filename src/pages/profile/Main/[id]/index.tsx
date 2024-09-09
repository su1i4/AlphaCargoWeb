import ProfileLayout from "../../../../layouts/ProfileLayout";
import ProfileMainComponent from "./main/ProfileMainComponent";

const ProfileMainById = () => {
  return (
    <ProfileLayout title="Заполнить профиль">
        <div className="title">Личные данные</div>

        <ProfileMainComponent />
    </ProfileLayout>
  );
}

export default ProfileMainById;
