import styled from "@emotion/styled";
import { Block } from "../../atoms/UI/Block";

const Additional = () => {
  return (
    <div className="ltl_cargo">
      <div className="title">Дополнительные услуги</div>

      <div className="ltl_cargo-card flex content-between wrap">
        <LTLAdditional>
          <Block className="flex items-center content-center">
            <img className="img" src={require("../../../assets/images/ltl/boy.png")} />
          </Block>
          <div className="title-block">Забор груза</div>
        </LTLAdditional>

        <LTLAdditional>
          <Block className="flex items-center content-center">
            <img className="img" src={require("../../../assets/images/ltl/map.png")} />
          </Block>
          <div className="title-block">Доставка груза</div>
        </LTLAdditional>

        <LTLAdditional>
          <Block className="flex items-center content-center">
            <img className="img" src={require("../../../assets/images/ltl/scissor.png")} />
          </Block>
          <div className="title-block">Паллетирование и обертка</div>
        </LTLAdditional>

        <LTLAdditional>
          <Block className="flex items-center content-center">
            <img className="img" src={require("../../../assets/images/ltl/thumb.png")} />
          </Block>
          <div className="title-block">Погрузка и разгрузка</div>
        </LTLAdditional>
      </div>
    </div>
  );
};

const LTLAdditional = styled.div`
  width: 24%;

  text-align: center;

  .title-block {
    margin-top: 2rem;
  }

  @media (max-width: 1000px) {
    width: 49%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export default Additional;
