import { ReactNode } from "react";
import Head from "../utlis/Head";
import Footer, { FooterMobile } from "../components/organisms/Footer";
import { useLocation } from "react-router-dom";
import LTLMap from "../components/molecules/LTL/LTLMap";
import Layouts from "./Layouts";

interface ILayouts {
  title?: string;
  children?: ReactNode;
  className?: string;
}

const MainLayouts = ({ title, children, className }: ILayouts) => {
  const local = useLocation();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Layouts />

      <div className={`section ${className || ""}`}>
        <div className="container">{children}</div>

        {local.pathname === "/ltl" && <LTLMap />}
      </div>

      <Footer />
      <FooterMobile />
    </>
  );
};

export default MainLayouts;
