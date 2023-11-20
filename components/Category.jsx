import React from "react";
import Image from "next/image";
import Link from "next/link";

import { category } from "../constants/index";

// import "../globals.css";
const Category = () => {
  return (
    <div>
      <div className="category">
        <div className="container">
          <div className="category-item-container has-scrollbar">
            {category.map((item, index) => (
              <div className="category-item" key={index}>
                <div className="category-img-box">
                  <Image src={item.image} alt={item.alt} width="30" />
                </div>

                <div className="category-content-box">
                  <div className="category-content-flex">
                    <h3 className="category-item-title">{item.title}</h3>

                    <p className="category-item-amount">({item.amount})</p>
                  </div>

                  <Link href={`/products`} className="category-btn">
                    Show all
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
