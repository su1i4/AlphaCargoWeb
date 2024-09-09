import { Dispatch, SetStateAction, useState } from "react";
import { ArrowDownWhiteIcons, SearchFooterIcons } from "../atoms/Icons";
import { Input } from "../atoms/UI/Inputs";
import { Link } from "react-router-dom";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  active?: boolean;
}

const FooterNavItem: React.FC<NavItemProps> = ({ to, children, active }) => (
  <Link
    to={to}
    className={`footer_link footer_link--mob ${active ? "active" : ""}`}
  >
    {children}
  </Link>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_inner">
          <div className="footer_block">
            <img
              className="img"
              src={require("../../assets/logo_mob.png")}
              alt=""
            />
          </div>
          <div className="footer_block">
            <FooterNavItem to={"/"}>
              <div className="title-block">Бизнесу</div>
            </FooterNavItem>

            <nav className="nav">
              <FooterNavItem to={"/profile/package"}>
                Отследить отправки
              </FooterNavItem>
              <FooterNavItem to={"/iin"}>Заключить договор</FooterNavItem>
              <FooterNavItem to={"/rulesacceptance"}>
                Договоры и инструкции
              </FooterNavItem>
              <FooterNavItem to={"/ltl"}>LTL</FooterNavItem>
              <FooterNavItem to={"/tariff"}>Тарифы</FooterNavItem>
              <FooterNavItem to={"/franchise"}>Франшиза</FooterNavItem>
              <FooterNavItem to={"/media"}>Альфа медиа</FooterNavItem>
            </nav>
          </div>
          <div className="footer_block">
            <div className="title-block">Частным клиентам</div>

            <nav className="nav">
              <FooterNavItem to={"/iin"}>Отправить или получить</FooterNavItem>
              <FooterNavItem to={"/tracking"}>Отследить посылку</FooterNavItem>
              <FooterNavItem to={"/calculater"}>Калькулятор</FooterNavItem>
              <FooterNavItem to={"/tracking"}>Отследить</FooterNavItem>
              <FooterNavItem to={"/"}>Заказать выездную группа</FooterNavItem>
              <FooterNavItem to={"/"}>Официальный груз</FooterNavItem>
              <FooterNavItem to={"/tariff"}>Тарифы</FooterNavItem>
              <FooterNavItem to={"/"}>Онлайн оплата</FooterNavItem>
              <FooterNavItem to={"/"}>Программа лояльности</FooterNavItem>
              <FooterNavItem to={"/rulesacceptance"}>
                Правила приема и доставки
              </FooterNavItem>
            </nav>
          </div>
          <div className="footer_block">
            <div className="title-block">Дополнительно</div>

            <nav className="nav">
              <FooterNavItem to={"/calculater"}>Калькулятор</FooterNavItem>
              <FooterNavItem to={"/tariff"}>Тарифы</FooterNavItem>
              <FooterNavItem to={"/"}>Заказать выездную группу</FooterNavItem>
              <FooterNavItem to={"/"}>Онлайн оплата</FooterNavItem>
            </nav>
          </div>
          <div className="footer_block">
            <div className="footer_search">
              <Input placeholder="Поиск" type="text" name="search" />
              <SearchFooterIcons />
            </div>

            <div className="footer_content">
              <div className="title-block">Социальные сети</div>

              <div className="flex gap-1_2">
                <img src={require("../../assets/insta.png")} alt="" />
                <img src={require("../../assets/what.png")} alt="" />
              </div>

              <div className="footer_contact">
                <div className="title-block">Контакты</div>

                <a>Кыргызстан</a>
                <FooterNavItem to={"tel:+996550559846"}>
                  +996 550-55-98-46
                </FooterNavItem>
                <a>Россия </a>
                <FooterNavItem to={"tel:+79672729211"}>
                  +7 967 272-92-11{" "}
                </FooterNavItem>
              </div>
            </div>
          </div>
        </div>

        <div className="flex content-between">
          <div className="subtitle-block">
            Copyright © 2024 Транспортная компания «Alpha Cargo»
          </div>

          <div style={{display: 'flex', gap: '20px'}} className="flex gap-4">
            <a href="/privacy" className="subtitle-block cursor-pointer hover:underline">Политика конфиденциальности</a>
            <div className="subtitle-block">Пользовательское соглашение</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface BlockProps {
  title: string;
  children: React.ReactNode;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const FooterBlock: React.FC<BlockProps> = ({
  title,
  children,
  active,
  setActive,
}) => {
  return (
    <div className="footer_block">
      <div
        className={`title-block title-block--footer ${active ? "active" : ""}`}
        onClick={() => setActive(!active)}
      >
        {title} <ArrowDownWhiteIcons />
      </div>
      <nav className={`nav`}>{children}</nav>
    </div>
  );
};

export const FooterMobile: React.FC = () => {
  const [activeMob, setActiveMob] = useState<boolean>(false);
  const [activeDop, setActiveMobDop] = useState<boolean>(false);
  const [activeMobContact, setActiveMobContact] = useState<boolean>(false);
  return (
    <footer className="footer footer-mob">
      <div className="container">
        <div
          className="footer_inner footer_inner--flex"
          style={{ border: "none" }}
        >
          <div className="footer_block footer_block--flex">
            <img
              className="img"
              src={require("../../assets/logo_mob.png")}
              alt=""
            />
          </div>

          <div className="footer--flex flex">
            <FooterBlock
              title="Меню"
              active={activeMob as boolean}
              setActive={setActiveMob}
            >
              <FooterNavItem active={activeMob as boolean} to="/calculater">
                Расчитать стоимость
              </FooterNavItem>
              <FooterNavItem active={activeMob as boolean} to="/tracking">
                Отследить посылку
              </FooterNavItem>
              <FooterNavItem active={activeMob as boolean} to="/">
                Программа лояльности
              </FooterNavItem>
              <FooterNavItem
                active={activeMob as boolean}
                to="/profile/package"
              >
                Официальный груз
              </FooterNavItem>
            </FooterBlock>

            <FooterBlock
              title="Дополнительно"
              active={activeDop as boolean}
              setActive={setActiveMobDop}
            >
              <FooterNavItem active={activeDop as boolean} to="/calculater">
                Калькулятор
              </FooterNavItem>
              <FooterNavItem active={activeDop as boolean} to="/tariff">
                Тарифы
              </FooterNavItem>
              <FooterNavItem active={activeDop as boolean} to="/">
                Заказать выездную группу
              </FooterNavItem>
              <FooterNavItem active={activeDop as boolean} to="/">
                Онлайн оплата
              </FooterNavItem>
            </FooterBlock>

            <FooterBlock
              title="Контакты"
              active={activeMobContact as boolean}
              setActive={setActiveMobContact}
            >
              <a
                className={`footer_link footer_link--mob ${
                  activeMobContact ? "active" : ""
                }`}
              >
                Кыргызстан
              </a>
              <Link
                to={"tel:+996550559846"}
                className={`footer_link footer_link--mob ${
                  activeMobContact ? "active" : ""
                }`}
              >
                +996 550-55-98-46
              </Link>
              <a
                className={`footer_link footer_link--mob ${
                  activeMobContact ? "active" : ""
                }`}
              >
                Россия
              </a>
              <Link
                to={"tel:+79672729211"}
                className={`footer_link footer_link--mob ${
                  activeMobContact ? "active" : ""
                }`}
              >
                +7 967 272-92-11
              </Link>
            </FooterBlock>
          </div>
        </div>

        <div className="flex footer_mob-links">
          <div className="col-1 footer_search">
            <Input placeholder="Поиск" />
            <SearchFooterIcons />
          </div>

          <div className="col-2 items-center">
            <div className="title-block" style={{ marginBottom: "0" }}>
              Социальные сети
            </div>

            <div className="flex gap-1_2">
              <img
                className="img"
                src={require("../../assets/insta.png")}
                alt=""
              />
              <img
                className="img"
                src={require("../../assets/what.png")}
                alt=""
              />
            </div>
          </div>
        </div>

        <hr />
        <div className="footer_priv flex content-between">
          <div className="subtitle-block subtitle-block-mob">
            Copyright © 2024 Транспортная компания «Alpha Cargo»
          </div>

          <div className="footer_priv flex gap-2">
            <a href="/privacy" className="subtitle-block subtitle-block-mob">
              Политика конфиденциальности
            </a>
            <div className="subtitle-block subtitle-block-mob">
              Пользовательское соглашение
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
