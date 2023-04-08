import React from "react";

import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.3,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedSubHeading = ({ text, className = "" }) => {
  return (
    <div
      className={`w-[90%] mx-auto py-1 mt-4 px-4 sm:py-0 items-center justify-center text-center overflow-hidden dark:text-light`}
    >
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={`${className} inline-block w-full text-dark 
         text-[1.2rem] dark:text-light `}
      >
        {text.split(" ").map((word, i) => {
          return (
            <motion.span
              variants={singleWord}
              className="inline-block dark:text-light"
              key={word + "-" + i}
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
};

export default AnimatedSubHeading;
