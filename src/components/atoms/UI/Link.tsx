import styled from "@emotion/styled";
import { CSSProperties, ReactNode } from "react";
import { Link as LinkComponent } from "react-router-dom";

interface ILinkProps {
  children: ReactNode;
  link: string;
  styles: CSSProperties;

  bottom: string;
  top: string;
  size: string;
}

export const Link = ({
  children,
  link,
  styles,
  top,
  bottom,
  size,
}: Partial<ILinkProps>) => {
  return (
    <LinkStyled
      to={link as string}
      style={styles}
      top={top}
      bottom={bottom}
      size={size}
    >
      {children}
    </LinkStyled>
  );
};

const LinkStyled = styled(LinkComponent)<
  Partial<Pick<ILinkProps, "bottom" | "top" | "size">>
>`
  display: block;
  font-size: ${(props) => (props.size ? props.size : "1.8rem")};
  color: #02447f;

  margin-bottom: ${(props) => props.bottom};
  margin-top: ${(props) => props.top};

  text-decoration: underline;

  transition: color 0.2s linear;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    color: #94c325;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;

    text-decoration: none;
  }
`;
