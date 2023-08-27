import { useWindowSize } from "@/shared/hooks/useWindowSize";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from "react-icons/ai";

type Props = {
  setMario: (arg: boolean) => void;
};

export const Mario: React.FC<Props> = ({ setMario }) => {
  const [right, setRight] = useState(0);
  const [left, setLeft] = useState(1);
  const [top, setTop] = useState(1);
  const [bottom, setBottom] = useState(0);
  const marioRef = useRef<HTMLImageElement>(null);
  const firstRender = useRef(true);

  const [direction, setDirection] = useState("");
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (firstRender.current) {
      toast.success("Доведите Марио в нужную локацию!");
      firstRender.current = false;
    }

    const interval = setInterval(() => {
      if (
        marioRef &&
        marioRef.current &&
        marioRef.current.getBoundingClientRect().x < width / 2 + 50 &&
        marioRef.current.getBoundingClientRect().x > width / 2 - 50 &&
        marioRef.current.getBoundingClientRect().y < height / 2 + 50 &&
        marioRef.current.getBoundingClientRect().y > height / 2 - 50 &&
        direction !== ""
      ) {
        setDirection("");
        toast.success("Вы победили");
        toast.success("Данная игра была сделана при помощи JavaScript");

        setMario(false);
      }
      direction === "left" && right < left && setRight((prev) => prev + 10);
      direction === "right" &&
        left - right < width - 100 &&
        setLeft((prev) => prev + 10);
      direction === "top" &&
        top - bottom < height &&
        setTop((prev) => prev + 10);
      direction === "bottom" && bottom < top && setBottom((prev) => prev + 10);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [direction, right, width, left, top, bottom, height, setMario]);

  const handleClickLeft = () => {
    setDirection("right");
  };
  const handleClickRight = () => {
    setDirection("left");
  };
  const handleClickTop = () => {
    setDirection("bottom");
  };
  const handleClickBottom = () => {
    setDirection("top");
  };

  return (
    <div className="relative flex items-center justify-center w-[100vw] h-[100vh]">
      <Image
        src={"/star/mario.png"}
        width={128}
        height={128}
        alt="mario"
        className="absolute"
        ref={marioRef}
        style={{
          right: `${left - right}px`,
          top: `${top - bottom}px`,
        }}
      />
      <button
        onClick={() => setMario(false)}
        className="cursor-pointer absolute top-[10px] left-[10px] hover:text-red-white hover:border-red-white transition-all duration-300 border-[1px] border-solid border-white px-[10px] py-[10px] rounded-[10px] text-titleM"
      >
        Выйти
      </button>
      <div className=" w-[200px] h-[200px] border-[1px] border-solid border-white flex items-center justify-center">
        Come Here
      </div>
      <button
        className="absolute bottom-[340px] right-[200px] text-[32px] rounded-full border-[1px] cursor-pointer"
        onClick={handleClickTop}
      >
        <AiOutlineArrowUp
          className={direction === "bottom" && "text-red-white"}
        />
      </button>
      <button
        className="absolute bottom-[290px] right-[200px] text-[32px] rounded-full border-[1px] cursor-pointer"
        onClick={handleClickBottom}
      >
        <AiOutlineArrowDown
          className={direction === "top" && "text-red-white"}
        />
      </button>
      <button
        className="absolute bottom-[315px] right-[240px] text-[32px] rounded-full border-[1px] cursor-pointer"
        onClick={handleClickLeft}
      >
        <AiOutlineArrowLeft
          className={direction === "right" && "text-red-white"}
        />
      </button>
      <button
        className="absolute bottom-[315px] right-[160px] text-[32px] rounded-full border-[1px] cursor-pointer"
        onClick={handleClickRight}
      >
        <AiOutlineArrowRight
          className={direction === "left" && "text-red-white"}
        />
      </button>
    </div>
  );
};
