import { KeyboardEvent, ClipboardEvent, ChangeEvent } from "react";
import styled from "@emotion/styled";

type TProps = {
  value: string;
  onChange(value: string): void;
  size?: number;
  validationPattern?: RegExp;
  checkIsValid?: () => string;
} & PartialInputProps;

const OtpInput = ({
  size = 4,
  validationPattern = /[0-9]{1}/,
  value,
  onChange,
  className,
  checkIsValid,
  ...restProps
}: TProps) => {
  const arr = new Array(size).fill("-");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const elem = e.target;
    const val = e.target.value;

    if (!validationPattern.test(val) && val !== "") return;

    const valueArr = value ? value.split("") : Array(size).fill("");
    if (valueArr.length < size) {
      valueArr.length = size;
      valueArr.fill("", valueArr.length, size);
    }

    valueArr[index] = val;
    const newVal = valueArr.join("").slice(0, size);
    onChange(newVal);

    if (val) {
      const next = elem.nextElementSibling as HTMLInputElement | null;
      next?.focus();
    }
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    const current = e.currentTarget;
    if (e.key === "ArrowLeft" || e.key === "Backspace") {
      const prev = current.previousElementSibling as HTMLInputElement | null;
      prev?.focus();
      prev?.setSelectionRange(0, 1);
      return;
    }

    if (e.key === "ArrowRight") {
      const prev = current.nextSibling as HTMLInputElement | null;
      prev?.focus();
      prev?.setSelectionRange(0, 1);
      return;
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const val = e.clipboardData.getData("text").substring(0, size);
    onChange(val);
  };

  return (
    <OtpInputBlock>
      {arr.map((_, index) => {
        return (
          <OtpInputStyled
            key={index}
            {...restProps}
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            pattern={validationPattern.source}
            maxLength={4}
            value={value?.at(index) ?? ""}
            onChange={(e) => handleInputChange(e, index)}
            onKeyUp={handleKeyUp}
            onPaste={handlePaste}
          />
        );
      })}
    </OtpInputBlock>
  );
};

const OtpInputStyled = styled.input`
  display: inline-block;
  color: black;
  font-size: 1.8rem;
  width: 67px;
  height: 67px;
  padding: 10px;

  margin-right: 10px;
  background-color: transparent;
  font-weight: 400;
  text-align: center;
  border-radius: 10px;

  border: 2px solid #8c8c8c;
`;
const OtpInputBlock = styled.div`
  display: flex;
  justify-content: space-between;

  margin-block: 2rem;
`;

export default OtpInput;
