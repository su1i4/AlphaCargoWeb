import { createContext, Dispatch, SetStateAction, useState } from "react";

export type TModalId =
  | "success"
  | "error"
  | "change"
  | "login"
  | "phone"
  | "code"
  | "request"
  | null;

interface IModalManager {
  currentModal: TModalId;
  setCurrentModal: Dispatch<SetStateAction<TModalId>> | any;
}

export const ModalManagerContext = createContext<Partial<IModalManager>>({});

const ModalManagerProvider = ({ children }: any) => {
  const [currentModal, setCurrentModal] = useState<TModalId>(null);

  const value: IModalManager = {
    currentModal,
    setCurrentModal,
  };

  return (
    <ModalManagerContext.Provider value={value}>
      {children}
    </ModalManagerContext.Provider>
  );
};

export default ModalManagerProvider;
