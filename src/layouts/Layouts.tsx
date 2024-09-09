import { useNavigate } from "react-router-dom";
import LoginModal from "../components/modal/LoginModal";
import HeaderLinks from "../components/organisms/Headers/HeaderLinks";
import HeaderPages from "../components/organisms/Headers/HeaderPages";
import useManagerModal from "../hooks/useManagerModal";
import { getTokenInLocalStorage } from "../utlis/getTokenLocal";
import { useState } from "react";

const Layouts = () => {
  const { modalInfo, clearModal, setLoginModal } = useManagerModal();
  const [active, setActive] = useState<boolean>(false)
  const navigate = useNavigate();

  const handleOpenModal = () => {
    if (getTokenInLocalStorage() === null) {
      setLoginModal("Войти");
    } else {
      navigate("/profile/main");
    }
  };
  return (
    <>
      {modalInfo && (
        <LoginModal title={modalInfo.title as string} clearModal={clearModal} />
      )}
      <div className="page_headers">
        <HeaderPages handleOpenModal={handleOpenModal} setActive={setActive} active={active}/>
        <HeaderLinks handleOpenModal={handleOpenModal} setActive={setActive} active={active}/>
      </div>
    </>
  );
};

export default Layouts;
