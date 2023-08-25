import { motion } from "framer-motion";
import React, { ElementType, forwardRef } from "react";

export type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "titleX"
  | "titleY"
  | "titleL"
  | "titleM"
  | "titleS"
  | "textX"
  | "textM"
  | "textS"
  | "caption12"
  | "textButton"
  | "textButtonCaps";

interface Props {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  as?: ElementType;
}

const tags: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  titleX: "p",
  titleY: "p",
  titleL: "p",
  titleM: "p",
  titleS: "p",
  textX: "p",
  textM: "p",
  textS: "p",
  textButton: "p",
  textButtonCaps: "p",
  caption12: "p",
};

const sizes: Record<Variant, string> = {
  h1: "dk:text-h1 tb:text-tb_h1 mb:text-mb_h1",
  h2: "dk:text-h2 tb:text-tb_h2 mb:text-mb_h2",
  h3: "dk:text-h3 tb:text-tb_h3 mb:text-mb_h3",
  titleX: "text-titleX",
  titleY: "text-titleY",
  titleL: "text-titleL",
  titleM: "text-titleM",
  titleS: "text-titleS",
  textX: "text-textX",
  textM: "text-textM",
  textS: "text-textS",
  caption12: "text-caption12",
  textButton: "text-textButton",
  textButtonCaps: "text-textButtonCaps",
};

export const Typography = forwardRef<any, Props>(function ForwardTypography(
  { variant, children, className, as, onClick },
  ref
) {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];

  return (
    <Tag
      onClick={() => onClick?.()}
      ref={ref}
      className={`${sizeClasses} ${className}`}
    >
      {children}
    </Tag>
  );
});

export const MTypography = motion(Typography);
