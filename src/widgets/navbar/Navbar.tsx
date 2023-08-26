import React from "react";
import { navData } from "./constants";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className="flex flex-col items-center tb:justify-center gap-y-4 fixed h-max bottom-0 mt-auto tb:right-[2%] z-50 top-0 w-full tb:w-16 tb:max-w-md tb:h-screen">
      <div className="flex w-full tb:flex-col items-center justify-between tb:justify-center mb:justify-around gap-y-10 px-4 tb:py-4 mb:max-tb:px-4 dk:px-0 h-[80px] bg-purple-white tb:h-max mb:max-tb:text-titleX text-titleM tb:rounded-full ">
        {navData.map((link, index) => (
          <Link
            className={`${
              link.path === pathname && "text-red-white"
            } relative flex items-center group hover:text-red-white transition-all duration-300`}
            key={link.path}
            href={link.path}
          >
            <div className="absolute pr-14 right-0 hidden tb:group-hover:flex">
              <div className="bg-white relative flex text-purple items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
              </div>
            </div>
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};
