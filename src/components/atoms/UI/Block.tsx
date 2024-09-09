import styled from "@emotion/styled";

export const Block = styled.div<{ width?: string }>`
  width: ${(props) => (props.width ? props.width : "100%")};
  border-radius: 10px;
  padding: 4rem;
  background-color: #ffffff;

  @media (max-width: 480px) {
    padding: 2rem;
  }
`;

export const FormField = styled.div`
  margin-bottom: 1.2rem;
`;
