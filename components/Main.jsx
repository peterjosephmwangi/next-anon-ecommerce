import React from "react";
import Banner from "./Banner";
import Blog from "./Blog";
import Category from "./Category";
import Products from "./Products";
import Testimonials from "./Testimonials";

const Main = ({
  isOpen,
  setIsOpen,
  activeItem,
  toggleItem,
  bestSeller,
  newProducts,
  topRated,
  trending,
  arrivals,
  blogs,
  dealofday,
}) => {
  return (
    <main>
      {/* banner component */}
      <Banner />
      {/* category component  */}
      <Category />
      {/* products component  */}
      <Products
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        activeItem={activeItem}
        toggleItem={toggleItem}
        bestSeller={bestSeller}
        newProducts={newProducts}
        topRated={topRated}
        trending={trending}
        arrivals={arrivals}
        dealofday={dealofday}
      />
      {/* testimonials component  */}
      <Testimonials />
      {/* blog component  */}
      <Blog blogs={blogs} />
    </main>
  );
};

export default Main;
