import Container from "../components/Container";
import { BiLoader } from "react-icons/bi";
import BlogSingle from "./BLogSingle";
export default function BlogLists({ blogs }) {
  return (
    <>
      <Container>
        {blogs.length > 0 ? (
          <div className="similarBlogContainer">
            {blogs?.map((blog) => (
              //   <ProductComp key={product.id} product={product} />
              <BlogSingle key={blog?.id} blog={blog} />
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
