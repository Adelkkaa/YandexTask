import { HiHome, HiUser } from "react-icons/hi2";
import { BsCalendar } from "react-icons/bs";

type NavItem = {
  name: string;
  path: string;
  icon: JSX.Element;
};

export const navData: NavItem[] = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "history", path: "/history", icon: <HiUser /> },
  { name: "dates", path: "/dates", icon: <BsCalendar /> },
];
