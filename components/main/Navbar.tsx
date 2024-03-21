"use client";

import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";

import FramerMagnetic from "../ui/FramerMagnetic";
import Link from "next/link";
import logo from "@/public/Logo.png";
import { Popover } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  return (
    <Popover className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#77AFFF]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] ">
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src={logo}
            alt="logo"
            width={70}
            height={70}
            placeholder="blur"
            priority
            className="cursor-pointer hover:animate-slowspin"
          />
          <FramerMagnetic>
            <span className="font-bold ml-[10px] hidden md:block text-gray-300">
              Arduon Dev
            </span>
          </FramerMagnetic>
        </Link>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="hidden sm:flex items-center justify-between border w-full h-auto border-[#3388ff85] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <FramerMagnetic>
              <Link href="/" className="cursor pointer">
                About
              </Link>
            </FramerMagnetic>
            <FramerMagnetic>
              <Link href="#skills" className="cursor-pointer">
                Skills
              </Link>
            </FramerMagnetic>
            <FramerMagnetic>
              <Link href="#projects" className="cursor-pointer">
                Projects
              </Link>
            </FramerMagnetic>
            <FramerMagnetic>
              <Link href="#contact" className="cursor-pointer">
                Contact
              </Link>
            </FramerMagnetic>
          </div>
          <div className="flex grow items-center justify-end sm:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md  p-2 text-white  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
              <span className="sr-only">Open menu</span>
              <CgMenuRightAlt className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="rounded-lg bg-[#121827] shadow-lg   divide-gray-50">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <Link href="/" className="h-auto w-auto flex flex-row">
                    <Image
                      src={logo}
                      alt="logo"
                      width={70}
                      height={70}
                      placeholder="blur"
                    />

                    <span className="font-bold ml-[10px] inline-flex items-center justify-center md:block text-gray-300">
                      Arduon Dev
                    </span>
                  </Link>
                  <div className="-mr-2">
                    <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8 text-gray-400">
                    <Link
                      href="/"
                      className="cursor pointer hover:bg-gray-400 hover:text-white rounded-md p-2 "
                    >
                      About
                    </Link>

                    <Link
                      href="#skills"
                      className="cursor-pointer hover:bg-gray-400 hover:text-white rounded-md p-2"
                    >
                      Skills
                    </Link>

                    <Link
                      href="#projects"
                      className="cursor-pointer hover:bg-gray-400 hover:text-white rounded-md p-2"
                    >
                      Projects
                    </Link>

                    <Link
                      href="#contact"
                      className="cursor-pointer hover:bg-gray-400 hover:text-white rounded-md p-2"
                    >
                      Contact
                    </Link>
                  </nav>
                </div>
                <hr className="my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
                <div className="mt-6">
              
                  <div className="grid grid-cols-3 gap-5 w-auto  py-4  ">
                    <button className="bg-[#3A97DD] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                      <a href="https://github.com/GodRard">Github</a>
                    </button>
                    <button className="bg-[#3A97DD] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                      <a href="https://www.linkedin.com/in/gerard-hans-misa-0b5a7198/">Linkedin</a>
                    </button>
                    <button className="bg-[#3A97DD] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                      <a href="https://discordapp.com/users/647474465789444096">Discord</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </div>
        <div className="hidden md:flex md:flex-row gap-5 sm:block">
          {Socials.map((social) => (
            <a href={social.href} className="cursor-pointer" key={social.name}>
              <FramerMagnetic>
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </FramerMagnetic>
            </a>
          ))}
        </div>
      </div>
    </Popover>
  );
};

export default Navbar;
