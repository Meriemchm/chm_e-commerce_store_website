import { Product } from "@/types";
import NoResults from "../ui/no-results";
import ProductCard from "./product-card";

interface ProductListProps {
  title?: string;
  items?: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <p className="font-bold text-3xl py-10">{title}</p>
      {items?.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items?.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
