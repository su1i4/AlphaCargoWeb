import React, {
  useState,
  ChangeEvent,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import styled from "@emotion/styled";
import { Input } from "../atoms/UI/Inputs";
import { PrimaryButton } from "../atoms/UI/Buttons";
import { ArrowDownIcons } from "../atoms/Icons";
import {
  DropdownBags,
  DropdownCitites,
  DropdownParcelType,
} from "../atoms/UI/Dropdown";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useAppDispatch } from "../../hooks/useAppDisptach";
import {
  getBagsInformationThunk,
  getLocationCitiesInformationThunk,
  getParcelTypesInformationThunk,
} from "../../store/thunk/assets.thunk";
import { onKeyPress } from "../../utlis/keypress";
import { ToastContainer, toast } from "react-toastify";
import { instance } from "../../api/instance.axios";
import { AxiosResponse } from "axios";
import { formatNumberLocal } from "../../utlis/formatNumberLocal";

interface FormData {
  from: string;
  to: string;
  packageSize: string;
  packageType: string;
  weight: string;
  quantity: string;
}

interface InputField {
  id: number;
  name: keyof FormData;
  placeholder: string;
}

const inputFields: InputField[] = [
  { id: 1, name: "from", placeholder: "Откуда" },
  { id: 2, name: "to", placeholder: "Куда" },
  { id: 3, name: "packageSize", placeholder: "Размер посылки" },
  { id: 4, name: "packageType", placeholder: "Тип посылки" },
];

const CalculatorInputField: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    from: "",
    to: "",
    packageSize: "",
    packageType: "",
    weight: "",
    quantity: "",
  });

  const [saveId, setSaveId] = useState<
    Pick<FormData, "from" | "to" | "packageSize" | "packageType">
  >({
    from: "",
    to: "",
    packageSize: "",
    packageType: "",
  });

  const [activeDropdowns, setActiveDropdowns] = useState<{
    [key: string]: boolean;
  }>(inputFields.reduce((acc, field) => ({ ...acc, [field.id]: false }), {}));
  const [resultNumber, setResultNumber] = useState();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleActive = (id: number) => {
    setActiveDropdowns((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleAddValueFromDropdown = (
    text: string,
    name: string,
    id: number,
    itemsId?: number
  ) => {
    setFormData({
      ...formData,
      [name]: text,
    });

    setSaveId({
      ...saveId,
      [name]: itemsId,
    });

    setActiveDropdowns((prevState) => ({
      ...prevState,
      [id]: false,
    }));
  };

  const cities = useTypedSelector((state) => state.assets.cities);
  const bags = useTypedSelector((state) => state.assets.bags);
  const parceltypes = useTypedSelector((state) => state.assets.parceltype);
  const dispatch = useAppDispatch();

  const cititesFrom = useMemo(
    () =>
      cities.filter((item) => item?.type === "From" || item?.type === "Both"),
    [cities]
  );
  const cititesTo = useMemo(
    () => cities.filter((item) => item?.type === "To"),
    [cities]
  );

  useEffect(() => {
    if (cities && parceltypes && bags) {
      Promise.all([
        dispatch(getLocationCitiesInformationThunk()),
        dispatch(getParcelTypesInformationThunk()),
        dispatch(getBagsInformationThunk()),
      ]);
    }
  }, [dispatch]);

  const items = useCallback(
    (name: string, id: number) => {
      if (name === "packageSize") {
        return (
          <DropdownParcelType
            items={parceltypes}
            id={id}
            name={name}
            handleAddValueFromDropdown={handleAddValueFromDropdown}
          />
        );
      } else if (name === "packageType") {
        return (
          <DropdownBags
            items={bags}
            id={id}
            name={name}
            handleAddValueFromDropdown={handleAddValueFromDropdown}
          />
        );
      } else if (name === "from") {
        return (
          <DropdownCitites
            items={cititesFrom && cititesFrom}
            id={id}
            name={name}
            handleAddValueFromDropdown={handleAddValueFromDropdown}
          />
        );
      } else if (name === "to") {
        return (
          <DropdownCitites
            items={cititesTo && cititesTo}
            id={id}
            name={name}
            handleAddValueFromDropdown={handleAddValueFromDropdown}
          />
        );
      }
    },
    [activeDropdowns]
  );

  const onCalculate = async () => {
    if (
      !formData.from ||
      !formData.to ||
      !formData.packageSize ||
      !formData.packageType ||
      !formData.quantity ||
      !formData.weight
    ) {
      toast.error("Все данные обязательно");
    } else {
      try {
        await instance
          .post("/calculator", {
            cityFromId: saveId.from,
            cityToId: saveId.to,
            parcelTypeId: saveId.packageType,
            weight: Number(formData.weight),
            countOfType: Number(formData.quantity),
            bagId: saveId.packageSize,
          })
          .then((res) => {
            if (res) {
              toast.success("Все успесшно");
              setResultNumber(res as any);
            }
          });
      } catch (error) {
        toast.error("Что-то не то");
      }
    }
  };

  return (
    <CalculaterField>
      <div className="calculator_input">
        {inputFields.map((field) => (
          <div
            className={`dropdown${activeDropdowns[field.id] ? " active" : ""}`}
            key={field.id}
          >
            <Input
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name]}
              onClick={() => handleActive(field.id)}
              readOnly
            />
            <ArrowDownIcons />

            {activeDropdowns[field.id] && items(field.name, field.id)}
          </div>
        ))}

        <div>
          <Input
            name={"weight"}
            placeholder={"Вес"}
            value={formData.weight}
            onChange={handleChange}
            onKeyPress={onKeyPress}
          />
        </div>

        <div>
          <Input
            name={"quantity"}
            placeholder={"Количество"}
            value={formData.quantity}
            onChange={handleChange}
            onKeyPress={onKeyPress}
          />
        </div>
      </div>

      {resultNumber && (
        <div className="subtitle-block subtitle-block--result">
          Стоимость за кг: {formatNumberLocal(resultNumber)}₽
        </div>
      )}

      <PrimaryButtonStyled onClick={onCalculate}>
        Рассчитать
      </PrimaryButtonStyled>

      <ToastContainer />
    </CalculaterField>
  );
};

const PrimaryButtonStyled = styled(PrimaryButton)`
  background: #3e80bb;
  color: #fff;
  font-size: 1.8rem;
  border-radius: 10px;
  padding: 1.2rem 0;
  width: 100%;
`;

const CalculaterField = styled.div`
  .subtitle-block {
    &--result {
      font-weight: 600;
      text-align: right;
      margin-bottom: 1.6rem;
    }
  }
`;

export default CalculatorInputField;
