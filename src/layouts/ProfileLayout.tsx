import { ReactNode } from "react";
import HeaderPages from "../components/organisms/Headers/HeaderPages";
import Head from "../utlis/Head";
import HeaderLinks from "../components/organisms/Headers/HeaderLinks";
import Footer, { FooterMobile } from "../components/organisms/Footer";
import { Layout } from "../components/atoms/UI/Layout";
import Sidebar from "../components/organisms/Sidebar";
import Layouts from "./Layouts";

interface ILayouts {
  title?: string;
  children?: ReactNode;
  className?: string;
}

const ProfileLayout = ({ title, children, className }: ILayouts) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Layouts />

      <div className={`section ${className}`}>
        <div className="container">
          <Layout>
            <Sidebar />
            <div className="layout">{children}</div>
          </Layout>
        </div>
      </div>

      <Footer />
      <FooterMobile />
    </>
  );
};

export default ProfileLayout;
