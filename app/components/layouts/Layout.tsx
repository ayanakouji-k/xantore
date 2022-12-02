import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

import { selectNavbar } from "../../redux/navbar/navbar.selectors";
import { useAppSelector } from "../../hooks/redux/useAppSelector";

import styles from "./Layout.module.scss";
import clsx from "clsx";

const Layout: React.FC<any> = ({ children }) => {
  const [isShow, setIsShow] = React.useState(true);
  const { navShow } = useAppSelector(selectNavbar);
  const [isNavShow, setIsNavShow] = React.useState(false);
  React.useEffect(() => {
    setIsNavShow(navShow);
  }, [navShow]);
  return (
    <>
      {isShow ? (
        <>
          <div className={clsx(styles.layout, isNavShow && styles.active)}>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
          <Navbar />
        </>
      ) : (
        <>
          <main>{children}</main>
        </>
      )}
    </>
  );
};

export default Layout;
