import { MTypography, Typography } from "@/shared/ui/typography";
import React from "react";
import { Button } from "@/shared/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/shared/animation";
import { Avatar } from "./ui/avatar";
import { ParticlesContainer } from "../../widgets/particles";

export const HomePage = () => {
  return (
    <div className="h-[100vh]">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center gap-[16px] flex flex-col justify-center tb:pt-[3rem] tb:text-left h-full container mx-auto ">
          <Typography className="relative overflowX-hidden" variant="h3">
            <MTypography variant="h3" as={"span"}>
              Привет! <br />
              Меня Зовут
              <br />
              <span className="text-red-white">Шарипов Адель</span>
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
          <Typography
            className="max-w-sm tb:max-w-[500px] mx-auto tb:mx-0 mb-10 tb:mb-16 relative overflowX-hidden"
            variant="titleM"
          >
            <MTypography variant="titleM" as={"span"}>
              Сейчас я расскажу вам короткую историю моего становления в
              frontend разработке!
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
          <div className="flex justify-center tb:hidden relative">
            <Button
              href="/history"
              src="/homePage/myHistory.png"
              alt="history"
            />
          </div>

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden tb:flex"
          >
            <Button
              href="/history"
              src="/homePage/myHistory.png"
              alt="history"
            />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0 overflowY-hidden">
        <ParticlesContainer />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3, ease: "easeInOut" }}
          className="w-full h-full max-w-[300px] max-h-[647px] absolute bottom-0 right-[104px]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};
