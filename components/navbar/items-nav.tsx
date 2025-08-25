"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ItemsNavProps {
  data: Category[];
  scrolled?: boolean;
}

export const ItemsNav: React.FC<ItemsNavProps> = ({ data, scrolled }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6 space-x-4 flex items-center lg:space-x-6 ">
      {routes.map((route) => {
        return (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "capitalize text-sm font-medium transition-colors hover:opacity-50 ",
              route.active ? "text-neutral-400" : "text-white",
              scrolled ? "text-black" : "text-white"
            )}
          >
            {route.label}
          </Link>
        );
      })}
    </nav>
  );
};
