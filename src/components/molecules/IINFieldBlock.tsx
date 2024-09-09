import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import { SearchIcons, SuccessIcons } from "../atoms/Icons";
import { PrimaryButton } from "../atoms/UI/Buttons";
import { Input } from "../atoms/UI/Inputs";
import useDebounced from "../../hooks/useDebounced";
import { Switch } from "antd";

interface IMeetForm {
  name: string;
  lastname: string;
  email: string;
}

const IINFieldBlock = () => {
  const [iinValue, setIINValue] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);

  const [meetForm, setMeetForm] = useState<IMeetForm>({
    name: "",
    lastname: "",
    email: "",
  });

  const [city, setCity] = useState<string>("");
  const debouncedCityValue = useDebounced(city, 1500);

  const onChangeIINOnlyNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    let regExpr = value.replace(/[^0-9.]/g, "");

    if (!regExpr) {
      setIINValue("");
    } else {
      setIINValue(value as string);
    }
  };

  const onSuccess = () => {
    if (iinValue.length === 10) {
      setSuccess(true);
    } else {
      setSuccess(false);
      setError("Пишите ИИН правильно или пишите полностью");
    }
  };

  const isActive: boolean = iinValue.length === 10 ? true : false;

  return (
    <>
      <div className="input_field">
        <div className="flex gap-1_2">
          <div className="iin_number">
            <Input
              placeholder="ИНН"
              background="#FFFFFF"
              value={iinValue}
              onChange={onChangeIINOnlyNumber}
              min={0}
              maxLength={10}
            />

            <SuccessIcons isActive={isActive} />
          </div>
          <PrimaryButton
            color="white"
            background="#02447F"
            radius="10px"
            padding="1rem 3rem 1.2rem 3rem"
            size="1.8rem"
            onClick={onSuccess}
          >
            <SearchIcons />
          </PrimaryButton>
        </div>

        {success ? (
          <div className="iin_success">
            <div className="subtitle-block">Юлия Николаевна Ломачук</div>
          </div>
        ) : (
          <div className="iin_error">{error && error}</div>
        )}

        <CityFieldBlock success={success} setCity={setCity} city={city} />
      </div>

      {debouncedCityValue && success && (
        <>
          <hr style={{ backgroundColor: "#27457C4A" }} />
          <div className="input_field">
            <MeetField
              checked={checked}
              setChecked={setChecked}
              meetForm={meetForm}
              setMeetForm={setMeetForm}
            />
          </div>
        </>
      )}
    </>
  );
};

interface IPropsCity {
  success: boolean;
  setCity: Dispatch<SetStateAction<string>>;
  city: string;
}

const CityFieldBlock: FC<IPropsCity> = ({ success, setCity, city }) => {
  return (
    <>
      {success && (
        <div className="city_field">
          <div className="title-block">Выберите город</div>
          <Input
            placeholder="Город"
            background="#FFFFFF"
            value={city}
            onChange={(e) => setCity && setCity(e.target.value as string)}
          />
        </div>
      )}
    </>
  );
};

interface IPropsMeet {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
  setMeetForm: any;
  meetForm: IMeetForm;
}

const MeetField: FC<IPropsMeet> = ({
  checked,
  setChecked,
  meetForm,
  setMeetForm,
}) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setMeetForm({
      ...meetForm,
      [name]: value,
    });
  };

  return (
    <>
      <div className="title-block">Давайте знакомиться</div>

      <div className="meet_field">
        <Input
          placeholder="Имя"
          background="#FFFFFF"
          name="name"
          value={meetForm.name}
          onChange={onChange}
        />
        <Input
          placeholder="Фамилия"
          background="#FFFFFF"
          name="lastname"
          value={meetForm.lastname}
          onChange={onChange}
        />
        <Input
          placeholder="Email"
          background="#FFFFFF"
          name="email"
          value={meetForm.email}
          onChange={onChange}
        />

        <div
          className="flex items-center gap-1_2"
          style={{ marginBottom: "1.6rem" }}
        >
          <Switch checked={checked} onChange={(e) => setChecked(e)} />{" "}
          <div className="subtitle-block">У меня интернет магазин</div>
        </div>

        <div className="access">
          Нажимая кнопку «Заключить договор» Я принимаю условия 
          <a href="#">Пользовательского соглашения</a> и даю своё согласие на 
          <a href="#">Политику сбора ПДн клиентов</a>
        </div>

        <PrimaryButton
          color="white"
          background="#02447F"
          radius="10px"
          padding="1rem 3rem 1.2rem 3rem"
          size="1.8rem"
          style={{ width: "100%" }}
        >
          Заключить договор
        </PrimaryButton>
      </div>
    </>
  );
};

export default IINFieldBlock;
