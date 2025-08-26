"use client";

import { useEffect, useState } from "react";
import { Container } from "../ui/container";
import Link from "next/link";
import { ItemsNav } from "./items-nav";
import { NavbarActions } from "./navbar-actions";
import { cn } from "@/lib/utils";
import { Store } from "@/types";

interface NavbarClientProps {
  categories: any[];
  store: Store;
}

const NavbarClient: React.FC<NavbarClientProps> = ({
  categories,
  store,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        `fixed top-0 left-0 right-0 z-50 transition-colors`,
        scrolled ? "bg-gray-100 shadow-sm" : "bg-transparent"
      )}
    >
      <Container>
        <div className=" px-4 sm:px-6 lg:px-8 flex items-center h-16">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl uppercase  ">{store.name}</p>
          </Link>
          <ItemsNav data={categories} scrolled={scrolled} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default NavbarClient;
