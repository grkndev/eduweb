import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="w-full items-center justify-center flex flex-col">
      <h1 className="text-3xl font-serif text-brown font-medium">
        Sıkça Sorulan Sorular
      </h1>
      <Accordion type="single" collapsible className="sm:w-[60%] w-[90%] my-16">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">Grkn Akademi Nedir?</AccordionTrigger>
          <AccordionContent>
            Grkn Akademi, sınav sürecini deneyimlemiş mentorlarla beraber sınava
            hazırlık sürecini sistematik bir şekilde takip edebildiğiniz, kişiye
            özel araçlar ve koçluk hizmeti sunan bir platformdur.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg">
            Grkn Akademi&apos;nin amacı nedir?
          </AccordionTrigger>
          <AccordionContent>
            Kant Akademi&apos;nin amacı sınavlara hazırlık sürecinde fırsat
            eşitliğini güçlendirmek, her öğrencinin potansiyelini maksimize
            etmesine ve hedeflerine ulaşmasına yardımcı olmaktır.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg">Grkn Akademi nasıl çalışır?</AccordionTrigger>
          <AccordionContent>
            Grkn Akademi&apos;de koçunu seçtikten sonra, detaylı formlar
            aracılığıyla seviyen ve eksiklerin tespit edilir. Aynı zamanda
            hedeflerin de göz önünde bulundurularak koçunla beraber ilk çalışma
            programını oluşturur ve gelişimini düzenli olarak takip edersin.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
