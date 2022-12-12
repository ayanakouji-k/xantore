import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Drawer, Menu, MenuProps } from "antd";
import Link from "next/link";
import { MdClear } from "react-icons/md";
import Cookies from "js-cookie";

import { routes, routesDriver } from "../routes";
import { selectNavbar } from "../../../redux/navbar/navbar.selectors";

import { isNavbarShow } from "../../../redux/navbar/navbar.slice";
import { useAppDispatch, useAppSelector, useResponsive } from "../../../hooks";

import logo from "../../../assets/images/logo.png";
import styles from "./navbar.module.scss";

const rootSubmenuKeys = ["/production", "/sale", "/employees", "/delivery"];

const Navbar: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { navShow } = useAppSelector(selectNavbar);
  const { isMobile } = useResponsive(992);
  const role = Cookies.get("role");

  const [drawer, setDrawer] = React.useState(false);
  const [stateRoute, setStateRoute] = React.useState<any>(null);

  const [openKeys, setOpenKeys] = React.useState([""]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const onClick: MenuProps["onClick"] = (e) => {
    router.push(e.key);
    if (isMobile) {
      dispatch(isNavbarShow(!navShow));
    }
  };
  const onClose = () => {
    dispatch(isNavbarShow(!navShow));
  };
  React.useEffect(() => {
    if (isMobile) {
      setDrawer(!navShow);
    } else {
      setDrawer(navShow);
    }
  }, [navShow, isMobile]);
  React.useEffect(() => {
    if (role === "DRIVER") {
      setStateRoute(routesDriver);
    } else {
      setStateRoute(routes);
    }
  }, [role]);
  return (
    <Drawer
      placement="left"
      width={256}
      onClose={onClose}
      zIndex={200}
      open={drawer}
      mask={isMobile}
    >
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/home" className={styles.link}>
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
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            onClick={onClick}
            items={stateRoute}
          />
        </div>
      </div>
    </Drawer>
  );
};

export default Navbar;
