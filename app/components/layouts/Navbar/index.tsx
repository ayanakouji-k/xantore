import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Menu, MenuProps } from "antd";
import Link from "next/link";
import clsx from "clsx";
import { MdClear } from "react-icons/md";

import { routes } from "../routes";
import { selectNavbar } from "../../../redux/navbar/navbar.selectors";

import { isNavbarShow } from "../../../redux/navbar/navbar.slice";
import { useAppDispatch, useAppSelector, useResponsive } from "../../../hooks";

import logo from "../../../assets/images/logo.png";
import styles from "./navbar.module.scss";

const Navbar: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { navShow } = useAppSelector(selectNavbar);
  const [isNavShow, setIsNavShow] = React.useState(false);
  const { isMobile } = useResponsive(992);
  const onClick: MenuProps["onClick"] = (e) => {
    router.push(e.key);
    if (isMobile) {
      dispatch(isNavbarShow(true));
    }
  };
  React.useEffect(() => {
    setIsNavShow(navShow);
  }, [navShow]);
  return (
    <nav className={clsx(styles.navbar, isNavShow && styles.active)}>
      <div className={styles.logo}>
        <Link href="/" className={styles.link}>
          <Image src={logo} width={40} alt="Logo" />
          <h3>Xantore</h3>
        </Link>
        <div style={{ cursor: "pointer", marginTop: 7 }}>
          <MdClear
            onClick={() => dispatch(isNavbarShow(!navShow))}
            color="#7569f0"
            size={25}
          />
        </div>
      </div>
      <div className={styles.menu}>
        <Menu
          mode="inline"
          selectedKeys={[router.pathname]}
          onClick={onClick}
          items={routes}
        />
      </div>
    </nav>
  );
};

export default Navbar;
