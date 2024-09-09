import styled from "@emotion/styled";
import AppModal from "./AppModal";
import { OutlinedButton, PrimaryButtonStyled } from "../atoms/UI/Buttons";
import { WhatsAppIcons } from "../atoms/Icons";
import useManagerModal from "../../hooks/useManagerModal";
import LoginModal from "./LoginModal";
import PhoneModal from "./PhoneModal";

interface IProps {
  title: string;
  desc: string;
  clearModal: () => void;
}

const ChangeModal = ({ title, desc, clearModal }: IProps) => {
  const { modalInfo, setPhoneModal } = useManagerModal();

  const { modalInfo: modalInfoLogin, setLoginModal: showLoginModal } =
    useManagerModal();

  const onChangeModal = (stateModals: "login" | "create") => {
    if (stateModals === "login") {
      showLoginModal("Войти");
    }

    if (stateModals === "create") {
      setPhoneModal("Регистрация");
    }
  };

  return (
    <>
      {modalInfo && (
        <PhoneModal title={modalInfo.title as string} clearModal={clearModal} />
      )}
      {modalInfoLogin && (
        <LoginModal
          title={modalInfoLogin.title as string}
          clearModal={clearModal}
        />
      )}
      <AppModal name={"change"} onClose={clearModal}>
        <div className="title-block">{title}</div>
        <Buttons className="flex gap-1_2">
          <PrimaryButtonStyled onClick={() => onChangeModal("login")}>
            Войти
          </PrimaryButtonStyled>

          <PrimaryButtonStyled onClick={() => onChangeModal("create")}>
            Зарегистрироваться
          </PrimaryButtonStyled>
        </Buttons>
        <div
          className="subtitle-block"
          style={{ marginBottom: "1.2rem", color: "#8C8C8C" }}
        >
          {desc}
        </div>

        <OutlinedButton
          background="#02447F"
          weight="600"
          style={{ width: "100%" }}
        >
          Написать в ватсап
          <WhatsAppIcons />
        </OutlinedButton>
      </AppModal>
    </>
  );
};

const Buttons = styled.div`
  margin-block: 1.6rem;

  button {
    width: 50%;

    padding: 1.6rem 1.2rem;
  }
`;

export default ChangeModal;
