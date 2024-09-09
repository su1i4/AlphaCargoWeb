import { InputBox, InputBoxLabel, InputBoxStyled } from "../atoms/UI/Inputs";
import { ArrowDownIcons } from "../atoms/Icons";
import { Dropdown } from "../atoms/UI/Dropdown";

interface IInputBoxFormProps {
  label: string;
  toggleActiveDrop: (index: number) => void;
  index: number;
  active: boolean;
  value: string
  name: string
  onSaveValueInput: (item: string, name: string, id: number) => void
}

const InputBoxForm = ({
  label,
  toggleActiveDrop,
  index,
  active,
  value,
  name, 
  onSaveValueInput
}: IInputBoxFormProps) => {
  return (
    <InputBox>
      <InputBoxLabel>{label}</InputBoxLabel>
      <div className={`input_arrow ${active ? "active": ""}`}>
        <InputBoxStyled
          value={value || "Не выбран"}
          onClick={() => toggleActiveDrop(index)}
          readOnly
        />
        <ArrowDownIcons />

        {active && <Dropdown items={["Kazakhstan"]} name={name} id={0} handleAddValueFromDropdown={onSaveValueInput}/>}
      </div>
    </InputBox>
  );
};

export default InputBoxForm;
