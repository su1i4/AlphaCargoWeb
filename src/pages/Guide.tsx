import styled from "@emotion/styled";
import GuideBlock from "../components/molecules/Guide/GuideBlock";
import GuideTeam from "../components/molecules/Guide/GuideTeam";
import MainLayouts from "../layouts/MainLayouts";

const Guide = () => {
  return (
    <MainLayouts title="Руководство">
      <div className="title">Руководство</div>

      <GuideBlock />

      <GuideTeamBlock>
        <div className="title-block">Наша команда</div>

        <GuideTeam />
      </GuideTeamBlock>
    </MainLayouts>
  );
};

const GuideTeamBlock = styled.div`
    margin-top: 10rem;

    @media(max-width: 768px) {
        margin-top: 3rem;
    }
`

export default Guide;
