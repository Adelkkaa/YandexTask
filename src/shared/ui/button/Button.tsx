import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { HiArrowRight } from "react-icons/hi2";

type Props = {
  src: string;
  alt: string;
  href: string;
  linkClassName?: string;
  imageClassName?: string;
};

export const Button: React.FC<Props> = ({
  src,
  alt,
  href,
  linkClassName,
  imageClassName,
}) => {
  return (
    <div className="mx-auto tb:mx-0">
      <Link
        className={cn(
          "relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group",
          linkClassName
        )}
        href={href}
      >
        <Image
          src={src}
          alt={alt}
          width={190}
          height={148}
          className={cn(
            "animate-spin-slow  max-w-[190px] max-h-[148px]",
            imageClassName
          )}
        />
        <HiArrowRight className="absolute text-titleM group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};
