import React from "react";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export default function ForMore() {
  return (
    <Card className="bg-[#DDEEE4] my-16 p-6 space-y-8 flex flex-col items-center justify-center w-full">
      <div className="flex flex-row -space-x-1">
        <Avatar
          key={"1"}
          className="hover:-translate-y-2 transition-transform duration-300 w-14 h-14 ring ring-[#ECDED6]"
        >
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar
          key={"2"}
          className="-translate-y-2 transition-transform duration-300 w-14 h-14 ring ring-[#ECDED6]"
        >
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar
          key={"3"}
          className="hover:-translate-y-2 transition-transform duration-300 w-14 h-14 ring ring-[#ECDED6]"
        >
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col space-y-2 items-center justify-center">
        <h1 className="text-3xl font-serif text-brown font-medium">
          Sormak istediğin bir şey mi var?
        </h1>
        <p className="text-base">
          Aradığın cevabı bulamadıysan destek ekibimize ulaşabilirsin.
        </p>
      </div>
      <Button className="bg-orange-600 hover:bg-orange-700 rounded-full text-white">
        Destek Ekibine Ulaş
      </Button>
    </Card>
  );
}
