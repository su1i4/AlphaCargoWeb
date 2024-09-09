import styled from "@emotion/styled";

export const Input = styled.input<{ background?: string }>`
  display: inline-block;
  width: 100%;
  border-radius: 10px;
  padding: 1.8rem 4rem 2rem 3rem;

  background-color: ${(props) =>
    props.background ? props.background : "#efefef"};
  border: none;

  font-size: 1.8rem;
  color: #000000;

  &::placeholder {
    color: #8c8c8c;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const InputBorder = styled.input<{ border?: string; bottom?: string }>`
  display: inline-block;
  width: 100%;
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.bottom};
  padding: 1.6rem 4rem 1.6rem 3rem;
  background-color: transparent;

  font-size: 1.8rem;
  color: #000000;

  &::placeholder {
    color: #8c8c8c;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const InputBox = styled.div`
  position: relative;

  @media (max-width: 480px) {
    margin-bottom: 1.6rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const InputBoxStyled = styled(InputBorder)`
  border: 1px solid #8c8c8c;
  cursor: pointer;
  background: #fff;
  padding: 10px;
  border-radius: 11px;
  width: 200px;
`;

export const InputBoxLabel = styled.label`
  position: absolute;
  top: -10px;
  left: 10px;
  background: #fff;
  padding: 0 5px;
  font-size: 1.5rem;
  color: #8c8c8c;

  z-index: 2;
`;

// Checkbox

export const Checkbox = styled.div`
  input[type="checkbox"] {
    accent-color: #02447F;
    width: 20px;
    height: 20px;
  }

  display: flex;
  align-items: center;
  gap: 1.2rem;

  color: #8C8C8C;
`;
