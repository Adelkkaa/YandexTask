import { Input } from "@/shared/ui/input";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { BiExit } from "react-icons/bi";

type Props = {
  setFlex: (arg: boolean) => void;
};

export const Flex: React.FC<Props> = ({ setFlex }) => {
  const [display, setDisplay] = useState("");
  const [justifyContent, setJustifyContent] = useState("");
  const [alignItems, setAlignItems] = useState("");
  const [finishColor, setFinishColor] = useState("#ff0000");

  useEffect(() => {
    if (
      display === "flex" &&
      justifyContent === "flex-end" &&
      alignItems === "flex-end"
    ) {
      setFinishColor("green");
      toast.success("Поздравляю! Вы справились!");
      setFlex(false);
    }
  }, [display, justifyContent, alignItems, setFlex]);

  return (
    <div className="relative mb:max-tb:pb-[100px] mb:max-dk:flex-col mb:max-dk:gap-[32px] flex items-center justify-start gap-[64px] w-[100vw] h-[100vh]">
      <button
        onClick={() => setFlex(false)}
        className="cursor-pointer absolute top-[10px] right-[10px] hover:text-red-white hover:border-red-white transition-all duration-300 border-[1px] border-solid border-white px-[10px] py-[10px] rounded-[10px] text-titleM"
      >
        <BiExit />
      </button>
      <div
        className="relative border-[3px] mb:max-dk:h-[40%] border-solid border-white w-[50%] h-[70%]"
        style={{
          display: display,
          justifyContent: justifyContent,
          alignItems: alignItems,
        }}
      >
        <Image
          src={"/star/mario.png"}
          width={64}
          height={64}
          alt="mario"
          className="absolute"
        />
        <div
          className="w-[64px] h-[64px] absolute right-0 bottom-0 border-[3px] border-solid"
          style={{ borderColor: finishColor }}
        ></div>
      </div>
      <div className="flex w-[30%] mb:max-dk:w-[100%] mb:max-dk:pr-[32px] flex-col">
        <div className="flex  items-end gap-[32px]">
          <Typography
            className="w-[200px] mb:max-dk:text-textS mb:max-dk:w-[150]"
            variant="textX"
          >
            display:
          </Typography>
          <Input
            value={display}
            onChange={(e) => setDisplay(e.target.value)}
            label="Введите значение"
          />
        </div>
        {display === "flex" && (
          <div className="flex items-end gap-[32px]">
            <Typography
              className="w-[200px] mb:max-dk:text-textS mb:max-dk:w-[150]"
              variant="textX"
            >
              justify-content:
            </Typography>
            <Input
              value={justifyContent}
              onChange={(e) => setJustifyContent(e.target.value)}
              label="Введите значение"
            />
          </div>
        )}
        {display === "flex" && (
          <div className="flex items-end gap-[32px]">
            <Typography
              className="w-[200px] mb:max-dk:text-textS mb:max-dk:w-[150]"
              variant="textX"
            >
              align-items:
            </Typography>
            <Input
              value={alignItems}
              onChange={(e) => setAlignItems(e.target.value)}
              label="Введите значение"
            />
          </div>
        )}
      </div>
    </div>
  );
};
