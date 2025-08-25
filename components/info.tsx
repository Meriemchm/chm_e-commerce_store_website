"use client";

import { Product } from "@/types";
import React from "react";
import { Currency } from "./ui/currency";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
  data: Product;
}

export const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 items-end justify-between">
        <div className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </div>
      </div>

      <hr className="my-4 border-gray-200" />

      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>

          <div>{data?.size.value}</div>
        </div>

        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>

          <div
            className="rounded-full h-6 w-6"
            style={{ backgroundColor: data?.color.value }}
          ></div>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex gap-x-2 items-center">
          Add To Cart
          <ShoppingCart size={14} />
        </Button>
      </div>
    </div>
  );
};
