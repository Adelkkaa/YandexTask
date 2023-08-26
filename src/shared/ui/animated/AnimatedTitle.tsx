import cn from "classnames";
import { motion } from "framer-motion";

interface Props {
  children: any;
  desktop: {
    initialX: number;
    animatedX?: number;
  };
  tablet?: {
    initialX: number;
    animatedX?: number;
  };
  mobile?: {
    initialX: number;
    animatedX?: number;
  };
  className?: string;
  isInView?: boolean;
  delay?: number;
  duration?: number;
}

export const AnimatedTitle = ({
  children,
  desktop,
  tablet,
  mobile,
  className,
  isInView,
  delay,
  duration,
}: Props) => {
  return (
    <>
      <motion.span
        initial={{ x: desktop.initialX }}
        className={cn("mb:max-dk:hidden dk:visible", className)}
        {...(isInView
          ? { animate: { x: isInView ? desktop.animatedX || 0 : 0 } }
          : { whileInView: { x: desktop.animatedX ?? 0 } })}
        transition={{
          duration: duration ?? 0.7,
          ease: "easeInOut",
          delay: delay ?? 0,
        }}
        viewport={{ once: true, amount: 0.8 }}
      >
        {children}
      </motion.span>
      {tablet && (
        <motion.span
          initial={{ x: tablet.initialX }}
          className={cn("mb:max-tb:hidden tb:visible dk:hidden", className)}
          {...(isInView
            ? { animate: { x: isInView ? tablet?.animatedX || 0 : 0 } }
            : { whileInView: { x: tablet?.animatedX ?? 0 } })}
          viewport={{ once: true }}
          transition={{
            duration: duration ?? 0.7,
            ease: "easeInOut",
            delay: delay ?? 0,
          }}
        >
          {children}
        </motion.span>
      )}
      <motion.span
        initial={{ x: mobile?.initialX ?? 0 }}
        className={cn("visible tb:hidden", className)}
        {...(isInView
          ? { animate: { x: isInView ? mobile?.animatedX || 0 : 0 } }
          : { whileInView: { x: mobile?.animatedX ?? 0 } })}
        viewport={{ once: true }}
        transition={{
          duration: duration ?? 0.7,
          ease: "easeInOut",
          delay: delay ?? 0,
        }}
      >
        {children}
      </motion.span>
    </>
  );
};
