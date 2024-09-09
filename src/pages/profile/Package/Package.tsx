import styled from "@emotion/styled";
import ProfileLayout from "../../../layouts/ProfileLayout";
import { Block } from "../../../components/atoms/UI/Block";
import { PackageIcons, PricingIcons } from "../../../components/atoms/Icons";
import { Link } from "react-router-dom";
import { PrimaryButtonStyled } from "../../../components/atoms/UI/Buttons";
import { useState } from "react";
import AllBlock from "../../../components/molecules/Package/AllBlock";
import NotPayBlock from "../../../components/molecules/Package/NotPayBlock";
import PayBlock from "../../../components/molecules/Package/PayBlock";

const Package = () => {
  const [activeTab, setActiveTab] = useState<"all" | "pay" | "notpay">("all");
  return (
    <ProfileLayout title="Мои посылки">
      <div className="title">Мои посылки</div>

      <PackageLink className="flex">
        <Block className="package-card">
          <Link to={"/"}>
            <PackageIcons />
            <div className="subtitle-block">Вызвать выездную группу</div>
          </Link>
        </Block>

        <Block className="package-card">
          <Link to={"/tariff"}>
            <PricingIcons />
            <div className="subtitle-block">Тарифы</div>
          </Link>
        </Block>
      </PackageLink>

      <div className="title">
        Статус доставки: <span className="title--blue">В пути</span>
      </div>

      <PackageTabBar>
        <PrimaryButtonStyled
          style={{
            backgroundColor: activeTab === "all" ? "#02447F" : "#8C8C8C",
          }}
          onClick={() => setActiveTab("all")}
        >
          Все
        </PrimaryButtonStyled>
        <PrimaryButtonStyled
          style={{
            backgroundColor: activeTab === "pay" ? "#02447F" : "#8C8C8C",
          }}
          onClick={() => setActiveTab("pay")}
        >
          Оплаченные
        </PrimaryButtonStyled>
        <PrimaryButtonStyled
          style={{
            backgroundColor: activeTab === "notpay" ? "#02447F" : "#8C8C8C",
          }}
          onClick={() => setActiveTab("notpay")}
        >
          Не оплаченные
        </PrimaryButtonStyled>
      </PackageTabBar>

      {activeTab === "all" && <AllBlock />}
      {activeTab === "pay" && <PayBlock />}
      {activeTab === "notpay" && <NotPayBlock />}
    </ProfileLayout>
  );
};

const PackageLink = styled.div`
  gap: 2rem;

  .package-card {
    max-width: 338px;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &:nth-child(1) {
      color: #8c8c8c;
    }

    &:nth-child(2) {
      background-color: #02447f;
      color: #fff;
    }

    svg {
      margin-bottom: 1.2rem;
    }

    @media(max-width: 1000px) {
        max-width: 50%;
    }

    @media(max-width: 480px) {
        max-width: 100%;
    }
  }

  margin-bottom: 5rem;

  @media(max-width: 480px) {
    display: block;

    .package-card {
        margin-bottom: 1.2rem;
    }

    margin-bottom: 2rem;
}
`;

const PackageTabBar = styled.div`
  display: flex;
  gap: 0.8rem;

  button {
    border-radius: 25px;

    transition: background-color 0.2s linear;

    @media(max-width: 480px) {
        width: 100%;
        padding-inline: .2rem;
        font-size: 1.2rem;
        padding-block: 1rem;
    }
  }
`;

export default Package;
