import React from "react";
import { Card } from "@/components/ui/card";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";
export default function Slider() {
  return (
    <div className="my-20 w-full relative flex  flex-row items-center justify-center  rounded-lg  bg-background ">
      <Marquee className="[--duration:60s] ">
        {Array.from({ length: 10 }).map((_, index) => (
          <Card
            key={index}
            className="hover:scale-105 transition-transform duration-300 rounded-2xl "
          >
            <Image
              src={"/user.jpg"}
              width={500}
              height={1000}
              alt="user"
              className="sm:w-48 w-36 rounded-2xl"
            />
          </Card>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#fff4ed] dark:from-background"></div>
      <div className=" pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#fff4ed] dark:from-background"></div>
    </div>
  );
}
