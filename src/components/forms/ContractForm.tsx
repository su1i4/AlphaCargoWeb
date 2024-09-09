import styled from "@emotion/styled";
import { PrimaryButtonStyled } from "../atoms/UI/Buttons";
import { Input } from "../atoms/UI/Inputs";
import { useState } from "react";

interface FormState {
  too: string;
  nameCompany: string;
  iin: string;
  email: string;
}

const ContractForm = () => {
  const [contractValue, setContractValue] = useState<FormState>({
    too: "",
    nameCompany: "",
    iin: "",
    email: "",
  });

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  return (
    <>
      <div className="title-block">
        Заполните форму и мы с вами свяжемся в ближайшее время
      </div>

      <FormField>
        <span>Организационная структура</span>
        <Input
          name={"too"}
          placeholder={"ТОО, ИП, Самозанятый"}
          value={contractValue.too}
          onChange={(e) =>
            setContractValue({ ...contractValue, too: e.target.value })
          }
        />
      </FormField>

      <FormField>
        <span>Наименование организации</span>
        <Input
          name={"nameCompany"}
          placeholder={"Введите название компании"}
          value={contractValue.nameCompany}
          onChange={(e) =>
            setContractValue({
              ...contractValue,
              nameCompany: e.target.value,
            })
          }
        />
      </FormField>

      <FormField>
        <span>ИНН</span>
        <Input
          name={"iin"}
          placeholder={"Введите ИНН"}
          value={contractValue.iin}
          onChange={(e) =>
            setContractValue({ ...contractValue, iin: e.target.value })
          }
        />
      </FormField>

      <FormField>
        <span>E-mail</span>
        <Input
          name={"email"}
          placeholder={"Введите ваше имя"}
          value={contractValue.email}
          onChange={(e) =>
            setContractValue({ ...contractValue, email: e.target.value })
          }
        />
      </FormField>

      <FormField>
        <span>Контактный телефон</span>
        <Input
          name={"phoneNumber"}
          placeholder={"+7"}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </FormField>

      <FormButton>
        <PrimaryButtonStyled style={{ width: "100%" }}>
          Отправить заявку
        </PrimaryButtonStyled>
      </FormButton>
    </>
  );
};

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

export default ContractForm;
