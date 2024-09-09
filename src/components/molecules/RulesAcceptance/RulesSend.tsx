import { Link } from "../../atoms/UI/Link";

const RulesSend = () => {
  return (
    <div className="rules_link-1">
      <div className="title-block">Правила приема и вручения отправлений:</div>
      <Link link="#" bottom="1.6rem">
        Доверенность для передачи и приема отправлений в компанию СДЭК
      </Link>
      <Link link="#" bottom="1.6rem">
        Подключите CDEK ID и получайте посылки без паспорта
      </Link>
      <Link link="#" bottom="1.6rem">
        Руководство по упаковке грузов
      </Link>
      <Link link="#" bottom="1.6rem">
        Опасные грузы. Перевозка. Ограничения
      </Link>
      <Link link="#" bottom="1.6rem">
        Как упаковать отправления (видео)
      </Link>
    </div>
  );
};

export default RulesSend;
