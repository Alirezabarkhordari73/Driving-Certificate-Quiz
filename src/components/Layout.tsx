import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import { GoArrowUp } from "react-icons/go";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const ScrollToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="min-h-screen flex flex-col justify-start items-center Background-Image">
      <Header />
      <Banner />
      {children}
      <GoArrowUp
        className="text-[2.5rem] text-[#264b99] cursor-pointer"
        onClick={() => ScrollToTopHandler()}
      />
      <Footer />
    </div>
  );
};

export default Layout;
