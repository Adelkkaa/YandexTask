import { HiHome, HiUser, HiVideoCamera } from "react-icons/hi2";
import { BsCalendar } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";

type NavItem = {
  name: string;
  path: string;
  icon: JSX.Element;
};

export const navData: NavItem[] = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "history", path: "/history", icon: <HiUser /> },
  { name: "dates", path: "/dates", icon: <BsCalendar /> },
  { name: "css-trick", path: "/trick", icon: <HiVideoCamera /> },
  { name: "star-task", path: "/star", icon: <AiOutlineStar /> },
];
