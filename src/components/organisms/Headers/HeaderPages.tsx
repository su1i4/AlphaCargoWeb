import { Link } from "react-router-dom";
import { ArrowDownIcons, FlagIcons, LocationIcons } from "../../atoms/Icons";
import { PrimaryButton } from "../../atoms/UI/Buttons";
import { HeaderBurger, HeaderPage } from "./HeaderComponent";
import {
  getPhoneInLocalStorage,
  getTokenInLocalStorage,
} from "../../../utlis/getTokenLocal";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  handleOpenModal?: () => void;
  setActive: Dispatch<SetStateAction<boolean>>;
  active: boolean;
}

const HeaderPages = ({ handleOpenModal, setActive, active }: IProps) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header_inner">
          <div className="header_left">
            <div className="header_logo">
              <Link to={"/"}>
                <img src={require("../../../assets/logo.png")} />
              </Link>
            </div>
            <HeaderPage className="header--l" />
          </div>

          <Link to={"/shops"}>
            <div className="header_loc">
              <LocationIcons />

              <div>Пункты Альфа</div>
            </div>
          </Link>

          <div className="header_lang flex items-center gap-2 header-lang--page">
            <div className="flex items-center gap-1_2 pointer lang--page">
              <FlagIcons />
              <div>RU</div>
              <ArrowDownIcons />
            </div>

            <PrimaryButton
              background="#02447F"
              color="#FFF"
              size="1.8rem"
              padding="10px 30px 12px 30px"
              radius="15px"
              onClick={handleOpenModal}
            >
              {getTokenInLocalStorage() ? getPhoneInLocalStorage() : "Войти"}
            </PrimaryButton>

            <HeaderBurger
              className="burger--page"
              setActive={setActive}
              active={active}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderPages;
