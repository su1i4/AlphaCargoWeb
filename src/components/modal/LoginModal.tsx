import { Controller, useForm } from "react-hook-form";
import AppModal from "./AppModal";
import { ErrorText } from "../atoms/UI/Text";
import styled from "@emotion/styled";
import { InputBorder } from "../atoms/UI/Inputs";
import { PrimaryButtonStyled } from "../atoms/UI/Buttons";
import PassswordForm from "../forms/PassswordForm";
import useManagerModal from "../../hooks/useManagerModal";
import PhoneModal from "./PhoneModal";
import { instance } from "../../api/instance.axios";
import { localStorageWrapper } from "../../config/storage";

interface IProps {
  clearModal: () => void;
  title: string;
}

interface IFormInput {
  login: string;
  password: string;
}

const LoginModal = ({ clearModal, title }: IProps) => {
  const { control, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      login: "",
      password: "",
    },
    mode: "onTouched",
  });

  const { setPhoneModal, modalInfo: modalInfoPhone } = useManagerModal();

  const onRegisterShow = () => {
    setPhoneModal("Введите номер телефона");
  };

  const onSubmit = async (data: IFormInput) => {
    if (data.login && data.password) {
      await instance.post('/auth/login', {
        email: data.login,
        password: data.password
      }).then((res) => {
        if (res) {
          clearModal()
          localStorageWrapper.set('accessToken', (res as any).access_token)
          localStorageWrapper.set('id', (res as any).id)
          localStorageWrapper.set('phone', (res as any).phone)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  };

  return (
    <>
      {modalInfoPhone && (
        <PhoneModal
          title={modalInfoPhone.title as string}
          clearModal={clearModal}
        />
      )}
      <AppModal name={"login"} onClose={clearModal}>
        <div className="title-block">{title}</div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="login"
            control={control}
            rules={{ required: "Почта обязательно для заполнения" }}
            render={({ field, fieldState }) => (
              <>
                <InputBorder
                  {...field}
                  type="text"
                  placeholder="Email"
                  bottom="1px solid #27457C4A"
                  style={{ marginBottom: "1rem" }}
                />
                {fieldState.error && (
                  <ErrorText style={{ margin: "0" }}>
                    {fieldState.error.message}
                  </ErrorText>
                )}
              </>
            )}
          />

          <Controller
            name="password"
            control={control}
            rules={{ required: "Пароль обязательно для заполнения" }}
            render={({ field, fieldState }) => (
              <>
                <PassswordForm field={field} />
                {fieldState.error && (
                  <ErrorText style={{ margin: "0" }}>
                    {fieldState.error.message}
                  </ErrorText>
                )}
              </>
            )}
          />

          <Buttons className="flex gap-1_2">
            <PrimaryButtonStyled type="submit">Войти</PrimaryButtonStyled>

            <PrimaryButtonStyled onClick={onRegisterShow}>
              Регистрация{" "}
            </PrimaryButtonStyled>
          </Buttons>
        </form>
      </AppModal>
    </>
  );
};

const Buttons = styled.div`
  margin-top: 2rem;

  button {
    width: 50%;
  }
`;

export default LoginModal;
