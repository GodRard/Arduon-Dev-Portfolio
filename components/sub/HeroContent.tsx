"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motions";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import TechStack from "/public/techStack2.svg"

const description = `I am a 4th year BSIT-MWA undergraduate who has a passion for
creating beautiful and functional websites. I specialize in front-end
development and design, but I also have experience with back-end
development and databases. I am always looking for new
opportunities to learn and grow as a developer, and I am excited
to bring my skills to your company.`;

const HeroContent = () => {
  const [role] = useTypewriter({
    words: ["Web Developer", "Web Designer", "Frontend Developer"],
    loop: false,
    typeSpeed: 150,
  });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col sm:flex-row items-center justify-center px-4 sm:px-20 mt-[200px] h-auto w-auto z-[20] mb-20 mx-20"
    >
      <div
        data-scroll
        data-scroll-speed=".5"
        className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start"
      >
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
          className="flex flex-col gap-6 text-5xl font-bold text-white max-w-[600px] sm:w-full h-auto"
        >
          <span>
            <span className="text-2xl ml-1 text-gray-200">Hi, I am</span> <br />
            Gerard Misa
            <br /> a {""}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-300">
              {role}
              <br />
            </span>
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-300 my-3 max-w-[600px]"
        >
          {description}
        </motion.p>

        <motion.a
          download
          href="/Jr_Web_Programmer_Resume.pdf"
          variants={slideInFromLeft(1)}
          className="py-2 px-8 text-center text-white cursor-pointer rounded-full inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 w-max"
        >
          <span>Resume</span>

          <FiDownload className="w-4 h-4 ml-2" />
        </motion.a>
      </div>
      <motion.div
        data-scroll
        data-scroll-speed=".5"
        variants={slideInFromRight(0.8)}
        className=" w-full sm:w-1/2 justify-center z-[30] items-center hidden md:block"
      >
        <Image
          src={TechStack}
          alt="work icons"
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
