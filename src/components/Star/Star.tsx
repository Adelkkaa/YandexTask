import React, { useState } from "react";
import { motion } from "framer-motion";

import { Mario } from "./ui/Mario";
import { MTypography, Typography } from "@/shared/ui/typography";
import { Flex } from "./ui/Flex";

export const Star = () => {
  const [mario, setMario] = useState(false);
  const [flex, setFlex] = useState(false);
  return (
    <>
      {!mario && !flex && (
        <div className="container flex flex-col gap-[32px] mt-[64px] items-center justify-center text-center">
          <Typography className="relative overflowX-hidden " variant="h3">
            <MTypography variant="h3" as={"span"}>
              JavaScript оживляет страницу
            </MTypography>
            <motion.span
              className="absolute bg-purple inset-0"
              style={{
                clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
              {...{
                initial: { left: "-20%" },
                animate: { left: "100%" },
              }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </Typography>
          <button
            onClick={() => setMario(true)}
            className="cursor-pointer w-[330px] hover:text-red-white hover:border-red-white transition-all duration-300 border-[1px] border-solid border-white px-[10px] py-[10px] rounded-[10px] text-titleM"
          >
            Поиграть в Марио
          </button>
          <button
            onClick={() => setFlex(true)}
            className="cursor-pointer  w-[330px] hover:text-red-white hover:border-red-white transition-all duration-300 border-[1px] border-solid border-white px-[10px] py-[10px] rounded-[10px] text-titleM"
          >
            Попробовать активность
          </button>
        </div>
      )}
      {mario && <Mario setMario={setMario} />}
      {flex && <Flex setFlex={setFlex} />}
    </>
  );
};
