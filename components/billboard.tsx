import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

export const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="relative bg-cover bg-center">
      <div
        className="rounded-xl aspect-square md:aspect-[2.4/1] bg-cover bg-center"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-start pl-2 md:pl-16 ">
          <div className="font-bold text-3xl md:text-6xl sm:max-w-xl max-w-xs">
            <p className="text-white">{data.label}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
