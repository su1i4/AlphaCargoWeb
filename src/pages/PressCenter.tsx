import MainLayouts from "../layouts/MainLayouts";

const PressCenter = () => {
  return (
    <MainLayouts title="Пресс-центр">
      <div className="title">Пресс-центр</div>
      
      <div className="presscenter">
        <div className="title-block">Контакты: +7 727 376-19-46</div>
        <div className="title-block">E-mail: <span>alpha.cargo@gmail.com</span></div>
        <div className="title-block">Секретарь: Беккожа Маргулан Рашидулы</div>
      </div>
    </MainLayouts>
  );
}

export default PressCenter;
