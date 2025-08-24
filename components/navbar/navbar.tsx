import React from "react";
import { Container } from "../ui/container";
import Link from "next/link";
import { ItemsNav } from "./items-nav";
import { getCategories } from "@/actions/get-categories";
import { NavbarActions } from "./navbar-actions";

export const revalidate = 0; //dynamique 

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="">
      {" "}
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex items-center h-16">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <ItemsNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
