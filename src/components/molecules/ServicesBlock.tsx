import styled from "@emotion/styled";
import { Block } from "../atoms/UI/Block";
import { PrimaryButtonStyled } from "../atoms/UI/Buttons";
import { ArrowDownWhiteIcons } from "../atoms/Icons";
import { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useAppDispatch } from "../../hooks/useAppDisptach";
import { getServicesInformationThunk } from "../../store/thunk/assets.thunk";

const ServicesBlock = () => {
  const [show, setShow] = useState<boolean>(false);
  const serivce = useTypedSelector((state) => state.assets.serivce);
  const disptach = useAppDispatch();

  const handleShowInfo = (): void => setShow(!show);

  const classsNameActive: string = show
    ? "serivces_info active"
    : "serivces_info";

  useEffect(() => {
    if (serivce) {
      disptach(getServicesInformationThunk());
    }
  }, [disptach]);

  console.log(serivce);

  return (
    <ServicesStyled className="services">
      {serivce &&
        serivce.map((item) => (
          <Block className="services_card" key={item?.id}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: ".3rem",
              }}
            >
              <div className="services_content">
                <div className="title-block">{item?.header_title}</div>
                <div className="subtitle-block">
                  {item?.header_body}
                </div>

                <PrimaryButtonStyled onClick={handleShowInfo} show={show}>
                  Подробнее <ArrowDownWhiteIcons />
                </PrimaryButtonStyled>
              </div>

              <div className="services_image">
                <img
                  className="img"
                  src={item?.imagePath}
                  alt={item?.header_title}
                />
              </div>
            </div>

            <div className={classsNameActive}>
              <div className="services_show">
                <div className="title-block">Хранение на складе</div>

                <div className="services_info-content">
                  <p className="subtitle-block">
                    Особенности складского хранения включают эффективное
                    расположение груза внутри помещения, соблюдение норм ухода
                    за ними и требований соседства с другой продукцией, а также
                    обеспечение их надежности без утраты качества.
                  </p>
                  <p className="subtitle-block">
                    Хранение товаров - процесс размещения товара в складском
                    помещении, содержание и уход за ним в целях обеспечения его
                    качества и количества.
                  </p>

                  <p className="subtitle-block">
                    Выделяют следующие виды хранения:
                  </p>

                  <ul className="services_list">
                    <li className="subtitle-block">Стеллажное хранение</li>
                    <li className="subtitle-block">Паллетное хранение</li>
                    <li className="subtitle-block">Хранение на мезонинах</li>
                  </ul>
                </div>
              </div>
            </div>
          </Block>
        ))}
      <Block className="services_card">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: ".3rem",
          }}
        >
          <div className="services_content">
            <div className="title-block">Хранение на складе</div>
            <div className="subtitle-block">
              Храните свой товар у нас на складе в Кыргызстане и России
            </div>

            <PrimaryButtonStyled onClick={handleShowInfo} show={show}>
              Подробнее <ArrowDownWhiteIcons />
            </PrimaryButtonStyled>
          </div>

          <div className="services_image">
            <img
              className="img"
              src={require("../../assets/cub2.png")}
              alt=""
            />
          </div>
        </div>

        <div className={classsNameActive}>
          <div className="services_show">
            <div className="title-block">Хранение на складе</div>

            <div className="services_info-content">
              <p className="subtitle-block">
                Особенности складского хранения включают эффективное
                расположение груза внутри помещения, соблюдение норм ухода за
                ними и требований соседства с другой продукцией, а также
                обеспечение их надежности без утраты качества.
              </p>
              <p className="subtitle-block">
                Хранение товаров - процесс размещения товара в складском
                помещении, содержание и уход за ним в целях обеспечения его
                качества и количества.
              </p>

              <p className="subtitle-block">
                Выделяют следующие виды хранения:
              </p>

              <ul className="services_list">
                <li className="subtitle-block">Стеллажное хранение</li>
                <li className="subtitle-block">Паллетное хранение</li>
                <li className="subtitle-block">Хранение на мезонинах</li>
              </ul>
            </div>
          </div>
        </div>
      </Block>

      <Block
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: ".3rem",
        }}
      >
        <div className="services_content">
          <div className="title-block">Хранение на складе</div>
          <div className="subtitle-block">
            Храните свой товар у нас на складе в Кыргызстане и России
          </div>

          <PrimaryButtonStyled>
            Подробнее <ArrowDownWhiteIcons />
          </PrimaryButtonStyled>
        </div>

        <div className="services_image">
          <img className="img" src={require("../../assets/cub2.png")} alt="" />
        </div>
      </Block>
    </ServicesStyled>
  );
};

const ServicesStyled = styled.div<{ show?: boolean }>`
  button {
    margin-top: 4.7rem;

    svg {
      margin-left: 1rem;
    }

    @media (max-width: 480px) {
      margin-top: 2rem;
    }
  }

  .services_card {
    margin-bottom: 3rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .serivces_info {
    width: 100%;
    max-width: 1169px;

    display: grid;
    grid-template-rows: 0fr;

    transition: grid-template-rows 0.2s linear;

    .services_show {
      overflow: hidden;
    }

    &.active {
      margin-top: 5rem;
      grid-template-rows: 1fr;
      transition: grid-template-rows 0.2s linear;
    }

    transition: height 0.2s linear;
    p {
      margin-bottom: 2rem;
    }

    ul {
      li {
        display: flex;
        align-items: center;
        gap: 1rem;
        &::before {
          content: "";
          display: inline-block;
          padding: 3.2px;
          border-radius: 50%;
          background-color: #000;

          @media (max-width: 768px) {
            padding: 2px;
          }
        }

        @media (max-width: 768px) {
          margin-bottom: 0.5rem;
        }
      }
    }

    @media (max-width: 768px) {
      &.active {
        margin-top: 2rem;
      }
    }
  }
`;

export default ServicesBlock;
