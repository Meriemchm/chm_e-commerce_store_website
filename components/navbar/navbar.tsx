import { getCategories } from "@/actions/get-categories";
import NavbarClient from "./navbar-client";
import { getStore } from "@/actions/get-store";

export const revalidate = 0; // pour garder dynamique

const Navbar = async () => {
  const categories = await getCategories();
  const store = await getStore()

  return <NavbarClient categories={categories} store={store} />;
};

export default Navbar;
