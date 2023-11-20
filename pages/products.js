import Center from "@/components/Center";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Title from "@/components/Title";
import SimilarProducts from "@/components/SimilarProducts";
import ProductsHeader from "@/components/ProductsHeader";

export default function ProductsPage({ products }) {
  return (
    <>
      <ProductsHeader products={products} />
      <Center>
        <Title>All products</Title>
      </Center>
      <SimilarProducts products={products} />
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
