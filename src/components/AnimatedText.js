import React from "react";

import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
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

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div
      className={`w-full mx-auto py-2 sm:py-0 items-center justify-center text-center overflow-hidden dark:text-light`}
    >
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={`${className} inline-block w-full text-dark font-bold capitalize
         text-6xl dark:text-light `}
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

export default AnimatedText;
