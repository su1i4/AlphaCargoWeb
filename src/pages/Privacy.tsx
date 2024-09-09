import MainLayouts from "../layouts/MainLayouts";
import { useEffect, useState } from "react";

function useResponsivePadding() {
  const [padding, setPadding] = useState(getPadding(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setPadding(getPadding(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getPadding(width: any) {
    if (width > 1200) {
      return "200px";
    } else if (width > 800) {
      return "100px";
    } else {
      return "15px";
    }
  }

  return padding;
}

export const Privacy = () => {
  const padding = useResponsivePadding();

  return (
    <MainLayouts>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: `0 ${padding}` 
        }}
        className="container mx-auto p-8 items-center"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">
          Политика конфиденциальности
        </h1>
        <h2 className="text-xl font-semibold mb-4 mt-4">1. Общие положения</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
          }}
        >
          <p className="mb-4">
            <strong>1.1.</strong> Настоящая Политика конфиденциальности
            определяет порядок обработки и защиты информации о пользователях
            мобильного приложения "Альфа Карго" (далее — "Приложение").
          </p>
          <p className="mb-6">
            <strong>1.2.</strong> Использование Приложения означает
            безоговорочное согласие пользователя с данной Политикой и указанными
            в ней условиями обработки его персональных данных.
          </p>
        </div>
        <h2 className="text-xl font-semibold mb-4 mt-4">
          2. Состав обрабатываемых данных
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
          }}
        >
          <p className="mb-4">
            <strong>2.1.</strong> В рамках использования Приложения мы можем
            собирать следующие данные пользователей:
          </p>
          <ul className="list-disc list-inside mb-4 pl-4">
            <li>регистрационные данные (имя, номер телефона, email);</li>
            <li>
              данные об использовании Приложения (информация об устройстве,
              версия ОС, дата/время использования и т.д.);
            </li>
            <li>
              данные о грузах (номер заказа, статус доставки, местоположение и
              т.д.).
            </li>
          </ul>
          <p className="mb-6">
            <strong>2.2.</strong> Указанные данные необходимы для корректной
            работы Приложения, оказания услуг по отслеживанию грузов и улучшения
            пользовательского опыта.
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-4 mt-4">
          3. Цели обработки данных
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
          }}
        >
          <p className="mb-4">
            <strong>3.1.</strong> Основные цели обработки данных пользователей в
            Приложении:
          </p>
          <ul className="list-disc list-inside mb-4 pl-4">
            <li>
              регистрация учетной записи и предоставление доступа к Приложению;
            </li>
            <li>отслеживание и управление заказами грузоперевозок;</li>
            <li>
              информирование пользователей об изменениях в статусе заказов,
              акциях и специальных предложениях;
            </li>
            <li>
              анализ использования Приложения для его дальнейшего развития и
              улучшения.
            </li>
          </ul>
          <p className="mb-6">
            <strong>3.2.</strong> Обработка данных осуществляется в объеме,
            необходимом для достижения указанных целей.
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-4 mt-4">
          4. Передача данных третьим лицам
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
          }}
        >
          <p className="mb-4">
            <strong>4.1.</strong> Мы можем передавать данные пользователей
            Приложения третьим лицам в следующих случаях:
          </p>
          <ul className="list-disc list-inside mb-4 pl-4">
            <li>
              для оказания услуг по техническому обслуживанию и развитию
              Приложения;
            </li>
            <li>
              для взаимодействия с логистическими партнерами и компаниями,
              оказывающими транспортные услуги;
            </li>
            <li>
              для соблюдения требований законодательства (по запросам
              государственных органов и т.д.).
            </li>
          </ul>
          <p className="mb-6">
            <strong>4.2.</strong> Мы гарантируем конфиденциальность передаваемых
            данных и обеспечиваем должный уровень их защиты у третьих лиц.
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-4 mt-4">
          5. Права пользователей
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
          }}
        >
          <p className="mb-4">
            <strong>5.1.</strong> Пользователи Приложения "Альфа Карго" имеют
            право:
          </p>
          <ul className="list-disc list-inside mb-4 pl-4">
            <li>получать информацию об обрабатываемых персональных данных;</li>
            <li>
              требовать уточнения, блокирования или уничтожения своих
              персональных данных;
            </li>
            <li>отозвать согласие на обработку персональных данных.</li>
          </ul>
          <p className="mb-6">
            <strong>5.2.</strong> Для реализации указанных прав необходимо
            обратиться к нам по контактам, указанным в Приложении.
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-4 mt-4">
          6. Заключительные положения
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
          }}
        >
          <p className="mb-4">
            <strong>6.1.</strong> Мы оставляем за собой право вносить изменения
            в настоящую Политику конфиденциальности. Актуальная версия всегда
            доступна в Приложении.
          </p>
          <p className="mb-6">
            <strong>6.2.</strong> По всем вопросам, связанным с обработкой
            персональных данных, вы можете обратиться к нам через службу
            поддержки Приложения.
          </p>
        </div>
      </div>
    </MainLayouts>
  );
};
