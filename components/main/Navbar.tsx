import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";

import FramerMagnetic from "../ui/FramerMagnetic";
import Link from "next/link";


const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#77AFFF]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] ">
        <Link
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/Logo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <FramerMagnetic>
            <span className="font-bold ml-[10px] hidden md:block text-gray-300">
              Arduon Dev
            </span>
          </FramerMagnetic>
        </Link>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between border w-full h-auto border-[#3388ff85] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
             
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
        </div>
        <div className="flex flex-row gap-5">
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
    </div>
  );
};

export default Navbar;
