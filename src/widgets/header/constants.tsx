import { SlSocialVkontakte, SlSocialGithub } from "react-icons/sl";
import { FaTelegram } from "react-icons/fa";

type HeaderItem = {
  name: string;
  path: string;
  icon: JSX.Element;
};

export const headerData: HeaderItem[] = [
  {
    name: "vk",
    path: "https://vk.com/adelsharipov",
    icon: <SlSocialVkontakte />,
  },
  {
    name: "github",
    path: "https://github.com/Adelkkaa",
    icon: <SlSocialGithub />,
  },
  {
    name: "telegram",
    path: "https://t.me/adelkkaa",
    icon: <FaTelegram />,
  },
];
