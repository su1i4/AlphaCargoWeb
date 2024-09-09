import ServicesBlock from "../components/molecules/ServicesBlock";
import MainLayouts from "../layouts/MainLayouts";

const Services = () => {
  return (
    <MainLayouts title="Услуги">
        <div className="title">Все услуги</div>

        <ServicesBlock />
    </MainLayouts>
  );
}

export default Services;
