import cn from "classnames";
import Image from "next/image";
import { MouseEvent } from "react";

export type Sizes = "lg" | "md" | "sm";

interface Props {
  onClick?: () => void;
}

export const PlayButton = ({ onClick }: Props) => {
  return (
    <button
      type="button"
      aria-label="play-button"
      onClick={() => onClick && onClick}
      className={cn(
        "rounded-full bg-dark/60 active:bg-dark flex justify-center items-center",
        "tb:w-[120px] tb:h-[120px] mb:w-[48px] mb:h-[48px]"
      )}
    >
      <span className="relative tb:ml-[9px] tb:h-[40px] tb:w-[35px] mb:h-[16px] mb:w-[14px]">
        <Image alt="play-button" src="/trick/playIcon.svg" fill />
      </span>
    </button>
  );
};
