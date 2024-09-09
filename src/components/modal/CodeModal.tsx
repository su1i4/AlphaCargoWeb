import { useCallback, useState } from "react";
import { BackArrowLeftIcons } from "../atoms/Icons";
import { PrimaryButtonStyled } from "../atoms/UI/Buttons";
import OtpInput from "../forms/OTPForm";
import AppModal from "./AppModal";
import useLtest from "../../hooks/useLtest";
import useManagerModal from "../../hooks/useManagerModal";
import PhoneModal from "./PhoneModal";

interface IProps {
  title: string;
  desc: string;
  clearModal: () => void;
}

const CodeModal = ({ title, desc, clearModal }: IProps) => {
  const [value, setValue] = useState<string>();
  const valueRef = useLtest(value);

  const { modalInfo: modalInfoPhone, setPhoneModal } = useManagerModal();

  const onChange = useCallback(
    (valueRef: string) => {
      setValue(valueRef);
    },
    [valueRef.current]
  );

  const checkIsValid = (): string => {
    return "red";
  };

  const onBack = () => {
    setPhoneModal("Войти");
  };

  return (
    <>
      {modalInfoPhone && (
        <PhoneModal
          clearModal={clearModal}
          title={modalInfoPhone.title as string}
        />
      )}
      <AppModal name={"code"} onClose={clearModal}>
        <div className="title-block">{title}</div>
        <div className="flex items-center gap-l-8">
          <div onClick={onBack} style={{ cursor: "pointer" }}>
            <BackArrowLeftIcons />
          </div>
          <div className="subtitle-block">{desc}</div>
        </div>
        <OtpInput
          value={value as string}
          onChange={onChange}
          checkIsValid={checkIsValid}
        />
        <PrimaryButtonStyled style={{ width: "100%" }} onClick={clearModal}>
          Войти
        </PrimaryButtonStyled>
      </AppModal>
    </>
  );
};

export default CodeModal;
