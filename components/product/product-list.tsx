"use client";

import { Product } from "@/types";
import NoResults from "../ui/no-results";
import ProductCard from "./product-card";

import { useGsapFadeUp } from "@/hooks/gsap-animations";

interface ProductListProps {
  title?: string;
  items?: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  const ref = useGsapFadeUp();

  return (
    <div className="space-y-4">
      <div ref={ref}>
        <p className="font-bold text-center text-3xl py-10">{title}</p>
      </div>
      {items?.length === 0 && <NoResults />}
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {items?.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
