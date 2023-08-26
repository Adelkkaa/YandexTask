import React from "react";
import { motion } from "framer-motion";
import { childVariants, containerVariants } from "./variants";
import { MTypography } from "@/shared/ui/typography";
import { history } from "./constants";

export const History = () => {
  const words = history.split(" ");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3.2, ease: "easeInOut" }}
      className="border-[1px] p-[10px] mb:max-tb:h-[40%] tb:h-[400px] overflow-y-auto relative z-[9] customScrollbar"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="overflow-hidden flex flex-wrap"
      >
        {words.map((item, index) => (
          <MTypography
            variants={childVariants}
            className="mr-[10px]"
            key={index}
            variant="textX"
            as="span"
          >
            {item}
          </MTypography>
        ))}
      </motion.div>
    </motion.div>
  );
};
