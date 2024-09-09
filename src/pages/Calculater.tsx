import Calculator from '../components/organisms/Calculater';
import MainLayouts from '../layouts/MainLayouts';

const CalculaterPage = () => {
  return (
    <MainLayouts title='Калькулятор сумма расчитана'>
      <div className="title">Рассчитать стоимость доставки</div>

      <div className="calculater">
        <Calculator title='Юридические отправления расчитываются в личном кабинете' subtitle='' link={false}/>
      </div>
    </MainLayouts>
  );
}

export default CalculaterPage;
