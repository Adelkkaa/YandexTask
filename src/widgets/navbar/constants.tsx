import { HiHome, HiUser } from "react-icons/hi2";

type NavItem = {
  name: string;
  path: string;
  icon: JSX.Element;
};

export const navData: NavItem[] = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "history", path: "/history", icon: <HiUser /> },
];
