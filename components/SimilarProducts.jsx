import ProductComp from "./Product";
import Container from "../components/Container";
import { BiLoader } from "react-icons/bi";
export default function SimilarProducts({ products }) {
  return (
    <>
      <Container>
        {products.length > 0 ? (
          <div className=" similarContainer ">
            {products?.map((product) => (
              <ProductComp key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="similarFlex">
            <div className="similarChild ">
              <BiLoader size={30} className="biloader" />
              Loading Products...
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
