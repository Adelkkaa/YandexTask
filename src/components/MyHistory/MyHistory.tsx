import { MTypography, Typography } from "@/shared/ui/typography";
import { ParticlesContainer } from "@/widgets/particles";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/shared/animation";
import { Button } from "@/shared/ui/button";
import { History } from "./ui/history";

export const MyHistory = () => {
  return (
    <div className="h-[100vh]">
      <div className="mb:max-tb:w-[100vw] gap-[16px] flex flex-col justify-center mb:max-tb:justify-start text-left h-full tb:container tb:mx-auto ">
        <div className="flex items-center justify-between mb:max-tb:mt-[32px]">
          <Typography className="relative" variant={"h2"}>
            <MTypography variant="h2" as={"span"}>
              Моя История
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
              transition={{ duration: 3.2, ease: "easeInOut" }}
            />
          </Typography>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden tb:flex relative z-[9]"
          >
            <Button href="/dates" src="/history/myDates.png" alt="history" />
          </motion.div>
        </div>
        <History />
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex tb:hidden relative z-[9]"
        >
          <Button
            linkClassName="mb:max-tb:max-w-[85px] mb:max-tb:max-h-[85px]"
            imageClassName="mb:max-tb:max-w-[85px] mb:max-tb:max-h-[85px]"
            href="/dates"
            src="/history/myDates.png"
            alt="history"
          />
        </motion.div>

        <div className="w-[1200px] h-full select-none absolute right-0 bottom-0 overflowY-hidden">
          <ParticlesContainer />
        </div>
      </div>
    </div>
  );
};
