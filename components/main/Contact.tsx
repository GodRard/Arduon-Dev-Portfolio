import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";


function Contact() {
  return (
    <section
      id="contact"
      className="h-[40rem] w-full rounded-lg bg-[#131827] relative flex flex-col items-center justify-center antialiased  z-20"
    >
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact me
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Please contact me directly at gerardhansmisa@gmail or through this
          form.
        </p>
        
      </div>
      <BackgroundBeams />
    </section>
  );
}

export default Contact;
