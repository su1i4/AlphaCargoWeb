import { useState } from "react";
import AppModal from "./AppModal";
import useValidPhone from "../../hooks/useValidPhone";
import { instance } from "../../api/instance.axios";
import { PrimaryButtonStyled } from "../atoms/UI/Buttons";
import { InputBorder } from "../atoms/UI/Inputs";
import styled from "@emotion/styled";

import { DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import en from "antd/es/date-picker/locale/en_US";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { ToastContainer, toast } from "react-toastify";
import { ArrowDownIcons } from "../atoms/Icons";
import { Dropdown } from "../atoms/UI/Dropdown";
import { onKeyPress } from "../../utlis/keypress";

interface IProps {
  title: string;
  clearModal: () => void;
}

dayjs.extend(buddhistEra);

const buddhistLocale: typeof en = {
  ...en,
  lang: {
    ...en.lang,
    fieldDateFormat: "BBBB-MM-DD",
    fieldDateTimeFormat: "BBBB-MM-DD HH:mm:ss",
    yearFormat: "BBBB",
    cellYearFormat: "BBBB",
  },
};

const itemsDropDown: string[] = [
  "Малкенький размер",
  "Средний размер",
  "Большой размер",
];

const RequestDeliveryModal = ({ title, clearModal }: IProps) => {
  const [name, setName] = useState<string>("");
  const [addressFrom, setAddressFrom] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [date, setDate] = useState<any>("");
  const [totalDel, setTotalDel] = useState<string>("");
  const [addressTo, setAddressTo] = useState<string>("");

  const [dropDownValue, setDropDownValue] = useState<string>("");
  const [activeDrop, setActiveDrop] = useState<boolean>(false);

  const { useFormatRef, onPhoneInput, onPhoneKeyDown, onPhonePaste } =
    useValidPhone(phone);

  const onChange: DatePickerProps<any>["onChange"] = (dateValue: any) => {
    if (dateValue) {
      setDate(dateValue.format("YYYY-MM-DD HH:mm:ss"));
    } else {
      setDate("");
    }
  };

  const onChangeDropdown = (text: string, name: string, id: number) => {
    if (text && name && id) {
      setDropDownValue(text);
      setActiveDrop(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      name.trim() === "" &&
      addressFrom.trim() === "" &&
      phone.trim() === "" &&
      date.trim() === "" &&
      totalDel.trim() === "" &&
      addressTo.trim() === "" &&
      dropDownValue.trim() === ""
    ) {
      toast.error("Все поля должны быть заполнены");
      return;
    }

    try {
      const response = await instance.post("/request", {
        fullName: name,
        phoneNumber: phone,
        pickupAddress: addressFrom,
        pickupTime: date,
        packageSize: dropDownValue,
        packageCount: Number(totalDel),
        deliveryAddress: addressTo,
      });

      if (response) {
        toast.success("Данные были успешно отправленый", {
          onClose: () => {
            clearModal();
          },
        });
      }
    } catch (error) {
      toast.error("Все поля должны быть заполнены");
    }
  };
  return (
    <AppModal name={"request"} onClose={clearModal}>
      <div className="title-block">{title}</div>

      <form onSubmit={handleSubmit}>
        <InputBorderBottom
          type="text"
          placeholder="Представьтесь, пожалуйста"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          style={{ borderRadius: "10px", marginBottom: "1.6rem" }}
          bottom="1px solid #27457C4A"
        />

        <InputBorderBottom
          type="text"
          bottom="1px solid #27457C4A"
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

        <InputBorderBottom
          type="text"
          placeholder="Адрес откуда забрать"
          value={addressFrom}
          name="address"
          onChange={(e) => setAddressFrom(e.target.value)}
          style={{ borderRadius: "10px", marginBottom: "1.6rem" }}
          bottom="1px solid #27457C4A"
        />

        <StyledDatePicker
          showTime
          locale={buddhistLocale}
          onChange={onChange}
          placeholder="Укажите дату и время забора"
          style={{ width: "100%" }}
        />

        <InputDropDownIcons
          className={activeDrop ? "active" : ""}
          onClick={() => setActiveDrop(!activeDrop)}
        >
          <InputBorderBottom
            type="text"
            placeholder="Размер посылки"
            value={dropDownValue}
            name="size"
            style={{ borderRadius: "10px", marginBottom: "1.6rem" }}
            bottom="1px solid #27457C4A"
            readOnly
          />
          <ArrowDownIcons />

          {activeDrop && (
            <Dropdown
              items={itemsDropDown}
              name={itemsDropDown[0]}
              id={itemsDropDown.length}
              handleAddValueFromDropdown={onChangeDropdown}
            />
          )}
        </InputDropDownIcons>

        <InputBorderBottom
          type="text"
          placeholder="Количество посылок"
          value={totalDel}
          name="address"
          onChange={(e) => setTotalDel(e.target.value)}
          style={{ borderRadius: "10px", marginBottom: "1.6rem" }}
          bottom="1px solid #27457C4A"
          onKeyPress={onKeyPress}
        />

        <InputBorderBottom
          type="text"
          placeholder="Адрес куда доставить"
          value={addressTo}
          name="address"
          onChange={(e) => setAddressTo(e.target.value)}
          style={{ borderRadius: "10px", marginBottom: "1.6rem" }}
          bottom="1px solid #27457C4A"
        />

        <PrimaryButtonStyled style={{ width: "100%" }} type="submit">
          Оформить заявку
        </PrimaryButtonStyled>
      </form>

      <ToastContainer />
    </AppModal>
  );
};

const InputBorderBottom = styled(InputBorder)`
  border-radius: 0 !important;
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  transition: all 0.25s ease;

  &:read-only {
    cursor: pointer;
    &::placeholder {
      color: #000;
    }
  }

  &:focus {
    outline: none;
    -webkit-transition: all 0.25s ease;
    -moz-transition: all 0.25s ease;
    transition: all 0.25s ease;
    box-shadow: inset 0 -2px 0 0 #02447f;
    border-color: transparent;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  margin-bottom: 1.6rem;
  border: none !important;
  border-bottom: 1px solid #27457c4a !important;
  border-radius: 0;

  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  transition: all 0.25s ease;

  &:focus {
    outline: none;
    -webkit-transition: all 0.25s ease;
    -moz-transition: all 0.25s ease;
    transition: all 0.25s ease;
    box-shadow: inset 0 -2px 0 0 #02447f;
    border-color: transparent;
  }

  padding: 1.6rem 4rem 1.6rem 3rem;
  background-color: transparent;

  font-size: 1.8rem !important;
  color: #000000;

  &::placeholder {
    color: #8c8c8c !important;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const InputDropDownIcons = styled.div`
  position: relative;
  svg {
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    right: 20px;
  }
`;

export default RequestDeliveryModal;
