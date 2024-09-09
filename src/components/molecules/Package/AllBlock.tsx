import { Block } from "../../atoms/UI/Block";

const AllBlock = () => {
  return (
    <Block style={{backgroundColor: '#DF5146', marginTop: '2rem', color: 'white'}}>
      <div className="title-block">Номер накладной: 2727289</div>
      <div className="subtitle-block">Дата: 02.12.2021</div>
      <div className="subtitle-block">Статус: находится в городе Москва</div>
    </Block>
  );
}

export default AllBlock;
