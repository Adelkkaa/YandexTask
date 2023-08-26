import { useBreakpoint } from "@/shared/hooks/useBreakpoint";
import { MTypography } from "@/shared/ui/typography";
import { Variants, motion } from "framer-motion";
import { useRef } from "react";

const ScaleVariants: Variants = {
  initial: ({ scale, fontSize, translateY = 0, translateX = 0 }) => ({
    // scale: 1,
    fontSize: `${fontSize}px`,
    y: 0,
    x: 0,
  }),
  animate: ({ scale, fontSize, translateY = 0, translateX = 0 }) => {
    const color = scale !== 1 ? "#FFFFFF" : "rgba(255,255,255,0.4)";
    const font = scale !== 1 ? fontSize * scale : fontSize;
    return {
      // scale: scale,
      fontSize: `${font}px`,
      color: color,
      y: translateY,
      x: translateX,
      transition: {
        duration: 0.5,
      },
    };
  },
};

type SlideProps = {
  item: {
    mounth: string;
    year: string;
    photo: string;
    title: string;
    description: string;
  };
  activeSlide: number;
  setActiveSlide: (arg: number) => void;
  index: number;
};

export const MyDatesSlide = ({
  item,
  index,
  activeSlide,
  setActiveSlide,
}: SlideProps) => {
  const widthRef = useRef<HTMLElement>(null);
  const { isLaptop, isDesktop, isMobile } = useBreakpoint();
  const scale = isMobile ? 3.91 : 5;
  const fontSize = isDesktop ? 40 : isLaptop ? 28 : 24;

  const titleTranslateY = isDesktop ? -85 : isLaptop ? -60 : -40;
  const yearTranslateY = isDesktop ? 76 : isLaptop ? 52 : 42;
  return (
    <motion.div
      // animate={
      //   activeSlide === index && widthRef.current !== null
      //     ? {
      //         width: `${widthRef.current.clientWidth * 5}px`,
      //       }
      //     : { width: `auto`, marginRight: 0 }
      // }
      // animate={{ width: `auto`, marginRight: 0 }}
      // transition={{ duration: 0.5 }}
      className={`flex flex-col items-start select-none`}
      style={
        isDesktop
          ? { marginRight: "64px" }
          : isLaptop
          ? { marginRight: "38px" }
          : { marginRight: "24px" }
      }
    >
      <MTypography
        className={`${
          activeSlide === index && "dk:ml-[12px] tb:ml-[3px] mb:ml-[3px]"
        }`}
        initial={{ y: 0, color: "rgba(255,255,255,0.4)" }}
        animate={
          activeSlide === index
            ? index % 2 !== 0
              ? { y: titleTranslateY, color: "#FFFFFF" }
              : { color: "#FFFFFF" }
            : { y: 0, color: "rgba(255,255,255,0.4)" }
        }
        transition={
          activeSlide === index ? { duration: 0.5 } : { duration: 0.5 }
        }
        variant="titleY"
      >
        {item.year.length < 7 ? item.mounth : <br />}
      </MTypography>
      <MTypography
        variant="titleX"
        ref={widthRef}
        initial="initial"
        animate="animate"
        variants={ScaleVariants}
        custom={
          activeSlide === index
            ? index % 2 === 0
              ? {
                  scale: scale,
                  fontSize: fontSize,
                  translateY: yearTranslateY,
                }
              : {
                  scale: scale,
                  fontSize: fontSize,
                }
            : { scale: 1, fontSize: fontSize }
        }
        className={`tb:max-dk:text-titleL mb:max-tb:text-titleM whitespace-nowrap ${
          index % 2 !== 0 ? "textBottomSlide" : "textSlide"
        } ${
          activeSlide === index
            ? index % 2 !== 0
              ? "activeBottomTextSlide dk:leading-[39px] tb:max-dk:leading-[27px] mb:max-tb:leading-[27px]"
              : "activeTextSlide dk:leading-[39px] tb:max-dk:leading-[27px] mb:max-tb:leading-[27px]"
            : ""
        }`}
      >
        {item.year}
      </MTypography>
    </motion.div>
  );
};
