import styled from "@emotion/styled";
import RulesAcceptanceBlock from "../components/molecules/RulesAcceptance/RulesAcceptanceBlock";
import MainLayouts from "../layouts/MainLayouts";
import RulesReglament from "../components/molecules/RulesAcceptance/RulesReglament";
import RulesSend from "../components/molecules/RulesAcceptance/RulesSend";
import RulesDelivery from "../components/molecules/RulesAcceptance/RulesDelivery";

const RulesAcceptance = () => {
  return (
    <MainLayouts title="Правила приема и доставки">
      <div className="title">Правила приема и доставки</div>

      <RulesBlock className="rules">
        <RulesAcceptanceBlock />
        <RulesReglament />
        <RulesSend />
        <RulesDelivery />
      </RulesBlock>
    </MainLayouts>
  );
};

const RulesBlock = styled.div`
    .rules_link-1 {
        margin-bottom: 8rem;

        &:last-child {
            margin-bottom: 0;
        }

        @media (max-width: 768px) {
            margin-bottom: 3rem;
        }
    }
`

export default RulesAcceptance;
