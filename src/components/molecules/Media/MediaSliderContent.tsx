import styled from "@emotion/styled";

const MediaSliderContent = () => {
  return (
    <MediaSlider>
        <div className="media_slider">
            <div className="media_content">
                <div className="title">Акция <span>1+1 -</span> двойной охват аудитории за половину стоимости!</div>
                <div className="subtitle-block">Покупайте рекламу на одном мониторе - получайте рекламу на втором мониторе бесплатно</div>
            </div>
            <div className="media_slider-image">
                <img src={require("../../../assets/images/media/mediaslider.png")} alt="Media Slider" className="img" />
            </div>
        </div>
    </MediaSlider>
  );
}

const MediaSlider = styled.div`
    width: 100%;

    .media_slider {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .media_content {
        width: 50%;

        .title {
            margin-bottom: 2rem;

            span {
                color: #94C325;
            }
        }
    }

    .media_slider-image {
        width: 50%;

        display: flex;
        justify-content: flex-end;
    }
`

export default MediaSliderContent;
