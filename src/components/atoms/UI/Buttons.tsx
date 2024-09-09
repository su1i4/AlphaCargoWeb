import styled from "@emotion/styled";

interface IPrimary {
  background?: string;
  color?: string;
  size?: string;
  weight?: string;
  radius?: string;
  padding?: string;
}

export const PrimaryButton = styled.button<IPrimary>`
  display: inline-block;
  cursor: pointer;

  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};

  border-radius: ${(props) => props.radius};
  padding: ${(props) => props.padding};

  border: none;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const PrimaryButtonStyled = styled(PrimaryButton)<{
  show?: boolean;
  background?: string;
  color?: string;
}>`
  background: ${(props) => (props.background ? props.background : "#02447f")};
  color: ${(props) => (props.color ? props.color : "#fff")};
  font-size: 1.8rem;
  border-radius: 10px;
  padding: 1rem 3rem 1.2rem 3rem;

  svg {
    transform: ${(props) => (props.show ? "rotate(180deg)" : "rotate(0deg)")};

    transition: transform 0.2s linear;
  }
`;

interface IOutlined {
  background?: string;
  weight?: string;
}

export const OutlinedButton = styled.button<IOutlined>`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  cursor: pointer;

  color: #000;
  background-color: transparent;
  font-size: 1.8rem;
  font-weight: ${(props) => props.weight};

  border-radius: 10px;
  padding: 1rem 3rem 1.2rem 3rem;

  border: 1px solid ${(props) => props.background};

  svg {
    position: static;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;
