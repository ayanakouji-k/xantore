import { MenuProps } from "antd";
import { BiHomeAlt, BiStoreAlt } from "react-icons/bi";
import { BsFillInboxesFill } from "react-icons/bs";
import { ImPriceTag } from "react-icons/im";
import { HiUsers } from "react-icons/hi";
import {
  TbShoppingCartPlus,
  TbBuildingFactory,
  TbTruckDelivery,
} from "react-icons/tb";
import { MdDashboardCustomize } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa";
export const routes: MenuProps["items"] = [
  { key: "/home", label: "Главная", icon: <BiHomeAlt /> },
  {
    key: "/warehouse",
    label: "Склад",
    icon: <BiStoreAlt />,
  },
  {
    key: "/product",
    label: "Продукт",
    icon: <BsFillInboxesFill />,
  },
  {
    key: "/production",
    label: "Производства",
    icon: <TbBuildingFactory />,
    children: [
      { label: "Производить", key: "/production/create" },
      { label: "История", key: "/production/history" },
    ],
  },
  {
    key: "/sale",
    label: "Продажа",
    icon: <ImPriceTag />,
    children: [
      { label: "Оплата", key: "/sale/sell" },
      { label: "История", key: "/sale/history" },
    ],
  },
  {
    key: "/employees",
    label: "Поставщик",
    icon: <TbShoppingCartPlus />,
    children: [
      { label: "Поставщики", key: "/employee" },
      { label: "Товары", key: "/employee/ingredients" },
    ],
  },
  {
    key: "/delivery",
    label: "Доставщик",
    icon: <TbTruckDelivery />,
    children: [
      { label: "Подгружать", key: "/delivery/upload" },
      { label: "История", key: "/delivery/history" },
    ],
  },
  {
    key: "/client",
    label: "Клиенты",
    icon: <HiUsers />,
  },
  {
    key: "/users",
    label: "Пользователи",
    icon: <MdDashboardCustomize />,
  },
];
export const routesDriver: MenuProps["items"] = [
  {
    key: "/sale/sell",
    label: "Продажа",
    icon: <ImPriceTag />,
  },
  {
    key: "/delivery/baggage",
    label: "Багаж",
    icon: <FaBriefcase />,
  },
];
