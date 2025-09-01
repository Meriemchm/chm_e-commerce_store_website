"use client"

import { Billboard as BillboardType } from "@/types";
import { useGsapTextSplit } from "@/hooks/gsap-animations";

export const Hero = () => {
  const textRef = useGsapTextSplit();

  return (
    <div className="relative bg-cover bg-center">
      <div
        className="rounded-xl aspect-square md:aspect-[2.4/1] bg-cover bg-center bg-[#0C4455]"
      >
        <div className="h-full w-full flex flex-col justify-center items-start pl-2 md:pl-16">
          <div className="font-bold text-3xl md:text-6xl sm:max-w-md max-w-xs">
            <p ref={textRef} className="text-white split">
              Hello, this is your dream cozy deco.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
