import styled from "@emotion/styled";
import { marginBottom } from "../../../styles/_mixins";

interface IModal {
  search?: boolean;
  full?: boolean;
  header?: boolean;
  height?: number;
  slider?: boolean;
}

export const Modal = styled.div<Partial<IModal>>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 100;
`;

export const ModalInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`;

export const ModalContent = styled.div<IModal>`
  background-color: #fff;
  width: 100%;
  max-width: 500px;
  padding: 4rem;
  position: relative;

  border-radius: 10px;

  .modal_close {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
  }

  p {
    text-align: center;

    ${marginBottom("32")}
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;
