import { AnimatePresence, Variants, motion } from "framer-motion";
import Image from "next/image";

const variants: Variants = {
  hidden: (custom) => ({ right: custom, opacity: 0 }),
  visible: (custom) => ({ right: 0, opacity: 1 }),
  exiting: (custom) => ({ left: custom, opacity: 0 }),
};
const reverseVariants: Variants = {
  hidden: (custom) => ({ left: custom, opacity: 0 }),
  visible: (custom) => ({ left: 0, opacity: 1 }),
  exiting: (custom) => ({ right: custom, opacity: 0 }),
};

type AnimatedImagesProps = {
  image: string;
  isReverse?: boolean;
  className: string;
  custom: number;
};

export const AnimatedImages = ({
  image,
  isReverse = false,
  className,
  custom,
}: AnimatedImagesProps) => {
  return (
    <div className={className}>
      <AnimatePresence>
        <motion.div
          key={image}
          initial="hidden"
          animate="visible"
          exit="exiting"
          className="absolute inset-0"
          variants={isReverse ? reverseVariants : variants}
          custom={custom}
          transition={{ duration: 0.5 }}
        >
          <Image src={image} alt={image} fill />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
