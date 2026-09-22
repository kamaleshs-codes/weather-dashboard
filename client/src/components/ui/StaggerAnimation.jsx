import React from "react";
import { motion } from "framer-motion";

export const StaggerAnimation = ({ children, className = "" }) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.45,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}>
      {React.Children.map(children, (child) => (
        <motion.div className='h-full' variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};
