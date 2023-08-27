import { SlSocialVkontakte, SlSocialGithub } from "react-icons/sl";
import { FaTelegram } from "react-icons/fa";
import { MdOutlineSaveAlt } from "react-icons/md";

type HeaderItem = {
  name: string;
  path: string;
  icon: JSX.Element;
};

export const headerData: HeaderItem[] = [
  {
    name: "vk",
    path: "https://vk.com/adelsharipov",
    icon: (
      <SlSocialVkontakte className="hover:fill-red-white transition-all duration-300 " />
    ),
  },
  {
    name: "github",
    path: "https://github.com/Adelkkaa",
    icon: (
      <SlSocialGithub className="hover:fill-red-white transition-all duration-300 " />
    ),
  },
  {
    name: "telegram",
    path: "https://t.me/adelkkaa",
    icon: (
      <FaTelegram className="hover:fill-red-white transition-all duration-300 " />
    ),
  },
  {
    name: "resume",
    path: "/resume.pdf",
    icon: (
      <MdOutlineSaveAlt className="hover:fill-red-white transition-all duration-300 " />
    ),
  },
];
