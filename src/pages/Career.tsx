import { Block } from "../components/atoms/UI/Block";
import CareerForm from "../components/forms/CareerForm";
import MainLayouts from "../layouts/MainLayouts";

const Career = () => {
  return (
    <MainLayouts title="Карьера">
        <div className="title">Работай с лучшими в Альфа Карго</div>

        <Block>
            <div className="title-block">Заполните форму и мы с вами свяжемся в ближайшее время</div>

            <CareerForm />
        </Block>
    </MainLayouts>
  );
}

export default Career;
