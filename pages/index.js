import { useState } from "react";
import { Product } from "../models/Product";
import { Blog } from "../models/Blog";
import { mongooseConnect } from "../lib/mongoose";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default function HomePage({
  featuredProduct,
  newProducts,
  bestSeller,
  topRated,
  trending,
  arrivals,
  blogs,
  dealofday,
  filterSearch,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (itemId) => {
    if (activeItem === itemId) {
      setActiveItem(null);
    } else {
      setActiveItem(itemId);
    }
  };

  return (
    <>
      <div className={`overlay ${isOpen ? "active" : " "}`} data-overlay></div>
      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        activeItem={activeItem}
        toggleItem={toggleItem}
        isOpenMenu={isOpenMenu}
        setIsOpenMenu={setIsOpenMenu}
        filterSearch={filterSearch}
      />
      <Main
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        activeItem={activeItem}
        toggleItem={toggleItem}
        bestSeller={bestSeller}
        newProducts={newProducts}
        topRated={topRated}
        trending={trending}
        arrivals={arrivals}
        blogs={blogs}
        dealofday={dealofday}
      />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "640de2b12aa291ebdf213d48";

  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const bestSeller = await Product.find({ tags: "bseller" });
  const newProducts = await Product.find({ tags: "popular" });
  const topRated = await Product.find({ tags: "special" });
  const trending = await Product.find({ category: "footwear" });
  const arrivals = await Product.find({ category: "clothes" });
  const dealofday = await Product.find({ tags: "dealofday" });
  const filterSearch = await Product.find({}, null, {
    sort: { _id: -1 },
  });
  const blogs = await Blog.find({}, null, { sort: { _id: -1 } });
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      bestSeller: JSON.parse(JSON.stringify(bestSeller)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      topRated: JSON.parse(JSON.stringify(topRated)),
      trending: JSON.parse(JSON.stringify(trending)),
      arrivals: JSON.parse(JSON.stringify(arrivals)),
      dealofday: JSON.parse(JSON.stringify(dealofday)),
      blogs: JSON.parse(JSON.stringify(blogs)),
      filterSearch: JSON.parse(JSON.stringify(filterSearch)),
    },
  };
}
