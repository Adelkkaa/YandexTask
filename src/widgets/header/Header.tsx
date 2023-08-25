import { Typography } from "@/shared/ui/typography";
import React from "react";
import { headerData } from "./constants";

export const Header = () => {
  return (
    <div className="flex items-center justify-between px-[16px] py-[23px] h-[40px] relative z-[1000]">
      <Typography className="select-none deepshadow" variant={"titleM"}>
        SharipovAS
      </Typography>
      <div className="flex items-center gap-[16px]">
        {headerData.map((item) => (
          <a
            key={item.name}
            href={item.path}
            target="_blank"
            className="cursor-pointer text-[32px]"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
