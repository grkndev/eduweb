import React from "react";
import { Card } from "@/components/ui/card";
export default function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 my-16">
      <div className="flex flex-col space-y-4 items-start justify-start w-full">
        <h2 className="font-serif text-brown text-3xl font-medium max-w-md">
          Deneyimli bir yol arkadaşı ve bir platformla sınav yolcuğunu yönet
        </h2>
        <h2 className="text-brown text-base max-w-lg">
          Derece yapmış koçlarımızın rehberliği ile yolcuğunu daha huzurlu
          geçirebilir ve hedeflediğin başarılara ulaşabilirsin.
        </h2>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Card className="bg-[#DDEEE4] items-center justify-center flex flex-col p-4 space-y-8 md:w-[40%]">
            <div className="space-y-2 flex flex-col">
              <h2 className="font-serif text-xl text-brown font-medium">
                Sana uygun bir akademik koç
              </h2>
              <p className="text-sm">
                Yazılı ve sesli mülakatlar sonrasında aramıza katılan tecrübeli
                koçlarımız arasından dilediğini seçebilirsin.
              </p>
            </div>
            <img
              width={512}
              alt="users"
              height={433}
              className="rounded-lg w-[90%]"
              src={
                "https://framerusercontent.com/images/eeS4l2SGt0TQBFBNtlWEyL5FqWA.png?scale-down-to=512"
              }
            />
          </Card>
          <Card className="bg-[#DDEEE4] p-4 space-y-8 md:w-[60%]  items-center justify-center flex flex-col">
            <img
              width={1024}
              alt="users"
              height={756}
              className="rounded-lg w-[75%] self-center"
              src={
                "https://framerusercontent.com/images/EQfteK3kGjvveJD03vxjQkiKNw.png?scale-down-to=1024"
              }
            />
            <div className="space-y-2 flex flex-col items-start">
              <h2 className="font-serif text-xl text-brown font-medium">
                Akademik koçunla düzenli görüş
              </h2>
              <p className="text-sm">
                Koçunla hafta içerisinde mesajlaşarak ya da görüntülü görüşerek
                iletişim halinde kalabilir, kafana takılanları sorabilirsin.
              </p>
            </div>
          </Card>
        </div>
        <div className="flex md:flex-row flex-col gap-8">
          <Card className="bg-[#DDEEE4] p-4 space-y-8 md:w-[60%] items-center justify-center flex flex-col">
            <img
              width={1024}
              alt="users"
              height={756}
              className="rounded-lg w-[75%] self-center"
              src={
                "https://framerusercontent.com/images/EQfteK3kGjvveJD03vxjQkiKNw.png?scale-down-to=1024"
              }
            />
            <div className="space-y-2 flex flex-col items-start">
              <h2 className="font-serif text-xl text-brown font-medium">
                Akademik koçunla düzenli görüş
              </h2>
              <p className="text-sm">
                Koçunla hafta içerisinde mesajlaşarak ya da görüntülü görüşerek
                iletişim halinde kalabilir, kafana takılanları sorabilirsin.
              </p>
            </div>
          </Card>
          <Card className="bg-[#DDEEE4] items-center justify-center flex flex-col p-4 space-y-8 md:w-[40%]">
            <div className="space-y-2 flex flex-col">
              <h2 className="font-serif text-xl text-brown font-medium">
                Sana uygun bir akademik koç
              </h2>
              <p className="text-sm">
                Yazılı ve sesli mülakatlar sonrasında aramıza katılan tecrübeli
                koçlarımız arasından dilediğini seçebilirsin.
              </p>
            </div>
            <img
              width={512}
              alt="users"
              height={433}
              className="rounded-lg w-[90%]"
              src={
                "https://framerusercontent.com/images/eeS4l2SGt0TQBFBNtlWEyL5FqWA.png?scale-down-to=512"
              }
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
