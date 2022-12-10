import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { TfiAlignLeft } from "react-icons/tfi";
import { BiLogOutCircle } from "react-icons/bi";
import { Badge, Popover } from "antd";

import { isNavbarShow } from "../../../redux/navbar/navbar.slice";
import { selectNavbar } from "../../../redux/navbar/navbar.selectors";

import user from "../../../assets/images/user.png";
import styles from "./header.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { UiButton } from "../../ui";
import { useGetAuthMeQuery } from "../../../redux/index.endpoints";
import { FaShoppingCart } from "react-icons/fa";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { navShow } = useAppSelector(selectNavbar);
  const router = useRouter();

  const token = Cookies.get("token");

  const [open, setOpen] = React.useState(false);

  const { data: authMe, isSuccess } = useGetAuthMeQuery(1, {
    skip: !token,
  });

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  const hide = () => {
    setOpen(false);
  };
  const logOut = () => {
    Cookies.remove("token");
    Cookies.remove("role");
    Cookies.remove("userId");
    router.push("/");
    hide();
  };
  const content = (
    <div>
      <UiButton
        color="crimson"
        onClick={logOut}
        icon={<BiLogOutCircle />}
        text="Выйти из системы"
      />
    </div>
  );
  React.useEffect(() => {
    if (isSuccess) {
      Cookies.set("userId", String(authMe.data.userId));
    }
  }, [isSuccess]);
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
            <h4>{authMe?.data.name}</h4>
            <p>{authMe?.data.role?.toLocaleLowerCase()}</p>
          </div>
          <Image src={user} width={45} alt="User" />
        </div>
      </Popover>
    </div>
  );
};

export default Header;
