import AppModal from "./AppModal";

interface IProps {
  title: string;
  desc: string;
  clearModal: () => void;
}

const SuccessModal = ({ title, desc, clearModal }: IProps) => {
  return (
    <AppModal name={"success"} onClose={clearModal}>
      <div className="title-block">{title}</div>
      <div className="subtitle-block">{desc}</div>
    </AppModal>
  );
};

export default SuccessModal;
