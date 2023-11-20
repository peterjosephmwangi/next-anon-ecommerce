import React from "react";
import Image from "next/image";
import Link from "next/link";

import { images } from "../public/assets/index";

import { footercategory, footersection } from "../constants/index";
// import "../globals.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-category">
        <div className="container">
          <h2 className="footer-category-title">Brand directory</h2>
          {footercategory.map((item, index) => (
            <div className="footer-category-box" key={index}>
              <h3 className="category-box-title">{item.title} :</h3>
              {item?.categorylink?.map((itemlink, index) => (
                <Link
                  href={`/products`}
                  className="footer-category-link"
                  key={index}
                >
                  {itemlink}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-nav">
        <div className="container">
          {footersection.map((item, index) => (
            <ul className="footer-nav-list" key={index}>
              <li className="footer-nav-item">
                <h2 className="nav-title">{item.title}</h2>
              </li>
              {item?.sectionlinks?.map((secItem, index) => (
                <li className="footer-nav-item" key={index}>
                  <Link href="#" className="footer-nav-link">
                    {secItem}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <Image
            src={images.payment}
            alt="payment method"
            className="payment-img"
          />

          <p className="copyright">
            Copyright &copy; <Link href="#">Anon</Link> all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
