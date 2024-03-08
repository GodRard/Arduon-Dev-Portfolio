"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motions";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#0080BF] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#55D0FF] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] mr-[10px]">
            My Web Developer & Design Portfolio
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
          Developing
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-300"> stellar </span>
          websites for you
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m Gerard Misa, a web developer and designer with a passion for creating
          beautiful and functional websites. I specialize in front-end
          development and design, but I also have experience with back-end
          development and databases. I&apos;m always looking for new
          opportunities to learn and grow as a developer, and I&apos;m excited
          to bring my skills to your team.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>
      <motion.div variants={slideInFromRight(0.8)} className="w-full h-full flex justify-center items-center">
        <Image src="/techStack2.svg" alt="work icons" height={650} width={650}/>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
