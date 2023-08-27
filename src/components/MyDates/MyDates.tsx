import { MyDatesSlide } from "./ui/MyDatesSlide";
import { useBreakpoint } from "@/shared/hooks/useBreakpoint";
import {
  AnimatedImages,
  AnimatedText,
  AnimatedTitle,
} from "@/shared/ui/animated";
import { Typography } from "@/shared/ui/typography";
import cn from "classnames";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { slides } from "./constants";
import { Button } from "@/shared/ui/button";
import { fadeIn } from "@/shared/animation";

export const MyDates = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [currentDate, setCurrentDate] = useState(slides[1]);
  const previosSlideRef = useRef(activeSlide);
  const { isMobile, isLaptop, isDesktop } = useBreakpoint();
  const start = isDesktop
    ? slides[1].dkTranslateX
    : isLaptop
    ? slides[1].tbTranslateX
    : slides[1].mbTranslateX;
  const [isDragging, setIsDragging] = useState(false);
  const [isDisabledChange, setIsDisabledChange] = useState(false);
  const startX = useRef(start);
  const offsetX = useRef(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);

    if (sliderRef.current) {
      startX.current = e.touches[0].pageX - offsetX.current;
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging && sliderRef.current) {
      const x = e.touches[0].pageX - startX.current;
      setIsDisabledChange(true);
      if (
        (isDesktop && x < 180 && x > -1600) ||
        (isLaptop && x < 180 && x > -1100) ||
        (isMobile && x < 20 && x > -1000)
      ) {
        sliderRef.current.style.transform = `translate3d(${x}px, 0, 0)`;
        sliderRef.current.style.transition = "transform 0.1s";
        offsetX.current = x;
      }
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    setTimeout(() => setIsDisabledChange(false), 100);
    setIsDragging(false);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);

    if (sliderRef.current) {
      startX.current = e.pageX - offsetX.current;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && sliderRef.current) {
      const x = e.pageX - startX.current;
      setIsDisabledChange(true);
      if (
        (isDesktop && x < 180 && x > -1600) ||
        (isLaptop && x < 180 && x > -1100) ||
        (isMobile && x < 180 && x > -1100)
      ) {
        sliderRef.current.style.transform = `translate3d(${x}px, 0, 0)`;
        sliderRef.current.style.transition = "transform 0.1s";
        offsetX.current = x;
      }
    }
  };

  const handleMouseUp = () => {
    setTimeout(() => setIsDisabledChange(false), 100);
    setIsDragging(false);
  };
  const onClickSlide = (index: number) => {
    if (sliderRef.current && !isDragging && !isDisabledChange) {
      setActiveSlide(index);
      if (isDesktop) {
        sliderRef.current.style.transform = `translate3d(${slides[index].dkTranslateX}px, 0, 0)`;
        sliderRef.current.style.transition = "transform 0.5s";
        offsetX.current = slides[index].dkTranslateX;
      } else if (isLaptop) {
        sliderRef.current.style.transform = `translate3d(${slides[index].tbTranslateX}px, 0, 0)`;
        sliderRef.current.style.transition = "transform 0.5s";
        offsetX.current = slides[index].tbTranslateX;
      } else if (isMobile) {
        sliderRef.current.style.transform = `translate3d(${slides[index].mbTranslateX}px, 0, 0)`;
        sliderRef.current.style.transition = "transform 0.5s";
        offsetX.current = slides[index].mbTranslateX;
      }
    }
  };

  const translateImages = isDesktop ? 490 : isLaptop ? 356 : 345;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    setCurrentDate(slides[activeSlide]);
  }, [activeSlide, isInView]);

  return (
    <div className="tb:max-dk:py-[16px] mb:max-tb:py-[8px]">
      <section
        ref={ref}
        className="container mb:mb-[10px] flex items-center justify-between"
      >
        <Typography
          variant="h2"
          className="uppercase flex w-full flex-col text-white overflow-hidden tb:max-dk:max-w-[489px] dk:max-w-[900px]"
        >
          <motion.span
            className="flex w-full"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{
              clipPath: isInView ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
            }}
            transition={{ duration: 1 }}
          >
            <span className="mb:max-tb:text-mb_h2 mb:leading-[63px] dk:leading-[89px]">
              История
            </span>
          </motion.span>
          <motion.span
            className="flex w-full"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{
              clipPath: isInView ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
            }}
            transition={{ duration: 1 }}
          >
            <AnimatedTitle
              className="mb:max-tb:text-mb_h2 self-end mb:max-tb:self-start tb:max-dk:pr-[30px] dk:pr-[38px] dk:leading-[96px] tb:max-dk:leading-[76px]"
              isInView={isInView}
              desktop={{ initialX: 0, animatedX: 70 }}
              tablet={{ initialX: 0, animatedX: 54 }}
              delay={1}
            >
              В датах
            </AnimatedTitle>
          </motion.span>
        </Typography>
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex"
        >
          <Button
            href="/trick"
            src="/dates/trick.png"
            alt="trick"
            linkClassName="mb:max-tb:max-w-[85px] mb:max-tb:max-h-[85px]"
            imageClassName="mb:max-tb:max-w-[85px] mb:max-tb:max-h-[85px]"
          />
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.7, ease: "easeInOut", delay: 1 }}
      >
        <div className="dk:max-w-[1440px] tb:max-w-[940px] mb:max-w-[375px] tabs overflow-hidden mx-auto my-0">
          <div
            ref={sliderRef}
            style={{
              width: "100%",
              height: "100%",
              touchAction: "pan-y",
              transform: `translate3d(${
                isDesktop
                  ? slides[1].dkTranslateX
                  : isLaptop
                  ? slides[1].tbTranslateX
                  : slides[1].mbTranslateX
              }px, 0, 0)`,
              willChange: "transform",
            }}
            onPointerDown={(e) =>
              e.pointerType === "mouse" ? handleMouseDown(e) : {}
            }
            onPointerMove={(e) =>
              e.pointerType === "mouse" ? handleMouseMove(e) : {}
            }
            onPointerUp={(e) =>
              e.pointerType === "mouse" ? handleMouseUp() : {}
            }
            onPointerLeave={(e) =>
              e.pointerType === "mouse" ? handleMouseUp() : {}
            }
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
            className="flex max-w-[1440px]"
          >
            {slides.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  previosSlideRef.current = activeSlide;
                  onClickSlide(index);
                }}
                className={cn(
                  `text-white/40 cursor-pointer dk:pb-[72px] dk:w-auto tb:!w-auto tb:pb-[72px] mb:!w-auto mb:max-tb:pb-[37px]
              ${
                index % 2 !== 0 &&
                "dk:pt-[85px] tb:max-dk:pt-[60px] mb:max-tb:pt-[40px]"
              }`
                )}
              >
                <MyDatesSlide
                  item={item}
                  index={index}
                  activeSlide={activeSlide}
                  setActiveSlide={setActiveSlide}
                />
              </div>
            ))}
          </div>
        </div>
        <div
          className={`flex items-start justify-center dk:mt-[16px] tb:max-dk:mt-[-4px] tb:max-dk:ml-[28px] dk:gap-[75px] tb:max-dk:gap-[30px] dk:ml-[-82px] mb:max-tb:flex-col mb:max-tb:items-center mb:max-tb:gap-[24px]`}
        >
          <div>
            <AnimatedImages
              custom={translateImages}
              image={currentDate.photo}
              isReverse={previosSlideRef.current > activeSlide}
              className="relative dk:w-[490px] dk:h-[350px] tb:max-dk:w-[356px] tb:max-dk:h-[176px] mb:max-tb:w-[345px] mb:max-tb:h-[171px]"
            />
          </div>
          <div className="flex flex-col gap-[16px] w-[416px] mb:max-tb:w-[345px] mb:max-tb:gap-[12px]">
            <div className="relative">
              <AnimatedText
                text={currentDate.title}
                variant="titleL"
                className="text-white mb:max-tb:text-titleM"
              />
              <Typography
                variant="titleL"
                className="text-white mb:max-tb:text-titleM opacity-0"
              >
                {currentDate.title}
              </Typography>
            </div>
            <div className="relative">
              {/* mb:max-tb:w-[345px] mb:max-tb:h-[44px] */}
              <AnimatedText
                text={currentDate.description}
                variant="textM"
                className="text-white mb:max-tb:text-textS"
              />
              <Typography
                variant="textM"
                className="text-white mb:max-tb:text-textS"
              >
                {currentDate.description}
              </Typography>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
