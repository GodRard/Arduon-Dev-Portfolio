"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motions";

import { TypewriterEffect } from "../ui/typewriter-effect";

const words = [
  {
    text: "Developing",
    className: "text-white text-3xl",
  },
  {
    text: "&",
    className: "text-white text-3xl",
  },
  {
    text: "designing",
    className: "text-white text-3xl",
  },
  {
    text: "apps",
    className: "text-white text-3xl",
  },
  {
    text: "with",
    className: "text-white text-3xl",
  },
  {
    text: "modern",
    className: "text-sky-400 text-3xl",
  },
  {
    text: "technologies",
    className: "text-white text-3xl",
  },
];

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box mb-[20px] py-[8px] px-[7px] border border-[#0080BF] opacity-[0.9]"
      >
        <h1 className="Welcome-text text-[13px] mr-[10px]  ml-[10px]">
          My Skills
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className=" gap-5 text-4xl font-bold text-center text-white sm:max-w-[600px] w-auto h-auto"
      >
        <span>
          <TypewriterEffect words={words} />
        </span>
      </motion.div>
    </div>
  );
};

export default SkillText;
