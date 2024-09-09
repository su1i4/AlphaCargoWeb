import styled from "@emotion/styled";

const GuideBlock = () => {
  return (
    <div>
      <GuideBlockStyled className="flex content-between item-flex-end">
        <GuideCard className="guide-card flex items-center gap-3">
          <div className="guide-card_img">
            <div></div>
          </div>

          <div className="guide-card_content">
            <div className="title-block">CMO</div>
            <div className="subtitle-block">Сердюк Елена Викторовна</div>
          </div>
        </GuideCard>
        <GuideCard className="guide-card flex items-center gap-3">
          <div className="guide-card_img guide-card_img--big">
            <div></div>
          </div>

          <div className="guide-card_content">
            <div className="title-block">CMO</div>
            <div className="subtitle-block">Сердюк Елена Викторовна</div>
          </div>
        </GuideCard>
        <GuideCard className="guide-card flex items-center gap-3">
          <div className="guide-card_img">
            <div></div>
          </div>

          <div className="guide-card_content">
            <div className="title-block">CMO</div>
            <div className="subtitle-block">Сердюк Елена Викторовна</div>
          </div>
        </GuideCard>
      </GuideBlockStyled>
    </div>
  );
};

const GuideBlockStyled = styled.div`
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

  @media(max-width: 768px) {
    display: block;

    .guide-card_img, .guide-card_img.guide-card_img--big {
        div {
            width: 100px;
            height: 100px;
        }
    }

    .guide-card  {
        margin-bottom: 2rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
  }
`;

const GuideCard = styled.div``;

export default GuideBlock;
