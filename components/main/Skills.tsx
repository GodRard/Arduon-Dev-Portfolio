"use client";

import React from "react";
import SkillText from "../sub/SkillText";
import { Meteors } from "../ui/meteors";

import Image from "next/image";

const Skills = () => {
  return (
    <section
      data-scroll
      data-scroll-speed=".7"
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full w-full relative overflow-hidden  pt-20 z-20 "
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />
      <div className="grid grid-cols-2 gap-14 mt-5">
        <div className="flex-1 relative">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-teal-500 to-blue-500 transform scale-[0.80] bg-red-500 rounded-full blur-2xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-top items-center">
            <h2 className="text-center text-white text-xl font-bold mb-4">
              Frontend
            </h2>
            <div className="flex justify-center space-x-3 m-2 ">
              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image
                  src="/java-script.png"
                  alt=""
                  width={16}
                  height={16}
                ></Image>
                Javascript
              </span>

              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image src="/html.png" alt="" width={16} height={16}></Image>
                HTML
              </span>

              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image src="/css.png" alt="" width={16} height={16}></Image>
                CSS
              </span>
            </div>
            <div className="flex justify-center space-x-3 m-2">
              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image
                  src="/tailwind.png"
                  alt=""
                  width={16}
                  height={16}
                ></Image>
                Tailwind CSS
              </span>
              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image src="/react.png" alt="" width={16} height={16}></Image>
                ReactJS
              </span>
              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image
                  src="/materialui.png"
                  alt=""
                  width={16}
                  height={16}
                ></Image>
                Material UI
              </span>
            </div>
            <div className="flex justify-center space-x-3 m-2 ">
              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image src="/next.png" alt="" width={16} height={16}></Image>
                NextJS
              </span>
              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image src="/ant.png" alt="" width={16} height={16}></Image>
                ANT Design
              </span>
            </div>
            <div className="flex justify-center space-x-3 m-2">
              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image
                  src="/typescript.png"
                  alt=""
                  width={16}
                  height={16}
                ></Image>
                Typescript
              </span>
            </div>
            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-2xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-top items-center">
            <h2 className="text-center text-white text-xl font-bold mb-4">
              Backend
            </h2>
            <div className="flex justify-center space-x-3 m-2 ">
              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image src="/mongodb.png" alt="" width={16} height={16}></Image>
                MongoDB
              </span>

              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image src="/node.png" alt="" width={16} height={16}></Image>
                NodeJS
              </span>
              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image src="/mysql.png" alt="" width={16} height={16}></Image>
                MySQL
              </span>
            </div>
            <div className="flex justify-center space-x-3 m-2">
              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image src="/python.png" alt="" width={16} height={16}></Image>
                Python
              </span>
              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image src="/express.png" alt="" width={16} height={16}></Image>
                ExpressJS
              </span>
            </div>
            <div className="flex justify-center space-x-3 m-2">
              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image src="/prisma.png" alt="" width={16} height={16}></Image>
                Prisma
              </span>
            </div>
            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-2xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-top items-center">
            <h2 className="text-center text-white text-xl font-bold mb-4">
              Mobile
            </h2>
            <div className="flex justify-center space-x-3 m-2 ">
              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image src="/kotlin.png" alt="" width={16} height={16}></Image>
                Kotlin
              </span>

              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image src="/xml.png" alt="" width={16} height={16}></Image>
                XML
              </span>
              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image src="/dart.png" alt="" width={16} height={16}></Image>
                Dart
              </span>
            </div>
            <div className="flex justify-center space-x-3 m-2">
              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image src="/android.png" alt="" width={16} height={16}></Image>
                Android Studio
              </span>
            </div>
            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-2xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-top items-center">
            <h2 className="text-center text-white text-xl font-bold mb-4">
              Others
            </h2>
            <div className="flex justify-center space-x-3 m-2 ">
              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image src="/vscode.png" alt="" width={16} height={16}></Image>
                VS Code
              </span>

              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image src="/wix.png" alt="" width={16} height={16}></Image>
                Wix
              </span>
              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image src="/github1.png" alt="" width={16} height={16}></Image>
                Github
              </span>
            </div>
            <div className="flex justify-center space-x-3 m-2">
              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image src="/flutter.png" alt="" width={16} height={16}></Image>
                Flutter
              </span>
              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image src="/Canva.png" alt="" width={16} height={16}></Image>
                Canva
              </span>
              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image src="/figma.png" alt="" width={16} height={16}></Image>
                Figma
              </span>
            </div>
            <div className="flex justify-center space-x-3 m-2">
              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image
                  src="/photoshop.png"
                  alt=""
                  width={16}
                  height={16}
                ></Image>
                Photoshop
              </span>
              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image src="/xd.png" alt="" width={16} height={16}></Image>
                Adobe XD
              </span>
            </div>
            <div className="flex justify-center space-x-3 m-2">
              <span className="py-2 px-3 inline-flex items-center gap-x-1 text-xs font-medium border rounded-lg border-gray-400 text-white">
                <Image src="/git.png" alt="" width={16} height={16}></Image>
                Git
              </span>
            </div>
            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
