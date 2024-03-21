"use client";
import React, { useState } from "react";
import ContactForm from "../sub/ContactForm"; 
import { BackgroundBeams } from "../ui/background-beams";

function Contact() {
  return (
    <section
      id="contact"
      className="h-full w-full rounded-lg bg-[#131827] grid grid-cols-1 relative antialiased z-20"
    >
      <div className="max-w-2xl mx-auto p-4 justify-top items-center mt-8">
        <h2 className="font-bold text-lg md:text-4xl text-center text-white">
          CONTACT ME
        </h2>
        <p className="text-neutral-50 text-sm max-w-sm mt-4 text-center">
        If you find my skills an asset to your company, I&apos;d love to hear from you.
        </p>
        <p className="text-neutral-50 text-sm max-w-sm mt-3 text-center">
          Feel free to send me a direct message at gerardhansmisa@gmail.com or in the contact form.
        </p>
      </div>

      <div className="max-w-2xl mx-auto p-4 mb-10 z-30">
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-[#0D101A]">
          <ContactForm/>
        </div>
      </div>
      <BackgroundBeams />
    </section>
  );
}

export default Contact;
