import { Block } from "../../atoms/UI/Block";
import ContractForm from "../../forms/ContractForm";

const Contract = () => {
  return (
    <div className="ltl_cargo">
      <div className="title">Заключить договор</div>

      <Block>
        <ContractForm />
      </Block>
    </div>
  );
};

export default Contract;
