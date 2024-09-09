import styled from "@emotion/styled";
import { Block } from "../../atoms/UI/Block";
import { Progress } from "antd";

const MediaProgress = () => {
  return (
    <MediaProgressBlock className="mt-8">
      <div className="title">Полный потрет аудитории</div>

      <div className="media_progress flex content-between gap-3">
        <Block className="media_progress-card">
          <div>
            <div className="title-sm">48%</div>
            <div className="subtitle-block">Мужчины</div>
          </div>
          <div>
            <div className="title-sm">52%</div>
            <div className="subtitle-block">Женщины</div>
          </div>
          <div>
            <div className="title-sm">73%</div>
            <div className="subtitle-block">Высшее образование</div>
          </div>
          <div>
            <div className="title-sm">68%</div>
            <div className="subtitle-block">В семье есть дети</div>
          </div>
        </Block>
        <Block className="media_progress-card">
          <div>
            <div className="subtitle-block">Высокий</div>
            <Progress percent={1} size={"small"} strokeColor={"#94C325"} />
          </div>
          <div>
            <div className="subtitle-block">Средний</div>
            <Progress percent={76} size={"small"} strokeColor={"#94C325"} />
          </div>
          <div>
            <div className="subtitle-block">Низкий</div>
            <Progress percent={9} size={"small"} strokeColor={"#94C325"} />
          </div>
        </Block>
      </div>

      <div className="media_circle gap-3">
        <Block className="media_circle-card">
          <div className="title-block">Покупатели интернет- магазинов</div>
          <div className="circle flex content-center items-center">
            <Progress type="circle" percent={50} strokeColor={"#02447F"} />
          </div>
        </Block>
        <Block className="media_circle-card">
          <div className="title-block">Продавцы</div>
          <div className="circle flex content-center items-center">
            <Progress type="circle" percent={50} strokeColor={"#02447F"} />
          </div>
        </Block>
        <Block className="media_circle-card">
          <div className="title-block">Магазины, сети и тд</div>
          <div className="circle flex content-center items-center">
            <Progress type="circle" percent={50} strokeColor={"#02447F"} />
          </div>
        </Block>
      </div>
    </MediaProgressBlock>
  );
};

const MediaProgressBlock = styled.div`
  margin-top: 8rem;

  .media_progress {
    &-card {
      &:nth-child(1) {
        width: 70%;

        display: flex;
        justify-content: space-between;
      }

      &:nth-child(2) {
        width: 30%;
      }
    }

    @media(max-width: 768px) {
        display: block;

        &-card {
            width: 100% !important;
            margin-bottom: 1.6rem;

            .title-sm {
                font-size: 4.2rem;
            }
        }
    }

    @media(max-width: 480px) {
        &-card {
            display: block !important;
            .title-sm {
                font-size: 2.6rem;
                margin-bottom: 0;
                margin-top: 1.6rem;
            }

            .subtitle-block {
                font-weight: 700;
            }
        }
    }
  }

  .media_circle {
    margin-top: 3rem;
    display: flex;

    &-card {
      width: 30%;

      .circle {
        align-items: flex-end;
      }
    }

    @media(max-width: 480px) {
        display: block;

        &-card {
            width: 100% !important;
            margin-bottom: 1.6rem;

            .title-sm {
                font-size: 4.2rem;
            }
        }
    }
  }
`;

export default MediaProgress;
