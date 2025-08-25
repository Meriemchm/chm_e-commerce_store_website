"use client"

import { Billboard as BillboardType } from "@/types";
import { useGsapTextSplit } from "@/hooks/gsap-animations";

interface BillboardProps {
  data: BillboardType;
}

export const Billboard: React.FC<BillboardProps> = ({ data }) => {
  const textRef = useGsapTextSplit();

  return (
    <div className="relative bg-cover bg-center">
      <div
        className="rounded-xl aspect-square md:aspect-[2.4/1] bg-cover bg-center"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-start pl-2 md:pl-16">
          <div className="font-bold text-3xl md:text-6xl sm:max-w-md max-w-xs">
            <p ref={textRef} className="text-white split">
              {data.label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
