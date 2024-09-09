import styled from "@emotion/styled";

const GuideTeam = () => {
  return (
    <div>
      <GuideTeamBlock className="flex content-between items-center">
        <GuideTeamCard>
          <div className="guide-card_img">
            <div></div>
          </div>

          <div className="guide-card_content">
            <div className="title-block">Финансист</div>
            <div className="subtitle-block">Беккожа Маргулан Рашидулы</div>
          </div>
        </GuideTeamCard>
        <GuideTeamCard>
          <div className="guide-card_img">
            <div></div>
          </div>

          <div className="guide-card_content">
            <div className="title-block">Финансист</div>
            <div className="subtitle-block">Беккожа Маргулан Рашидулы</div>
          </div>
        </GuideTeamCard>
        <GuideTeamCard>
          <div className="guide-card_img">
            <div></div>
          </div>

          <div className="guide-card_content">
            <div className="title-block">Финансист</div>
            <div className="subtitle-block">Беккожа Маргулан Рашидулы</div>
          </div>
        </GuideTeamCard>
        <GuideTeamCard>
          <div className="guide-card_img">
            <div></div>
          </div>

          <div className="guide-card_content">
            <div className="title-block">Финансист</div>
            <div className="subtitle-block">Беккожа Маргулан Рашидулы</div>
          </div>
        </GuideTeamCard>
      </GuideTeamBlock>
    </div>
  );
};

const GuideTeamBlock = styled.div`
  margin-top: 5rem;
  flex-wrap: wrap;
`;
const GuideTeamCard = styled.div`
  .guide-card_img {
    div {
      width: 100px;
      height: 100px;

      background-color: #ccc;

      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &--big {
      div {
        width: 160px;
        height: 160px;
      }
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  .guide-card_content {
    text-align: center;

    margin-top: 3rem;
  }

  margin-bottom: 5rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    width: 50%;
  }
`;

export default GuideTeam;
