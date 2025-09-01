import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";
import { Hero } from "@/components/hero";
import { ProductList } from "@/components/product/product-list";
import { Container } from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="">


        <Hero />

        <div className="flex flex-col gap-y-8 py-5">
          <ProductList title="Featured Products" items={products} />
        </div>

        
      </div>
    </Container>
  );
};

export default HomePage;
