import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-8 mt-8">
      <div className="flex flex-row items-center justify-center space-x-2 bg-brown/10 py-2 px-4 rounded-full">
        <div className="flex flex-row -space-x-1">
          {Array.from({ length: 4 }).map((_, index) => (
            <Avatar
              key={index}
              className="hover:-translate-y-2 transition-transform duration-300 w-8 h-8 ring ring-[#ECDED6]"
            >
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ))}
        </div>
        <span className="text-brown text-[14px]">
          +10.000 öğrenci tarafından tercih edildi.
        </span>
      </div>
      <h1 className="font-serif text-4xl text-center text-brown max-w-3xl">
        Grkn Akademi ile sınav kaygısını motivasyona dönüştür,{"\n"}daha planlı
        çalışarak hedeflerine ulaş.
      </h1>
      <h3 className=" text-base text-brown text-center">
        Hedefine ulaşıp derece yapmış akademik koçlarımızla sınav sürecinize
        katkıda bulunuyoruz.
      </h3>
      <Button className="bg-orange-600 text-base p-6 hover:bg-orange-800 rounded-full">
        Hemen Başlayın
      </Button>
    </div>
  );
}
