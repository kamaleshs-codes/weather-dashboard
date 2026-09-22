import React from "react";
import { motion } from "framer-motion";

export const FloatingCard = ({ children, delay = 0 }) => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.020, 1],
      }}
      transition={{
        duration: 2.8,
        delay,
        repeat: Infinity,
        repeatDelay: 4.8,
        ease: "easeInOut",
      }}>
      {children}
    </motion.div>
  );
};
