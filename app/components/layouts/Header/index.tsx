import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { TfiAlignLeft } from "react-icons/tfi";
import { BiLogOutCircle } from "react-icons/bi";

import { isNavbarShow } from "../../../redux/navbar/navbar.slice";
import { selectNavbar } from "../../../redux/navbar/navbar.selectors";

import user from "../../../assets/images/user.png";
import styles from "./header.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { Popover } from "antd";
import { UiButton } from "../../ui";
import Cookies from "js-cookie";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const token = Cookies.get("token");

  const [open, setOpen] = React.useState(false);
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const hide = () => {
    setOpen(false);
  };
  const { navShow } = useAppSelector(selectNavbar);
  const onRemoveToken = () => {
    Cookies.remove("token");
    router.push("/");
    hide();
  };
  const content = (
    <div>
      <UiButton
        color="crimson"
        onClick={onRemoveToken}
        icon={<BiLogOutCircle />}
        text="Выйти из системы"
      />
    </div>
  );
  // React.useEffect(() => {
  //   if (!token) {
  //     router.push("/");
  //   }
  // }, [token]);
  return (
    <div className={styles.header}>
      <div
        className={styles.hamburger}
        onClick={() => dispatch(isNavbarShow(!navShow))}
      >
        <TfiAlignLeft fontSize={20} />
      </div>
      <Popover
        open={open}
        placement="bottomRight"
        trigger="click"
        onOpenChange={handleOpenChange}
        content={content}
      >
        <div className={styles.user}>
          <div>
            <h4>Quwanish</h4>
            <p>admin</p>
          </div>
          <Image src={user} width={45} alt="User" />
        </div>
      </Popover>
    </div>
  );
};

export default Header;
