"use client";

import Image from "next/image";
import React from "react";
import TypeWriterEffect from "./TypeWriterEffect";

const TypeWriter = () => {
  return (
    <div className="grid md:grid-cols-2 w-full px-0 my-5">
      {/* Left */}
      <div className="flex flex-col gap-5 justify-center p-5">
        <h1 className="lg:text-5xl md:text-4xl text-3xl">
          Get all fatafat <TypeWriterEffect />
        </h1>
        <p className="mdLmt-2 md:my-0 my-10">
          Get all suggestion and expert tips regarding Kolkata Fatafat.{" "}
          <br className="md:block hidden" />
          Join our{" "}
          <a href="#" className="text-green-400 underline">
            Telegram
          </a>{" "}
          for more tips.
        </p>
      </div>
      {/* Right */}
      <div className="w-full p-2 flex justify-end">
        <Image
          src="/hero.avif"
          alt="image"
          width={300}
          height={300}
          className="rounded-md w-auto"
          priority
        />
      </div>
    </div>
  );
};

export default TypeWriter;
