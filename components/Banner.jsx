import React from "react";
import Image from "next/image";
import Link from "next/link";

import { banner } from "../constants/index";

// import "../globals.css";
const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="container">
          <div className="slider-container has-scrollbar">
            {banner.map((item, i) => (
              <div className="slider-item" key={i}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  className="banner-img"
                  fill
                  priority
                />

                <div className="banner-content">
                  <p className="banner-subtitle">{item.subtitle}</p>

                  <h2 className="banner-title">{item.title}</h2>

                  <p className="banner-text">
                    starting at &dollar; <b>{item.price1}</b>
                    {item.price2}
                  </p>

                  <Link href={`/products`} className="banner-btn">
                    Shop now
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

export default Banner;
