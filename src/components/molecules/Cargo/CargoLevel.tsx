import styled from "@emotion/styled";
import { Block } from "../../atoms/UI/Block";

const CargoLevel = () => {
  return (
    <CargoLevelBlock className="flex content-between">
      <Block className="cargo_level-block">
        <div className="cargo_level-header">
          <div className="title">Уровень 3%</div>
          <div className="subtitle-block subtitle-block--gray">
            Кэшбек 3% баллами за каждую отправку
          </div>
        </div>
        <hr />
        <div className="cargo_level-footer">
          <div className="subtitle-block subtitle-block--gray">
            <span>Начальный уровень</span> присваивается всем, кто подключился к
            Альфа Карго и еще ничего не отправил или отправил только одну
            посылку в предыдущем месяце
          </div>
        </div>

        <img className="img" src={require('../../../assets/images/cargo/l1.png')} alt="" />
      </Block>
      <Block className="cargo_level-block">
        <div className="cargo_level-header">
          <div className="title">Уровень 5%</div>
          <div className="subtitle-block subtitle-block--gray">
            Кэшбек 5% баллами за каждую отправку
          </div>
        </div>
        <hr className="level-5"/>
        <div className="cargo_level-footer">
          <div className="subtitle-block subtitle-block--gray">
            <span>Начальный уровень</span> присваивается всем, кто подключился к
            Альфа Карго и еще ничего не отправил или отправил только одну
            посылку в предыдущем месяце
          </div>
        </div>

        <img className="img" src={require('../../../assets/images/cargo/l2.png')} alt="" />
      </Block>
      <Block className="cargo_level-block">
        <div className="cargo_level-header">
          <div className="title">Уровень 10%</div>
          <div className="subtitle-block subtitle-block--gray">
            Кэшбек 10% баллами за каждую отправку
          </div>
        </div>
        <hr className="level-10"/>
        <div className="cargo_level-footer">
          <div className="subtitle-block subtitle-block--gray">
            <span>Начальный уровень</span> присваивается всем, кто подключился к
            Альфа Карго и еще ничего не отправил или отправил только одну
            посылку в предыдущем месяце
          </div>
        </div>

        <img className="img" src={require('../../../assets/images/cargo/l3.png')} alt="" />
      </Block>
    </CargoLevelBlock>
  );
};

const CargoLevelBlock = styled.div`
  margin-top: 20rem;
  align-items: flex-end;
  .cargo_level-block {
    width: 32.33333%;

    .title {
      margin-bottom: 2rem;
      color: #02447f;
    }

    .subtitle-block {
      span {
        color: #02447f;
      }
    }

    hr {
      padding: 0;
      margin-block: 4rem;
      border: none;
      border-top: 1px solid #27457c4a;

      &.level-5 {
        margin-top: 9rem;
      }

      &.level-10 {
        margin-top: 14.5rem;
      }
    }

    position: relative;

    img {
      position: absolute;
      top: -20%;
      right: -5%;
      z-index: 40;
    }
  }


  @media(max-width: 1000px) {
    margin-top: 3rem;
    display: block;

    .cargo_level-block {
        width: 100%;
        max-width: 455px;

        &:nth-child(1) {
        }
    }
  }

  @media(max-width: 480px) {
    display: block;

    .cargo_level-block {
        width: 100%;
        max-width: 100%px;
        margin-bottom: 2rem;

        hr {
            margin-block: 2rem;
            &.level-5, &.level-10 {
                margin-block: 2rem;
            }
        }

        img {
            top: -25%;
            width: 120px;
            height: 120px;
        }
    }
  }
`;

export default CargoLevel;
