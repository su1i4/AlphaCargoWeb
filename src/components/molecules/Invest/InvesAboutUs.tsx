import styled from "@emotion/styled";
import CountUp from "react-countup";

const InvesAboutUs = () => {
  return (
    <>
      <InvestAbout className="flex">
        <div className="invest_about">
          <div className="title">О нас</div>
          <div className="subtitle-block">
            «Альфа-Карго» является одной из лучших компаний в сфере
            грузоперевозок Кыргызской Республики. На сегодняшний день с нами
            сотрудничают и работают более 100000 клиентов. Наша команда нацелена
            на реализацию поставленных задач, состоит из профессионалов,
            являющихся ведущими специалистами в своих областях. Мы стремимся
            достигнуть наилучших результатов и признания наших клиентов
          </div>
        </div>

        <div className="invest_image">
          <img className="img" src={require("../../../assets/invest.png")} />
        </div>
      </InvestAbout>

      <InvestNumbers className="invest_numbers flex content-between">
        <div>
          <div className="number">1 000 000</div>
          <div className="title-block">Тонн груза обрабатываем ежегодно</div>
        </div>
        <div>
          <div className="number">
            <CountUp startVal={0} end={15} duration={10} />
          </div>
          <div className="title-block">Складов в России и Кыргызстане</div>
        </div>
        <div>
          <div className="number">100 000</div>
          <div className="title-block">Клиенов сотрудничают с нами</div>
        </div>
        <div>
          <div className="number">21 год</div>
          <div className="title-block">Успешно доставляем посылки</div>
        </div>
      </InvestNumbers>
    </>
  );
};

const InvestAbout = styled.div`
  justify-content: space-between;
  align-items: center;
  .invest_about {
    width: 60%;
  }

  .title {
    margin-bottom: 3rem;
  }

  .invest_image {
    width: 40%;

    text-align: right;
  }

  @media (max-width: 768px) {
    display: block;

    .invest_about {
      width: 100%;

      margin-bottom: 2rem;
    }

    .invest_image {
      width: 100%;

      display: grid;
      place-items: center;
    }

    .title {
      margin-bottom: 2rem;
    }
  }
`;

const InvestNumbers = styled.div`
  margin-top: 10rem;

  text-align: center;

  .number {
    font-size: 6.4rem;
    font-weight: 600;
    color: #94c325;
  }

  @media (max-width: 1000px) {
    display: block;
    margin-top: 5rem;
  }

  @media (max-width: 768px) {
    display: block;
    margin-top: 1rem;
  }

  @media (max-width: 480px) {
    .number {
      font-size: 3.2rem;
      font-weight: 400;
      margin-bottom: 2rem;
    }

    .title-block {
      font-weight: 400;
    }
  }
`;

export default InvesAboutUs;
