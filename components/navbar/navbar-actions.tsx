"use client";

import { ShoppingBag } from "lucide-react";
import Button from "../button";
import { useEffect, useState } from "react";

export const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center justify-center rounded-full bg-black py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-meduim text-white">0 </span>
      </Button>
    </div>
  );
};
