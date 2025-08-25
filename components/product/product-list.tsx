"use client";

import { Product } from "@/types";
import NoResults from "../ui/no-results";
import ProductCard from "./product-card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

interface ProductListProps {
  title?: string;
  items?: Product[];
}

gsap.registerPlugin(ScrollTrigger);

export const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(el.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: el.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div className="space-y-4">
      <p className="font-bold text-center text-3xl py-10">{title}</p>
      {items?.length === 0 && <NoResults />}
      <div
        ref={el}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {items?.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
