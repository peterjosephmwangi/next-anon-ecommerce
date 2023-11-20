import React from "react";
// import "../globals.css";
import Sidebar from "./Sidebar";
// import ToggleData from "./ToggleData";
import ProductItems from "./ProductItems";
const Products = ({
  isOpen,
  setIsOpen,
  activeItem,
  toggleItem,
  bestSeller,
  newProducts,
  topRated,
  trending,
  arrivals,
  dealofday,
}) => {
  return (
    <div className="product-container">
      <div className="container">
        {/* side bar component  */}
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          activeItem={activeItem}
          toggleItem={toggleItem}
          bestSeller={bestSeller}
        />

        <div className="product-box">
          {/* products  */}
          <ProductItems
            newProducts={newProducts}
            topRated={topRated}
            trending={trending}
            arrivals={arrivals}
            dealofday={dealofday}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
