import styled from "@emotion/styled";
import { FAQArrowIcons } from "../../atoms/Icons";
import { useState } from "react";

interface IFAQProps {
  id: number;
  quiestion: string;
  answer: string;
}

const faq: IFAQProps[] = [
  {
    id: 1,
    quiestion: "Что дает программа лояльности Альфа Карго",
    answer: "Вы получаете кэшбеки скидки и перснальные акции",
  },

  {
    id: 2,
    quiestion: "Что дает программа лояльности Альфа Карго",
    answer: "Вы получаете кэшбеки скидки и перснальные акции",
  },
];

const CargoFAQ = () => {
  const [isSelected, setIsSelected] = useState<number | null>(null);

  const toggled = (id: number): void => {
    if (isSelected === id) {
      setIsSelected(null);
    } else {
      setIsSelected(id);
    }
  };

  console.log(isSelected);

  return (
    <CargoFAQBlock>
      <div className="title">Частые вопросы</div>

      <div className="faq_blocks">
        {faq.map((item) => (
          <div className="faq_block" key={item.id}>
            <div
              className={`title-block ${
                isSelected === item.id ? "active" : ""
              }`}
              onClick={() => toggled(item.id)}
            >
              {item.quiestion} <FAQArrowIcons />
            </div>
            <div
              className={`subtitle-block ${
                isSelected === item.id ? "active" : ""
              }`}
            >
              <div>{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </CargoFAQBlock>
  );
};

const CargoFAQBlock = styled.div`
  width: 100%;
  margin-top: 10rem;
  background-color: #fff;
  box-shadow: 0 0 0 100vmax #fff;
  clip-path: inset(0 -100vmax);

  padding-block: 8rem;

  .title-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    margin-bottom: 1.2rem;

    svg {
        transition: all 0.2s linear;
    }
    
    &.active {
        transition: all 0.2s linear;

        svg {
          transition: all 0.2s linear;
        transform: rotate(180deg);
      }
    }
  }

  .subtitle-block {
    max-height: 0;
    overflow: hidden;
    transition: all 0.2s cubic-bezier(1, 0, 1, 0);

    &.active {
      height: auto;
      max-height: 9999px;
      transition: all 0.2s cubic-bezier(1, 0, 1, 0);
    }
  }

  .faq_block {
    border-bottom: 1px solid black;
    padding-block: 2rem;
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
      border: none;
      padding-bottom: 0;
    }
  }

  @media (max-width: 1000px) {
    padding-block: 3rem;
    margin-top: 3rem;
  }
`;

export default CargoFAQ;
