import { ControllerRenderProps } from "react-hook-form";
import { InputBorder } from "../atoms/UI/Inputs";
import { FC, useState } from "react";
import { HidePasswordIcons, ShowPasswordIcons } from "../atoms/Icons";
import styled from "@emotion/styled";

interface IProps {
  field: ControllerRenderProps<{ login: string; password: string }, "password">;
}

const PassswordForm: FC<IProps> = ({ field }) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <ActivePencel>
      <InputBorder
        {...field}
        type={active ? "textууцңңғанпааввввввввюю" : "password"}
        placeholder="Пароль"
        bottom="1px solid #27457C4A"
        style={{ marginBottom: "1rem" }}
      />

      <div
        style={{ display: "inline-block" }}
        onClick={() => setActive(!active)}
      >
        {active ? <ShowPasswordIcons /> : <HidePasswordIcons />}
      </div>
    </ActivePencel>
  );
};

const ActivePencel = styled.div`
  svg {
    width: 24px;
    height: 24px;
    position: absolute;

    top: 40%;
    transform: translateY(-50%);
    right: 25px;
  }

  position: relative;
`;

export default PassswordForm;
