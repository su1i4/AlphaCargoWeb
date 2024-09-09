import styled from "@emotion/styled";
import { Block } from "../../atoms/UI/Block";
import { PrimaryButtonStyled } from "../../atoms/UI/Buttons";

const CargoProgramm = () => {
  return (
    <CargoProgramBlock>
      <div className="title">Где отслеживать информацию <br/> <span>по программе лояльности</span></div>

      <Block className="cargo_program">
        <div className="cargo_program-content">
            <div className="title-block">Узнавайте через мобильное приложение Альфа Карго или в личном кабинете на Aplha-Cargo.com:</div>

            <ul className="cargo_program-list">
                <li><div className="subtitle-block subtitle-block--gray">Уровень программы лояльности и процент кешбэка</div></li>
                <li><div className="subtitle-block subtitle-block--gray">Количество накопленных баллов</div></li>
                <li><div className="subtitle-block subtitle-block--gray">Историю начисления бонусов</div></li>
                <li><div className="subtitle-block subtitle-block--gray">Персональные акции и спецпредложения: список всех действующих акций и ваши персональные купоны и промокоды</div></li>
            </ul>

            <div className="cargo_program-btn">
                <PrimaryButtonStyled>Скачать приложение</PrimaryButtonStyled>
                <PrimaryButtonStyled>Перейти в личный кабинет</PrimaryButtonStyled>
            </div>
        </div>

        <img src={require('../../../assets/images/cargo/p1.png')} alt="Cargo Program" className="img" />
      </Block>
    </CargoProgramBlock>
  );
}

const CargoProgramBlock = styled.div`
    margin-top: 8rem;

    .title {
        span {
            color: #94C325;
        }
    }

    .cargo_program {
        position: relative;
        &-content {
            width: 100%;
            max-width: 618px;
        }

        &-btn {
            display: flex;
            gap: 2rem;
            margin-top: 5rem;
        }

        ul {
            li {
                display: flex;
                align-items: center;
                margin-bottom: 1rem;
                &:last-child {
                    margin-bottom: 0;
                }
                &::before {
                    content: "";
                    display: inline-block;
                    padding: .3rem;
                    background-color: #8c8c8c;
                    border-radius: 50%;
                    margin-right: 1.2rem;
                }
            }
        }

        img {
            position: absolute;
            top: -30%;
            right: -1%;

            width: 600px;
            height: 540px;

            @media (max-width: 1000px) {
                width: 250px;
                height: 250px;

                top: 50%;
                transform: translateY(-50%);
            }

            @media (max-width: 768px) {
                display: none;
            }
        }
    }   
    
    @media (max-width: 1000px) {
        margin-top: 3rem;
    }

    @media (max-width: 768px) {
        .cargo_program-content {
            width: 100%;
            max-width: 100%;

            .cargo_program-btn {
                margin-top: 3rem;
            }

            button {
                width: 50%;
            }
        }
    }

    @media (max-width: 480px) {
        .cargo_program-btn {
            gap: .5rem;
        }
        button {
            padding-inline: 0;

            font-size: 1rem;
        }
    }
`

export default CargoProgramm;
