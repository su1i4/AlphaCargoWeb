import { FC } from "react";
import styled from "@emotion/styled";
import { Block } from "../atoms/UI/Block";
import { DocumentIcons, LocalIcons, PricingIcons } from "../atoms/Icons";
import CalculatorInputField from "../molecules/CalculatorInputField";

interface IProps {
  title: string;
  subtitle: string;
  link: boolean;
}

const Calculator: FC<IProps> = ({ title, subtitle, link }) => {
  return (
    <>
      <Block>
        <CalculatorBlock>
          <header>
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </header>

          <CalculatorInputField />
        </CalculatorBlock>
      </Block>

      {link && (
        <div
          className="flex content-between block-mb"
          style={{ marginTop: "2rem" }}
        >
          <CalculaterLinkBlock>
            <LocalIcons />
            <div className="subtitle-block">Адреса офисов</div>
          </CalculaterLinkBlock>

          <CalculaterLinkBlock>
            <DocumentIcons />
            <div className="subtitle-block">Отследить посылку</div>
          </CalculaterLinkBlock>

          <CalculaterLinkBlock>
            <PricingIcons />
            <div className="subtitle-block">Тарифы</div>
          </CalculaterLinkBlock>
        </div>
      )}
    </>
  );
};

const CalculatorBlock = styled.div`
  header {
    margin-bottom: 3rem;

    @media (max-width: 480px) {
      margin-bottom: 2rem;
    }

    h2 {
      font-size: 2.4rem;
      font-weight: 600;
      margin-bottom: 1.6rem;

      @media (max-width: 480px) {
        font-size: 1.8rem;
      }
    }

    p {
      font-size: 1.8rem;
      font-weight: 400;

      @media (max-width: 480px) {
        font-size: 1.3rem;
      }
    }
  }

  .calculator_input {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    margin-bottom: 3rem;

    .dropdown {
      position: relative !important;
      input:read-only {
        cursor: pointer;
        padding-right: 5rem;
      }

      svg {
        position: absolute;
        right: 30px;
        top: 25px;
        transition: transform 0.2s linear;
      }

      &.active {
        svg {
          transform: rotate(180deg);
        }
      }
    }

    @media (max-width: 480px) {
      display: block;
    }

    div {
      width: 32.33333%;

      @media (max-width: 768px) {
        width: 31.33333%;
      }

      @media (max-width: 480px) {
        width: 100%;
      }

      input {
        @media (max-width: 480px) {
          margin-bottom: 1.2rem;
        }
      }

      span {
        display: block;
        color: #8c8c8c;
        margin-top: 1.2rem;

        @media (max-width: 480px) {
          margin-top: 0;
          margin-bottom: 1.2rem;
        }
      }
    }
  }
`;

const CalculaterLinkBlock = styled.div`
  width: 32.33333%;
  max-width: 460px;
  background-color: #02447f;
  border-radius: 30px;
  padding-block: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  color: #fff;

  @media (max-width: 1000px) {
    width: 100%;
    max-width: 100%;

    margin-bottom: 1.6rem;

    padding-block: 2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default Calculator;
