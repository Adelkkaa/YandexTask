import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInnovationVideoPlay } from "@/shared/hooks/useInnovationVideoPlay";
import cn from "classnames";
import { PlayButton } from "./ui/playButton";
import { MTypography, Typography } from "@/shared/ui/typography";
import { Button } from "@/shared/ui/button";
import { fadeIn } from "@/shared/animation";

export const Trick = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { playFullScreen } = useInnovationVideoPlay(videoRef);
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    setIsRender(true);
  }, []);

  return (
    <div className="container">
      <div className="flex items-center justify-between tb:my-[16px] mb:my-[8px]">
        <Typography className="relative overflowX-hidden " variant="h3">
          <MTypography variant="h3" as={"span"}>
            CSS ФИШКА
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
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex"
        >
          <Button
            href="/star"
            src="/trick/star.png"
            alt="star"
            linkClassName="mb:max-tb:max-w-[85px] mb:max-tb:max-h-[85px]"
            imageClassName="mb:max-tb:max-w-[85px] mb:max-tb:max-h-[85px]"
          />
        </motion.div>
      </div>
      <motion.div
        onClick={playFullScreen}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
        className={cn(
          "tb:mt-[18px] mb:mt-9 dk:my-0 flex justify-center items-center",
          "relative w-[100%] dk:max-w-[1344px] tb:max-w-[880px] mb:max-w-[375px] mx-auto",
          "dk:h-[619px] tb:h-[405px] mb:h-[356px]"
        )}
      >
        <video
          ref={videoRef}
          src="/trick/css-trick.mkv"
          className="w-[100%] h-[100%] object-cover absolute"
        ></video>
        <div className="relative inline-block">
          <PlayButton />
        </div>
      </motion.div>
    </div>
  );
};
