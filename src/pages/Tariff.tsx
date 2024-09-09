import styled from "@emotion/styled";
import { Block } from "../components/atoms/UI/Block";
import MainLayouts from "../layouts/MainLayouts";
import { useState } from "react";
import InputBoxForm from "../components/forms/InputBoxForm";
import { PrimaryButtonStyled } from "../components/atoms/UI/Buttons";

interface Inputs {
  country: string;
  city: string;
  type: string;
}

const Tariff = () => {
  const [inputs, setInputs] = useState<Inputs>({
    country: "",
    city: "",
    type: "",
  });

  const [activeDrop, setActiveDrop] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const [show, setShow] = useState<boolean>(false)

  const toggleActiveDrop = (index: number) => {
    setActiveDrop((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const onSaveValueInput = (item: string, name: string, id: number) => {
    setInputs((prevInputs) => {
      let updatedInputs: Inputs = { ...prevInputs };

      if (name === "country") {
        updatedInputs.country = item;
        updatedInputs.city = "";
        updatedInputs.type = "";
      }

      if (name === "city") {
        updatedInputs.city = item;
        updatedInputs.type = "";
      }

      if (name === "type") {
        updatedInputs.type = item;
      }

      return updatedInputs;
    });

    setActiveDrop([false, false, false]);
  };

  const onMathTariff = () => {
    if (inputs.country && inputs.city && inputs.type) {
        setShow(true)
    }
  }

  return (
    <MainLayouts title="Тарифы">
      <div className="title">Тарифы</div>

      <BlockStyled>
        <div className="title-block">
          Узнайте предварительную стоимость отправки
        </div>

        <InputBoxBlock className="flex gap-1_2">
          <InputBoxForm
            label="Страна"
            toggleActiveDrop={toggleActiveDrop}
            index={0}
            active={activeDrop[0]}
            value={inputs.country}
            name="country"
            onSaveValueInput={onSaveValueInput}
          />

          <InputBoxForm
            label="Город"
            toggleActiveDrop={toggleActiveDrop}
            index={1}
            active={activeDrop[1]}
            value={inputs.city}
            name="city"
            onSaveValueInput={onSaveValueInput}
          />

          <InputBoxForm
            label="Тип"
            toggleActiveDrop={toggleActiveDrop}
            index={2}
            active={activeDrop[2]}
            value={inputs.type}
            name="type"
            onSaveValueInput={onSaveValueInput}
          />
        </InputBoxBlock>

        {!show  && <TariffMath className="flex ">
          <div className="subtitle-block">Срок доставки: 5 дней</div>
          <div className="subtitle-block">Стоимость за кг: 55₽</div>
        </TariffMath>}

        <PrimaryButtonStyled onClick={onMathTariff}>Рассчитать</PrimaryButtonStyled>
      </BlockStyled>
    </MainLayouts>
  );
};

const BlockStyled = styled(Block)`
  width: 100%;
  max-width: 750px;

  input,
  button {
    width: 100%;
  }

  button {
    margin-top: 3rem;

    @media (max-width: 480px) {
        margin-top: 2rem;
    }
  }
`;

const InputBoxBlock = styled.div`
  .input_arrow {
    position: relative;
    z-index: 1;
    svg {
      position: absolute;

      right: 20px;

      top: 50%;
      transform: translateY(-50%);

      transition: transform 0.2s linear;
    }

    &.active {
      svg {
        transform: rotate(180deg);
        top: 40%;
      }
    }
  }

  @media (max-width: 480px) {
    display: block;
  }
`;

const TariffMath = styled.div`
  .subtitle-block {
    font-weight: 600;

  }

  gap: 2rem;

  margin-top: 3rem;

  @media (max-width: 480px) {
    margin-top: 2rem;

    display: block;

    .subtitle-block {
        margin-bottom: 1rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
  }
`;

export default Tariff;
