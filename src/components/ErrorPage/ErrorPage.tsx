import { Typography } from "@/shared/ui/typography";
import Link from "next/link";
import React from "react";

export const ErrorPage = () => {
  return (
    <div className="container flex flex-col items-start gap-[32px] justify-center h-[100vh] ">
      <Typography variant="h3">Данной страницы не существует...</Typography>
      <Link
        href="/"
        className="w-[200px] h-[100px] mb:max-tb:h-[50px] text-center rounded-[10%]  hover:text-red-white hover:border-red-white transition-all duration-300 border-[3px] border-solid border-white py-[10px] px-[10px] flex justify-center items-center"
      >
        <Typography variant="titleS">Вернуться на главную</Typography>
      </Link>
    </div>
  );
};
