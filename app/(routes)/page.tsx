import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";
import { Billboard } from "@/components/billboard";
import { ProductList } from "@/components/product/product-list";
import { Container } from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("99ba29be-a21c-42b6-afc0-dd3e2ade6fef");

  return (
    <Container>
      <div className="">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 py-5">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
