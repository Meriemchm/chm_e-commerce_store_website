"use client";

import { Product } from "@/types";
import { Expand, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import { IconButton } from "../ui/icon-button";
import { Currency } from "../ui/currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import PreviewModal from "../preview-modal";
import usePreviewModal from "@/hooks/use-preview-modal";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const previewModal = usePreviewModal()
  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()

    previewModal.onOpen(data)
  }

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer space-y-4 p-5 md:px-0"
    >
      {" "}
      <div className=" aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          fill
          alt={data.name}
          className="w-full h-80 object-contain object-center mb-4 rounded-xl"
        />
        <div className="opacity-0 group-hover:opacity-100 absolute top-2 right-2 transition">
          <div className="flex gap-x-6 justify-between">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingBasket size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="">
          <p className="font-semibold capitalize">{data.name}</p>
          <p className="text-sm text-gray-500">{data.category?.name}</p>
        </div>
        <div className="rounded-lg p-2">
          <Currency value={data?.price} />
        </div>
      </div>{" "}
    </div>
  );
};

export default ProductCard;
