import { MTypography } from "../typography";
import { Variant } from "../typography/Typography";
import cn from "classnames";
import { AnimatePresence } from "framer-motion";

export const AnimatedText = ({
  text,
  variant,
  className,
}: {
  text: string;
  variant: Variant;
  className?: string;
}) => {
  return (
    <AnimatePresence>
      <MTypography
        key={text}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        variant={variant}
        className={cn("absolute inset-0", className)}
        as="span"
      >
        {text}
      </MTypography>
    </AnimatePresence>
  );
};
