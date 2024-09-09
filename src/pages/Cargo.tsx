import CargoCard from '../components/molecules/Cargo/CargoCard';
import CargoContent from '../components/molecules/Cargo/CargoContent';
import CargoFAQ from '../components/molecules/Cargo/CargoFAQ';
import CargoLevel from '../components/molecules/Cargo/CargoLevel';
import CargoPoints from '../components/molecules/Cargo/CargoPoints';
import CargoProgramm from '../components/molecules/Cargo/CargoProgramm';
import CargoSliderContent from '../components/molecules/Cargo/CargoSliderContent';
import CargoSpend from '../components/molecules/Cargo/CargoSpend';
import MainLayouts from '../layouts/MainLayouts';

const Cargo = () => {
  return (
    <MainLayouts title='Программа лояльности Альфа Карго'>
      <CargoSliderContent />
      <CargoCard />
      <CargoLevel />
      <CargoContent />
      <CargoPoints />
      <CargoSpend />
      <CargoProgramm />
      <CargoFAQ />
    </MainLayouts>
  );
}

export default Cargo;
