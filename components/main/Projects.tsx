import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motions";
import Tooltip from "@/components/ui/tooltip";

const Projects = () => {
  return (
    <section
    className="flex flex-col items-center justify-center pb-20 px-4 md:px-20"
      id="projects"
    >
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box mb-[20px] py-[8px] px-[7px] border border-[#0080BF] opacity-[0.9]"
      >
        <h1 className="Welcome-text text-[13px] mr-[10px]  ml-[10px]">
          My Projects
        </h1>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 px-2 md:px-10 z-20">
        <div className="relative">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-teal-500 to-blue-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <CardContainer className="inter-var ">
            <CardBody className="bg-[#121827] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-100 dark:text-white"
              >
                Tele-ObGyn
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-200 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                It aims to make it easier for women to have a quick consultation
                with the OB/GYN.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/TeleObGyn.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href=""
                  target="__blank"
                  className="px-4 py-2"
                >
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3">
                    <Image
                      src="/java-script.png"
                      alt=""
                      width={16}
                      height={16}
                    ></Image>
                  </span>
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3">
                    <Image src="/ant.png" alt="" width={16} height={16}></Image>
                  </span>
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3">
                    <Image
                      src="/react.png"
                      alt=""
                      width={16}
                      height={16}
                    ></Image>
                  </span>
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3">
                    <Image
                      src="/node.png"
                      alt=""
                      width={16}
                      height={16}
                    ></Image>
                  </span>

                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3">
                    <Image
                      src="/express.png"
                      alt=""
                      width={16}
                      height={16}
                    ></Image>
                  </span>
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black text-xs font-bold"
                >
                  <a href="https://github.com/GodRard/Tele-ObGyn-Final.git">
                    Github Repo
                  </a>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
        <div className="relative">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-teal-500 to-blue-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <CardContainer className="inter-var ">
            <CardBody className="bg-[#121827] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-100 dark:text-white"
              >
                Personal Portfolio
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-200 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Web developer and designer portfolio. Created with NextJS,
                TailwindCSS, Framer Motion, and Aceternity UI.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/portfolio.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="/"
                  target="__blank"
                  className="px-4 py-2"
                >
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3">
                    <Image
                      src="/typescript.png"
                      alt=""
                      width={16}
                      height={16}
                    ></Image>
                  </span>

                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3">
                    <Image
                      src="/next.png"
                      alt=""
                      width={16}
                      height={16}
                    ></Image>
                  </span>
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3">
                    <Image
                      src="/tailwind.png"
                      alt=""
                      width={16}
                      height={16}
                    ></Image>
                  </span>
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black text-xs font-bold"
                >
                  <a href="https://github.com/GodRard/Arduon-Dev-Portfolio.git">
                    Github Repo
                  </a>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
        <div className="relative">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-teal-500 to-blue-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <CardContainer className="inter-var ">
            <CardBody className="bg-[#121827] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-100 dark:text-white"
              >
                NexShop
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-200 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Multi-vendor e-commerce web application.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/nexshop.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href=""
                  target="__blank"
                  className="px-4 py-2"
                >
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3">
                    <Image
                      src="/typescript.png"
                      alt=""
                      width={16}
                      height={16}
                    ></Image>
                  </span>
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3">
                    <Image
                      src="/next.png"
                      alt=""
                      width={16}
                      height={16}
                    ></Image>
                  </span>
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3">
                    <Image
                      src="/tailwind.png"
                      alt=""
                      width={16}
                      height={16}
                    ></Image>
                  </span>

                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3">
                    <Image
                      src="/prisma.png"
                      alt=""
                      width={16}
                      height={16}
                    ></Image>
                  </span>
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-white dark:bg-white dark:text-black text-black text-xs font-bold"
                >
                  <a href="https://github.com/GodRard/NexShop-Admin.git">
                    Github Repo
                  </a>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
  );
};

export default Projects;
