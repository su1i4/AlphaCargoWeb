import styled from "@emotion/styled";
import { Block } from "../../atoms/UI/Block";
import { MediaOpportunityIconsFifth, MediaOpportunityIconsFirst, MediaOpportunityIconsFourth, MediaOpportunityIconsSecond, MediaOpportunityIconsThirt } from "../../atoms/Icons";

const MediaOpportunity = () => {
  return (
    <MediaOpportunityBlock>
      <div className="title">Что вы получаете</div>
      <div className="title-block">Возможности таргетинга</div>

      <div className="media-opportunity_cards media-opportunity_cards-1 flex content-between">
        <Block className="media-opportunity_card flex content-center items-center gap-2">
          <MediaOpportunityIconsFirst />
          <div className="subtitle-block">Вся сеть целиком +350 городов</div>
        </Block>
        <Block className="media-opportunity_card flex content-center items-center gap-2">
          <MediaOpportunityIconsSecond />
          <div className="subtitle-block">База Москвы и Санкт-Петербурга</div>
        </Block>
        <Block className="media-opportunity_card flex content-center items-center gap-2">
          <MediaOpportunityIconsThirt />
          <div className="subtitle-block">Город отдельно</div>
        </Block>
      </div>

      <div className="media-opportunity_cards flex content-between">
        <Block className="media-opportunity_card media-opportunity_card-2 flex content-center items-center gap-2">
          <MediaOpportunityIconsFourth />
          <div className="subtitle-block">По рафонам (гиперлокальная реклама)</div>
        </Block>
        <Block className="media-opportunity_card media-opportunity_card-2 flex content-center items-center gap-2">
          <MediaOpportunityIconsFifth />
          <div className="subtitle-block">По типу получаемых товаров</div>
        </Block>
      </div>
    </MediaOpportunityBlock>
  );
};

const MediaOpportunityBlock = styled.div`
  margin-top: 8rem;

  .title-block {
    color: #02447f;
    margin-bottom: 5rem;
  }

  .media-opportunity_card {
    width: 32.33333%;
    flex-direction: column;

    .subtitle-block {
        color: #8C8C8C;
        text-align: center;
    }

    &.media-opportunity_card-2 {
        width: 49%;
        margin-top: 3rem;
    }
  }

  @media(max-width: 768px) {
    margin-top: 3rem;
    .media-opportunity_cards-1 {
        display: block;

        .media-opportunity_card {
            width: 100%;
            margin-bottom: 1.6rem;
        }
    }

    .media-opportunity_card.media-opportunity_card-2 {
        margin-top: 0;
    }
  }
`;

export default MediaOpportunity;
