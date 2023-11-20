"use client";

import React, { useState } from "react";

import Image from "next/image";
import {
  AiOutlineClose,
  AiOutlinePlus,
  AiOutlineMinus,
  AiFillStar,
} from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

// import { images } from "../public/assets/index";
import { sidebarmenucategory } from "../constants/index";
// import "../globals.css";
import Link from "next/link";
import ClientOnly from "./ClientOnly";
const Sidebar = ({ isOpen, setIsOpen, activeItem, toggleItem, bestSeller }) => {
  return (
    <div
      className={`sidebar  has-scrollbar ${isOpen ? "active" : " "}`}
      data-mobile-menu
    >
      <ClientOnly>
        <div className="sidebar-category">
          <div className="sidebar-top">
            <h2 className="sidebar-title">Category</h2>

            <button
              className="sidebar-close-btn"
              data-mobile-menu-close-btn
              onClick={() => setIsOpen(false)}
            >
              {/* <IonIcon icon={closeOutline} /> */}
              <AiOutlineClose />
            </button>
          </div>

          <ul className="sidebar-menu-category-list">
            {sidebarmenucategory.map((sidebarmenu, index) => (
              <li className="sidebar-menu-category" key={index}>
                {/* {console.log(sidebarmenu.categoryItems)} */}
                <button
                  className={`sidebar-accordion-menu ${
                    sidebarmenu?.id === activeItem ? "active" : ""
                  }`}
                  onClick={() => toggleItem(sidebarmenu?.id)}
                  data-accordion-btn
                >
                  <div className="menu-title-flex">
                    <Image
                      src={sidebarmenu?.categories?.image}
                      alt={sidebarmenu?.categories?.alt}
                      width={20}
                      height={20}
                      className="menu-title-img"
                    />

                    <p className="menu-title">
                      {sidebarmenu?.categories?.title}
                    </p>
                  </div>

                  <div>
                    {/* <IonIcon icon={addOutline} className="add-icon" /> */}
                    <AiOutlinePlus className="add-icon" />
                    {/* <IonIcon icon={removeOutline} className="remove-icon" /> */}
                    <AiOutlineMinus className="remove-icon" />
                  </div>
                </button>
                {sidebarmenu?.id === activeItem && (
                  <ul
                    className={`sidebar-submenu-category-list ${
                      activeItem ? "active" : " "
                    }`}
                    data-accordion
                  >
                    {sidebarmenu?.categoryItems.map((singleItem, i) => (
                      <li className="sidebar-submenu-category" key={i}>
                        {/* {console.log(singleItem)} */}
                        <Link
                          href={`/products`}
                          className="sidebar-submenu-title"
                        >
                          <p className="product-name">{singleItem?.title}</p>
                          <data
                            value="62"
                            className="stock"
                            title="Available Stock"
                          >
                            {singleItem?.stokevalue}
                          </data>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="product-showcase">
          <h3 className="showcase-heading">best sellers</h3>

          <div className="showcase-wrapper">
            <div className="showcase-container">
              {bestSeller.map((item, i) => (
                <Link href={`/product/${item?._id}`} key={i}>
                  <div className="showcase" style={{ marginTop: "10px" }}>
                    <div className="showcase-img-box">
                      <Image
                        src={item?.images[0].url}
                        alt={item?.slug}
                        width={75}
                        height={75}
                        className="menu-title-img"
                      />
                    </div>

                    <div className="showcase-content">
                      <div>
                        <h4 className="showcase-title">{item?.title}</h4>
                      </div>
                      <div className="showcase-rating">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />

                        <BsStarHalf />
                      </div>

                      <div className="price-box">
                        <del>{item?.delprice}</del>
                        <p className="price">{item?.newPrice}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </ClientOnly>
    </div>
  );
};

export default Sidebar;
