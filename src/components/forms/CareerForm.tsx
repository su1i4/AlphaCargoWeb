import styled from "@emotion/styled";
import { Input } from "../atoms/UI/Inputs";
import { useState } from "react";
import useValidPhone from "../../hooks/useValidPhone";
import { PrimaryButtonStyled } from "../atoms/UI/Buttons";
import { ArrowDownIcons } from "../atoms/Icons";
import { Dropdown } from "../atoms/UI/Dropdown";

const CareerForm = () => {
  const [value, setValue] = useState<string>("");
  const [salary, setSalary] = useState<number>(0);
  const [dropValue, setDropValue] = useState<{
    item: string;
    name: string;
    id: number;
  }>();
  const [dropdown, setDropDown] = useState<boolean>(false);
  const { useFormatRef, onPhoneInput, onPhoneKeyDown, onPhonePaste } =
    useValidPhone(value);

  const handleShowDropdownValue = (item: string, name: string, id: number) => {
    setDropValue({ item, name, id });

    setDropDown(false);
  };

  return (
    <CareerFormStyled>
      <div className="career-block">
        <div className="subtitle-block">ФИО</div>

        <Input type="text" name="name" placeholder="Введите ваше имя" />
      </div>

      <div className="career-block">
        <div className="subtitle-block">Номер телефона</div>

        <Input
          type="text"
          name="name"
          placeholder="+7"
          value={useFormatRef.current}
          onChange={(e) => setValue(e.target.value)}
          maxLength={20}
          onInput={onPhoneInput}
          onKeyDown={onPhoneKeyDown}
          onPaste={onPhonePaste}
        />
      </div>

      <div className="career-block">
        <div className="subtitle-block">Выберите должность</div>

        <div className={`career-block_dropdown ${dropdown ? "active" : ""}`}>
          <Input
            type="text"
            name="name"
            placeholder="Выберите должность"
            readOnly
            onClick={() => setDropDown(!dropdown)}
            value={dropValue?.item}
          />

          <ArrowDownIcons />

          {dropdown && (
            <Dropdown
              items={["Frontend Developer"]}
              name="Frontend Developer"
              id={1}
              handleAddValueFromDropdown={handleShowDropdownValue}
            />
          )}
        </div>
      </div>

      <div className="career-block">
        <div className="subtitle-block">Желаемая заработная плата</div>

        <Input
          type="text"
          name="name"
          placeholder="Заработная плата"
          pattern="[0-9]*"
          value={
            salary === 0 || isNaN(salary) ? "" : salary.toLocaleString("ru-RU")
          }
          onChange={(e) => {
            const value = parseInt(e.target.value.replace(/\D/g, ""));
            setSalary(isNaN(value) ? 0 : value);
          }}
          onKeyPress={(e) => {
            if (!/[0-9]/.test(e.key)) {
              e.preventDefault();
            }
          }}
        />
      </div>

      <PrimaryButtonStyled>Отправить резюме</PrimaryButtonStyled>
    </CareerFormStyled>
  );
};

const CareerFormStyled = styled.div`
  .career-block {
    margin-bottom: 1.6rem;
  }

  .subtitle-block {
    margin-bottom: 1.2rem;
  }

  .career-block_dropdown {
    position: relative;

    svg {
      position: absolute;

      top: 50%;
      transform: translateY(-50%);
      right: 30px;
      transition: transform 0.2s linear;
    }

    &.active {
      svg {
        transform: rotate(180deg);
      }
    }

    input {
      cursor: pointer;
    }
  }
`;

export default CareerForm;
