import { getCategories } from "@/actions/get-categories";
import NavbarClient from "./navbar-client";

export const revalidate = 0; // pour garder dynamique

const Navbar = async () => {
  const categories = await getCategories();

  return <NavbarClient categories={categories} />;
};

export default Navbar;
