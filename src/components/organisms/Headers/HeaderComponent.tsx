import { Link } from "react-router-dom";
import Popover, { PopoverClient } from "../../Popover/Popover";
import { ArrowDownIcons } from "../../atoms/Icons";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  className?: string;
  setActive?: Dispatch<SetStateAction<boolean>>;
  active?: boolean;
}

export const HeaderPage = ({ className }: IProps) => {
  return (
    <nav className={`nav nav--page ${className}`}>
      <Link to={"/"} className={`nav_links nav_links--page ${className}`}>
        Частным клиентам
      </Link>
      <Link to={"/"} className={`nav_links nav_links--page ${className}`}>
        Бизнесу
      </Link>
      <Link to={"/invest"} className={`nav_links nav_links--page ${className}`}>
        О нас
      </Link>
      <Link
        to={"/contacts"}
        className={`nav_links nav_links--page ${className}`}
      >
        Контакты
      </Link>
    </nav>
  );
};

export const HeaderLinksDrop = ({ active }: { active: boolean }) => {
  return (
    <nav className={`nav nav--drop ${active ? "active" : ""}`}>
      <div className="nav_links-popover" style={{ position: "relative" }}>
        <Link to={"/tracking"} className="nav_links nav_links--drop">
          Отследить отправки
        </Link>
        <div className="subtitle-block">
          Рассчитайте стоимость отправки своего груза
        </div>
      </div>
      <div className="nav_links-popover" style={{ position: "relative" }}>
        <Link to={"/services"} className="nav_links nav_links--drop">
          Сервисы
          <ArrowDownIcons />
        </Link>
        <div className="subtitle-block">Вызовите выездную группу</div>
        <PopoverClient />
      </div>
      <div className="nav_links-popover" style={{ position: "relative" }}>
        <Link to={"/"} className="nav_links nav_links--drop">
          Заключить договор
        </Link>
        <div className="subtitle-block">
          Узнайте цены на посылки в разные города
        </div>
      </div>
      <div className="nav_links-popover" style={{ position: "relative" }}>
        <Link className="nav_links nav_links--drop" to={"/"}>
          Договоры и инструкции
        </Link>
        <div className="subtitle-block">
          Узнайте цены на посылки в разные города
        </div>
      </div>
    </nav>
  );
};

export const HeaderLinksDropClients = ({ active }: { active: boolean }) => {
  return (
    <nav className={`nav nav--drop ${active ? "active" : ""}`}>
      <div className="nav_links-popover" style={{ position: "relative" }}>
        <Link to={"/tracking"} className="nav_links nav_links--drop">
          Отправить или получить
          <ArrowDownIcons />
        </Link>
        <div className="subtitle-block">
          Рассчитайте стоимость отправки своего груза
        </div>
        <Popover />
      </div>
      <div className="nav_links-popover" style={{ position: "relative" }}>
        <Link to={"/tracking"} className="nav_links nav_links--drop">
          Отследить посылку
        </Link>
        <div className="subtitle-block">Вызовите выездную группу</div>
      </div>
      <div className="nav_links-popover" style={{ position: "relative" }}>
        <Link to={"/services"} className="nav_links nav_links--drop">
          Сервисы и продукты
          <ArrowDownIcons />
        </Link>
        <div className="subtitle-block">
          Рассчитайте стоимость отправки своего груза
        </div>
      </div>
      <div className="nav_links-popover" style={{ position: "relative" }}>
        <Link to={"/rulesacceptance"} className="nav_links nav_links--drop">
          Правила приема и доставки
        </Link>
        <div className="subtitle-block">
          Узнайте цены на посылки в разные города
        </div>
      </div>
    </nav>
  );
};

export const HeaderLinksDropFranchise = ({ active }: { active: boolean }) => {
  return (
    <nav className={`nav nav--drop ${active ? "active" : ""}`}>
      <div className="nav_links-popover" style={{ position: "relative" }}>
        <Link to={"/history"} className="nav_links nav_links--drop">
          История компании
        </Link>
      </div>
      <div className="nav_links-popover" style={{ position: "relative" }}>
        <Link to={"/presscenter"} className="nav_links nav_links--drop">
          Пресс-центр
        </Link>
      </div>
      <div className="nav_links-popover" style={{ position: "relative" }}>
        <Link to={"/guide"} className="nav_links nav_links--drop">
          Руководство
        </Link>
      </div>
      <div className="nav_links-popover" style={{ position: "relative" }}>
        <Link to={"/career"} className="nav_links nav_links--drop">
          Карьера
        </Link>
      </div>
      <div className="nav_links-popover" style={{ position: "relative" }}>
        <Link to={"/franchise"} className="nav_links nav_links--drop">
          Франшиза
        </Link>
      </div>
      <div className="nav_links-popover" style={{ position: "relative" }}>
        <Link to={"/invest"} className="nav_links nav_links--drop">
          Инвесторам
        </Link>
      </div>
    </nav>
  );
};

export const HeaderBurger = ({ className, setActive, active }: IProps) => {
  return (
    <>
      <button
        className={`burger ${className}`}
        onClick={() => setActive && setActive(!active)}
      >
        <span className="burger_item"></span>
        <span className="burger_item"></span>
        <span className="burger_item"></span>
      </button>
    </>
  );
};
