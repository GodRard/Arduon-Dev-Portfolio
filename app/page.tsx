"use client";

import HeroContent from "@/components/sub/HeroContent";
import Skills from "../components/main/Skills";

import Contact from "../components/main/Contact";
import Project from "../components/main/Projects";

import { useEffect, useState } from "react";

export default function Home() {
  
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main>
      <div className="relative flex flex-col h-full w-full">
        <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[-470px] left-0 z-[1] w-full h-auto object-cover"
          
        >
          <source src="/bluehole.webm" type="video/webm"></source>
        </video>

        <HeroContent />
        <Skills />
        <Project />
        <Contact />
      </div>
    </main>
  );
}
