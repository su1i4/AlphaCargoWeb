import styled from "@emotion/styled";
import {
  ProfileHomeIcons,
  ProfileNotificationIcons,
  ProfilePackageIcons,
} from "../atoms/Icons";
import { Link, useLocation } from "react-router-dom";
import { useMemo } from "react";

const Sidebar = () => {
  const local = useLocation();

  const checkedLocal = useMemo(() => {
    let checkedLocal = {
      main: false,
      dilevery: false,
      notifications: false,
    };

    const localChild = local.pathname.split("/").filter((item) => item !== "");

    localChild.length >= 3 && localChild.pop();

    if (localChild.at(-1) === "main") {
      return { ...checkedLocal, main: true };
    }

    if (localChild.at(-1) === "notification") {
      return { ...checkedLocal, notifications: true };
    }

    if (localChild.at(-1) === "package") {
      return { ...checkedLocal, dilevery: true };
    }

    return checkedLocal;
  }, [local]);

  return (
    <SidebarStyled className="sidebar">
      <div className={`sidebar_page ${checkedLocal.main ? "active" : ""}`}>
        <Link to={"/profile/main"} className="flex gap-1_2 items-center">
          <ProfileHomeIcons />
          <div className="subtitle-block">Главная</div>
        </Link>
      </div>
      <div className={`sidebar_page ${checkedLocal.dilevery ? "active" : ""}`}>
        <Link to={"/profile/package/"} className="flex gap-1_2 items-center">
          <ProfilePackageIcons />
          <div className="subtitle-block">Мои посылки</div>
        </Link>
      </div>
      <div
        className={`sidebar_page ${checkedLocal.notifications ? "active" : ""}`}
      >
        <Link to={"/profile/notification"} className="flex gap-1_2 items-center">
          <ProfileNotificationIcons />
          <div className="subtitle-block">Уведомления</div>
        </Link>
      </div>
    </SidebarStyled>
  );
};

const SidebarStyled = styled.div`
  width: 100%;

  .sidebar_page {
    margin-bottom: 2rem;
    transition: color 0.2s linear;

    &:last-child {
      margin-bottom: 0;
    }

    svg {
      stroke: black;
      transition: stroke 0.2s linear;
    }

    &.active {
      color: #94c325;
      svg {
        stroke: #94c325;
      }
    }

    &:hover {
      color: #94c325;

      svg {
        stroke: #94c325;
      }
    }
  }

  @media (max-width: 1000px) {
    display: flex;
    align-items: center;

    gap: 2rem;

    .sidebar_page {
      margin: 0;
    }

    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    svg {
      width: 15px;
    }

    justify-content: space-between;

    .subtitle-block {
      font-size: 1.3rem;
    }

    .sidebar_page {
      a {
        gap: 0.8rem;
      }
    }
  }
`;

export default Sidebar;
