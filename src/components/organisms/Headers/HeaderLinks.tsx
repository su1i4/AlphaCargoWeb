// import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  getPhoneInLocalStorage,
  getTokenInLocalStorage,
} from "../../../utlis/getTokenLocal";
import { ArrowDownIcons, FlagIcons } from "../../atoms/Icons";
import { PrimaryButton } from "../../atoms/UI/Buttons";
import {
  HeaderBurger,
  HeaderLinksDrop,
  HeaderLinksDropClients,
  HeaderLinksDropFranchise,
  HeaderPage,
} from "./HeaderComponent";
import { Dispatch, SetStateAction, useState } from "react";

interface IProps {
  handleOpenModal?: () => void;
  setActive: Dispatch<SetStateAction<boolean>>;
  active: boolean;
}

const HeaderLinks = ({ handleOpenModal, setActive, active }: IProps) => {
  // const navigate = useNavigate();
  const params = useLocation();
  console.log(active);
  return (
    <header className="header header--shadow">
      <div className="container">
        <div className="header_inner">
          {getTokenInLocalStorage() ? (
            params.pathname === "/franchise" ? (
              <HeaderLinksDropFranchise  active={active}/>
            ) : (
              <HeaderLinksDropClients active={active} />
            )
          ) : (
            <HeaderLinksDrop active={active}/>
          )}
          <HeaderPage className="header--p" />
          <div className="header_lang flex items-center gap-2 header-lang--links">
            <div className="flex items-center gap-1_2 pointer">
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
              // onClick={() => navigate("/profile/main")}
              onClick={handleOpenModal}
            >
              {getTokenInLocalStorage() ? getPhoneInLocalStorage() : "Войти"}
            </PrimaryButton>
          </div>

            <HeaderBurger className="burger--links" />
        </div>
      </div>
    </header>
  );
};

export default HeaderLinks;
