import React, { useState } from "react";
import { PrimaryButtonStyled } from "../atoms/UI/Buttons";
import { InputBorder } from "../atoms/UI/Inputs";
import AppModal from "./AppModal";
import LoginModal from "./LoginModal";
import { ErrorText } from "../atoms/UI/Text";
import { instance } from "../../api/instance.axios";
import useValidPhone from "../../hooks/useValidPhone";
import useManagerModal from "../../hooks/useManagerModal";

interface IProps {
  title: string;
  clearModal: () => void;
}

const PhoneModal: React.FC<IProps> = ({ title, clearModal }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState<string>("");
  const {modalInfo, setLoginModal} = useManagerModal()

  const { useFormatRef, onPhoneInput, onPhoneKeyDown, onPhonePaste } =
    useValidPhone(phone);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.trim() === "" && email.trim() === "" && phone.trim() === "" && password.trim() === "") {
      setError("Все поля должны быть заполнены");
      return;
    }

    try {
      const response = await instance.post("/auth/signup", {
        fio: name,
        email,
        phone,
        password
      });

      if (response) {
        setName("")
        setEmail("")
        setPassword("")
        setPhone("")
        setError(null)
        setLoginModal("Войти")
      }
    } catch (error) {
      console.error("Ошибка при регистрации:", error);
      setError("Произошла ошибка при регистрации");
    }
  };

  return (
    <>
      {modalInfo && <LoginModal clearModal={clearModal} title={modalInfo.title as string} />}
      <AppModal name={"phone"} onClose={clearModal}>
        <div className="title-block">{title}</div>

        <form onSubmit={handleSubmit}>
          <InputBorder
            type="text"
            placeholder="Имя, Фамилия"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            style={{ borderRadius: "10px", marginBottom: "1.6rem" }}
            border="1px solid #8C8C8C"
          />

          <InputBorder
            type="email"
            placeholder="Email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderRadius: "10px", marginBottom: "1.6rem" }}
            border="1px solid #8C8C8C"
          />

          <InputBorder
            type="text"
            border="1px solid #8C8C8C"
            name="phone"
            placeholder="+7 () ___ __ __"
            style={{ borderRadius: "10px", marginBottom: "1.6rem" }}
            onChange={(e) => setPhone(e.target.value)}
            value={useFormatRef.current}
            minLength={0}
            maxLength={20}
            onInput={onPhoneInput}
            onKeyDown={onPhoneKeyDown}
            onPaste={onPhonePaste}
          />

          <InputBorder
            type="password"
            placeholder="Придумаете пароль"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderRadius: "10px", marginBottom: "1.6rem" }}
            border="1px solid #8C8C8C"
          />

          {error && (
            <ErrorText style={{ margin: "0", marginBottom: ".6rem" }}>
              {error}
            </ErrorText>
          )}

          <PrimaryButtonStyled style={{ width: "100%" }} type="submit">
            Регистрация
          </PrimaryButtonStyled>
        </form>
      </AppModal>
    </>
  );
};

export default PhoneModal;
