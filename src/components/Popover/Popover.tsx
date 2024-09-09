import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Popover = () => {
  return (
    <PopoverBlock className="popover_block popover_block--tariff">
      <div className="card">
        <Link className="card_link" to={"/calculater"}>
          <div className="subtitle-block subtitle-block--popover">Калькулятор</div>
          <div className="subtitle-block-ld">
            Рассчитайте стоимость отправки своего груза
          </div>
        </Link>
        <Link className="card_link" to={"/tariff"}>
          <div className="subtitle-block subtitle-block--popover">Тарифы</div>
          <div className="subtitle-block-ld">
            Узнайте цены на посылки в разные города
          </div>
        </Link>
        <Link className="card_link" to={"/tracking"}>
          <div className="subtitle-block subtitle-block--popover">Отслеживания</div>
          <div className="subtitle-block-ld">
            Отслеживайте свои посылки по номеру накладной
          </div>
        </Link>
        <Link className="card_link" to={"/"}>
          <div className="subtitle-block subtitle-block--popover">Официальный груз</div>
          <div className="subtitle-block-ld">
            Отслеживайте свои посылки по номеру накладной
          </div>
        </Link>
        <Link className="card_link" to={"/"}>
          <div className="subtitle-block subtitle-block--popover">Заказать выездную группу</div>
          <div className="subtitle-block-ld">Вызовите выездную группу</div>
        </Link>
      </div>
    </PopoverBlock>
  );
};

export const PopoverClient = () => {
  return (
    <PopoverBlock className="popover_block">
      <div className="card">
        <Link className="card_link" to={"/ltl"}>
          <div className="subtitle-block subtitle-block--popover">LTL</div>
          <div className="subtitle-block-ld">
            Перевозка сборных грузов для вашего бизнеса
          </div>
        </Link>
        <Link className="card_link" to={"/media"}>
          <div className="subtitle-block subtitle-block--popover">Альфа медиа</div>
          <div className="subtitle-block-ld">
            Размещайте свою рекламу на ТВ на складах Альфа Карго
          </div>
        </Link>
        <Link className="card_link" to={"/tariff"}>
          <div className="subtitle-block subtitle-block--popover">Тарифы</div>
          <div className="subtitle-block-ld">
            Подробная информация о тарифах для бизнеса
          </div>
        </Link>
        <Link className="card_link" to={"/"}>
          <div className="subtitle-block subtitle-block--popover">Заключить договор</div>
          <div className="subtitle-block-ld">
            Отправляйте товары и другие грузы по всему миру
          </div>
        </Link>
        <Link className="card_link" to={"/franchise"}>
          <div className="subtitle-block subtitle-block--popover">Франшиза</div>
          <div className="subtitle-block-ld">
            Готовые логистические маршруты, бесплатное обучение и продвижение,
            миллиона лояльных клиентов
          </div>
        </Link>
      </div>
    </PopoverBlock>
  );
};

const PopoverBlock = styled.div`
  background-color: #ffffff;

  border-radius: 10px;
  padding: 4rem;

  width: 100%;
  min-width: 570px;

  position: absolute;
  top: 100%;
  z-index: 50;

  .subtitle-block {
    transition: color 0.2s linear;
    &:hover {
      color: #94c325;
    }
  }

  .subtitle-block-ld {
    font-size: 1.5rem;
    color: #8c8c8c;
    margin-top: 1.2rem;
  }

  .card {
    display: flex;
    flex-wrap: wrap;

    gap: 2rem;

    a {
      width: 45%;
    }
  }

  display: none;

  @media (max-width: 1000px) {
    left: -205%;
  }

  @media (max-width: 768px) {
    &.popover_block--tariff {
      left: -100%!important;
    }
  }

  @media (max-width: 480px) {
    left: -135%;
    width: 100%;
    padding: 2rem;
    min-width: 400px;
    max-width: 100%;
    z-index: 90;

    .subtitle-block-ld {
      font-weight: 400;
      font-size: 1.2rem;
    }

    &.popover_block--tariff {
      left: -15%!important;
    }
  }
`;

export default Popover;
