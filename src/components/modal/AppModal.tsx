import React, { ReactNode, useMemo } from "react";
import { TModalId } from "../../providers/ModalManagerProvider";
import useManagerModal from "../../hooks/useManagerModal";
import { Modal, ModalContent, ModalInner } from "../atoms/UI/Modal";
import { CloseModalIcons } from "../atoms/Icons";

interface IProps {
  children?: ReactNode;
  name?: TModalId;
  onClose?: any;
}

const AppModal: React.FC<IProps> = ({ children, name, onClose }) => {
  const { currentModal } = useManagerModal();

  const open = useMemo(() => {
    if (currentModal === name) {
      return true;
    }

    return currentModal === name;
  }, [currentModal, name]);

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {open && (
        <Modal
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalInner>
            <ModalContent>
              {children}{" "}
              <div className="modal_close" onClick={handleClose}>
                <CloseModalIcons />
              </div>
            </ModalContent>
          </ModalInner>
        </Modal>
      )}
    </>
  );
};

export default AppModal;
