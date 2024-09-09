import styled from "@emotion/styled";
import { IBags, ICities, IParcelTypes } from "../../../types/assets.types";

interface IPropsValue {
  items: IBags[] | IParcelTypes[] | any[];
  name: string;
  handleAddValueFromDropdown: (
    text: string,
    name: string,
    id: number,
    itemsId?: number
  ) => void;
  id: number;
}

export const Dropdown = ({
  items,
  name,
  handleAddValueFromDropdown,
  id,
}: IPropsValue) => {
  return (
    <>
      <DropdownStyled>
        {items.map((item) => (
          <div
            className="subtitle-block"
            key={item}
            onClick={() => handleAddValueFromDropdown(item, name, id)}
          >
            {item}
          </div>
        ))}
      </DropdownStyled>
    </>
  );
};

export const DropdownParcelType = ({
  items,
  name,
  handleAddValueFromDropdown,
  id,
}: IPropsValue) => {
  return (
    <>
      <DropdownStyled>
        {items.map((item) => (
          <div
            className="subtitle-block"
            key={item.id}
            onClick={() =>
              handleAddValueFromDropdown(item.name, name, id, item.id)
            }
          >
            {item.name}
          </div>
        ))}
      </DropdownStyled>
    </>
  );
};

export const DropdownBags = ({
  items,
  name,
  handleAddValueFromDropdown,
  id,
}: IPropsValue) => {
  return (
    <>
      <DropdownStyled>
        {items.map((item) => (
          <div
            className="subtitle-block"
            key={item.id}
            onClick={() =>
              handleAddValueFromDropdown(item.title, name, id, item.id)
            }
          >
            {item.title}
          </div>
        ))}
      </DropdownStyled>
    </>
  );
};

export const DropdownCitites = ({
  items,
  name,
  handleAddValueFromDropdown,
  id,
}: IPropsValue) => {
  return (
    <>
      <DropdownStyled>
        {items.map((item) => (
          <div
            className="subtitle-block"
            key={item.id}
            onClick={() =>
              handleAddValueFromDropdown(item.cityname, name, id, item.id)
            }
          >
            {item.cityname}
          </div>
        ))}
      </DropdownStyled>
    </>
  );
};

export const DropdownStyled = styled.div`
  width: 100% !important;
  position: absolute;
  z-index: 1000;
  padding: 1.8rem 3rem;
  background-color: red;

  border-radius: 10px;

  background-color: #efefef;

  .subtitle-block {
    width: 100% !important;

    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }

    transition: color 0.2s linear;

    cursor: pointer;

    &:hover {
      color: #94c325;
    }
  }

  position: absolute;
  z-index: 40;
`;
