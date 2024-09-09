import styled from "@emotion/styled";
import { useState } from "react";
import { Block } from "../components/atoms/UI/Block";
import { Input } from "../components/atoms/UI/Inputs";
import { PrimaryButtonStyled } from "../components/atoms/UI/Buttons";
import MainLayouts from "../layouts/MainLayouts";
import useValidPhone from "../hooks/useValidPhone";
import { instance } from "../api/instance.axios";
import { ToastContainer, toast } from 'react-toastify';

interface FormField {
  label: string;
  name: keyof FormState;
  placeholder: string;
  required: boolean;
}

interface FormState {
  region: string;
  city: string;
  address: string;
  fullName: string;
  birthDate: string;
  phoneNumber: string;
  email: string;
  referralSource: string;
}

const formFields: FormField[] = [
  {
    label: "Регион",
    name: "region",
    placeholder: "Название страны",
    required: true,
  },
  {
    label: "Город",
    name: "city",
    placeholder: "Введите название города",
    required: true,
  },
  {
    label: "Адрес",
    name: "address",
    placeholder: "Введите адрес",
    required: true,
  },
  {
    label: "ФИО",
    name: "fullName",
    placeholder: "Введите ваше имя",
    required: true,
  },
  {
    label: "Дата рождения",
    name: "birthDate",
    placeholder: "Дата",
    required: true,
  },
  {
    label: "Контактный телефон",
    name: "phoneNumber",
    placeholder: "+7",
    required: true,
  },
  {
    label: "E-mail",
    name: "email",
    placeholder: "Введите ваше имя",
    required: true,
  },
  {
    label: "Откуда вы о нас узнали",
    name: "referralSource",
    placeholder: "Название источника",
    required: false,
  },
];

const Franchise = () => {
  const [formState, setFormState] = useState<FormState>({
    region: "",
    city: "",
    address: "",
    fullName: "",
    birthDate: "",
    phoneNumber: "",
    email: "",
    referralSource: "",
  });
  const { useFormatRef, onPhoneInput, onPhoneKeyDown, onPhonePaste } =
    useValidPhone(formState.phoneNumber);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof FormState
  ) => {
    setFormState({ ...formState, [key]: e.target.value });
  };

  const handleSubmit = async () => {
    const emptyFields = formFields
      .filter((field) => field.required && !formState[field.name])
      .map((field) => field.label);

    if (emptyFields.length > 0) {
      toast.error(`Пожалуйста, заполните обязательные поля: ${emptyFields.join(', ')}`)
    } else {
      await instance
        .post("/franchise", {
          region: formState.region,
          city: formState.city,
          address: formState.address,
          fio: formState.fullName,
          birthDate: formState.birthDate,
          phone: formState.phoneNumber,
          email: formState.email,
          sourceInfo: formState.referralSource,
        })
        .then((res) => {
          if (res) {
            toast.success("Данные успешно")
            setFormState({
              region: "",
              city: "",
              address: "",
              fullName: "",
              birthDate: "",
              phoneNumber: "",
              email: "",
              referralSource: "",
            });
          }
        })
        .catch(() => toast.error("Что-то пошло не так"));
    }
  };

  return (
    <MainLayouts title="Франшиза">
      <div className="title">Анкета для открытия франшизы Альфа Карго</div>

      <Block>
        <div className="title-block">
          Заполните форму и мы с вами свяжемся в ближайшее время
        </div>

        <FranchiseForm>
          {formFields.map((field, index) => (
            <FormField key={index}>
              <span>{field.label}</span>
              <Input
                name={field.name}
                placeholder={field.placeholder}
                type={
                  field.name === "birthDate"
                    ? "date"
                    : field.name === "email"
                    ? "email"
                    : "text"
                }
                value={
                  field.name === "phoneNumber"
                    ? useFormatRef.current
                    : formState[field.name]
                }
                onChange={(e) => handleChange(e, field.name)}
                {...(field.name === "phoneNumber" && {
                  minLength: 0,
                  maxLength: 20,
                  onInput: onPhoneInput,
                  onKeyDown: onPhoneKeyDown,
                  onPaste: onPhonePaste,
                })}
              />
            </FormField>
          ))}

          <FormButton>
            <PrimaryButtonStyled onClick={handleSubmit}>
              Получить франшизу
            </PrimaryButtonStyled>
          </FormButton>
        </FranchiseForm>
      </Block>

      <ToastContainer />
    </MainLayouts>
  );
};

const FranchiseForm = styled.div``;

const FormField = styled.div`
  margin-bottom: 1.6rem;

  span {
    display: inline-block;
    font-size: 1.8rem;
    margin-bottom: 1.2rem;

    @media (max-width: 480px) {
      font-size: 1.3rem;
    }
  }
`;

const FormButton = styled.div`
  margin-top: 2rem;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 1.4rem;
  margin-top: 1rem;
`;

export default Franchise;
