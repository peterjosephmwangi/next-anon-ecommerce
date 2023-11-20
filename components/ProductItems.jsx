"use client";

import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "@/components/CartContext";
import Image from "next/image";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BsBagPlus, BsRepeat, BsEye, BsStarHalf } from "react-icons/bs";
import Countdown from "react-countdown";
import CountDown from "./CountDown";

import ClientOnly from "./ClientOnly";

import Link from "next/link";

const ProductItems = ({
  newProducts,
  topRated,
  trending,
  arrivals,
  dealofday,
}) => {
  const { addProduct } = useContext(CartContext);
  const [randomCardIndex, setRandomCardIndex] = useState(null);
  useEffect(() => {
    const randomIndex = Math.ceil(Math.random() * newProducts.length);
    setRandomCardIndex(randomIndex);
  }, []);
  const Completionist = () => <span>No Offers Availabe!</span>;
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      // return <span>{hours}:{minutes}:{seconds}</span>;
      return <CountDown hours={hours} minutes={minutes} seconds={seconds} />;
    }
  };
  return (
    <>
      <ClientOnly>
        <div className="product-minimal">
          <div className="product-showcase">
            <h2 className="title">New Arrivals</h2>

            <div className="showcase-wrapper has-scrollbar">
              <div className="showcase-container">
                {arrivals?.slice(4, 8).map((item, i) => (
                  <Link href={`/product/${item?._id}`} key={i}>
                    <div className="showcase">
                      <div className="showcase-img-box">
                        <Image
                          src={item?.images[0].url}
                          alt={item?.slug}
                          width={70}
                          height={70}
                          className="showcase-img"
                        />
                      </div>

                      <div className="showcase-content">
                        <div>
                          <h4 className="showcase-title">{item?.title}</h4>
                        </div>

                        <div className="showcase-category">
                          {item?.category}
                        </div>

                        <div className="price-box">
                          <p className="price">$ {item?.price}</p>
                          <del>
                            ${Math.floor(`${item?.price + Math.random() * 50}`)}{" "}
                          </del>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="showcase-container">
                {arrivals?.slice(7, 11).map((item, i) => (
                  <Link href={`/product/${item?._id}`} key={i}>
                    <div className="showcase">
                      <div className="showcase-img-box">
                        <Image
                          src={item?.images[0].url}
                          alt={item?.slug}
                          width={70}
                          height={70}
                          className="showcase-img"
                        />
                      </div>

                      <div className="showcase-content">
                        <div>
                          <h4 className="showcase-title">{item?.title}</h4>
                        </div>

                        <div className="showcase-category">
                          {item?.category}
                        </div>

                        <div className="price-box">
                          <p className="price">$ {item?.price}</p>
                          <del>
                            ${Math.floor(`${item?.price + Math.random() * 50}`)}{" "}
                          </del>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="product-showcase">
            <h2 className="title">Trending</h2>

            <div className="showcase-wrapper  has-scrollbar">
              <div className="showcase-container">
                {trending?.slice(0, 4).map((item, i) => (
                  <Link href={`/product/${item?._id}`} key={i}>
                    <div className="showcase">
                      <div className="showcase-img-box">
                        <Image
                          src={item?.images[0].url}
                          alt={item?.slug}
                          width={70}
                          height={70}
                          className="showcase-img"
                        />
                      </div>

                      <div className="showcase-content">
                        <div>
                          <h4 className="showcase-title">{item?.title}</h4>
                        </div>

                        <div className="showcase-category">
                          {item?.category}
                        </div>

                        <div className="price-box">
                          <p className="price">$ {item?.price}</p>
                          <del>
                            ${Math.floor(`${item?.price + Math.random() * 50}`)}{" "}
                          </del>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="showcase-container">
                {trending?.slice(4, 8).map((item, i) => (
                  <Link href={`/product/${item?._id}`} key={i}>
                    <div className="showcase">
                      <div className="showcase-img-box">
                        <Image
                          src={item?.images[0].url}
                          alt={item?.slug}
                          width={70}
                          height={70}
                          className="showcase-img"
                        />
                      </div>

                      <div className="showcase-content">
                        <div>
                          <h4 className="showcase-title">{item?.title}</h4>
                        </div>

                        <div className="showcase-category">
                          {item?.category}
                        </div>

                        <div className="price-box">
                          <p className="price">$ {item?.price}</p>
                          <del>
                            ${Math.floor(`${item?.price + Math.random() * 50}`)}{" "}
                          </del>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="product-showcase">
            <h2 className="title">Top Rated</h2>

            <div className="showcase-wrapper  has-scrollbar">
              <div className="showcase-container">
                {topRated?.slice(0, 4).map((item, i) => (
                  <Link href={`/product/${item?._id}`} key={i}>
                    <div className="showcase">
                      <div className="showcase-img-box">
                        <Image
                          src={item?.images[0].url}
                          alt={item?.slug}
                          width={70}
                          height={70}
                          className="showcase-img"
                        />
                      </div>

                      <div className="showcase-content">
                        <div>
                          <h4 className="showcase-title">{item?.title}</h4>
                        </div>

                        <div className="showcase-category">
                          {item?.category}
                        </div>

                        <div className="price-box">
                          <p className="price">$ {item?.price}</p>
                          <del>
                            ${Math.floor(`${item?.price + Math.random() * 50}`)}{" "}
                          </del>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="showcase-container">
                {topRated?.slice(1, 5).map((item, i) => (
                  <Link href={`/product/${item?._id}`} key={i}>
                    <div className="showcase">
                      <div className="showcase-img-box">
                        <Image
                          src={item?.images[0].url}
                          alt={item?.slug}
                          width={70}
                          height={70}
                          className="showcase-img"
                        />
                      </div>

                      <div className="showcase-content">
                        <div>
                          <h4 className="showcase-title">{item?.title}</h4>
                        </div>

                        <div className="showcase-category">
                          {item?.category}
                        </div>

                        <div className="price-box">
                          <p className="price">$ {item?.price}</p>
                          <del>
                            ${Math.floor(`${item?.price + Math.random() * 50}`)}{" "}
                          </del>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="product-featured">
          <h2 className="title">Deal of the day</h2>

          <div className="showcase-wrapper has-scrollbar">
            <div className="showcase-container">
              {dealofday?.slice(0, 1).map((item, i) => (
                <div className="showcase" key={i}>
                  <div className="showcase-banner">
                    <Image
                      src={item?.images[0].url}
                      alt={item?.slug}
                      className="showcase-img"
                      width={400}
                      height={400}
                    />
                  </div>

                  <div className="showcase-content">
                    <div className="showcase-rating">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <BsStarHalf />
                    </div>

                    <Link href="#">
                      <h3 className="showcase-title">{item?.title}</h3>
                    </Link>

                    <p className="showcase-desc" style={{ lineHeight: "1.6" }}>
                      {item?.description}
                    </p>

                    <div className="price-box">
                      <p className="price">$ {item?.price}</p>
                      <del>
                        ${Math.floor(`${item?.price + Math.random() * 50}`)}{" "}
                      </del>
                    </div>

                    <button
                      className="add-cart-btn"
                      onClick={() => addProduct(item?._id)}
                    >
                      add to cart
                    </button>

                    <div className="showcase-status">
                      <div className="wrapper">
                        <p>
                          already sold: <b>20</b>
                        </p>

                        <p>
                          available: <b>40</b>
                        </p>
                      </div>

                      <div className="showcase-status-bar"></div>
                    </div>

                    <div className="countdown-box">
                      <p className="countdown-desc">Hurry Up! Offer ends in:</p>

                      <div className="countdown">
                        <Countdown
                          date={Date.now() + 50000000}
                          renderer={renderer}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="showcase-container">
              {dealofday?.slice(1, 2).map((item, i) => (
                <div className="showcase" key={i}>
                  <div className="showcase-banner">
                    <Image
                      src={item?.images[0].url}
                      alt={item?.slug}
                      width={400}
                      height={400}
                      className="showcase-img"
                    />
                    {/* <img src="./assets/images/products/jewellery-1.jpg" alt="Rose Gold diamonds Earring" className="showcase-img"> */}
                  </div>

                  <div className="showcase-content">
                    <div className="showcase-rating">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>

                    <h3 className="showcase-title">
                      <Link href="#" className="showcase-title">
                        {item?.title}
                      </Link>
                    </h3>

                    <p className="showcase-desc" style={{ lineHeight: "1.6" }}>
                      {item?.description}
                    </p>

                    <div className="price-box">
                      <p className="price">$ {item?.price}</p>
                      <del>
                        ${Math.floor(`${item?.price + Math.random() * 50}`)}{" "}
                      </del>
                    </div>

                    <button
                      className="add-cart-btn"
                      onClick={() => addProduct(product?._id)}
                    >
                      add to cart
                    </button>

                    <div className="showcase-status">
                      <div className="wrapper">
                        <p>
                          {" "}
                          already sold: <b>15</b>{" "}
                        </p>

                        <p>
                          {" "}
                          available: <b>40</b>{" "}
                        </p>
                      </div>

                      <div className="showcase-status-bar"></div>
                    </div>

                    <div className="countdown-box">
                      <p className="countdown-desc">Hurry Up! Offer ends in:</p>

                      <div className="countdown">
                        <Countdown
                          date={Date.now() + 50000000}
                          renderer={renderer}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="product-main">
          <h2 className="title">New Products</h2>

          <div className="product-grid">
            {newProducts?.map((singleItem, i) => (
              <div className="showcase" key={i}>
                <div className="showcase-banner">
                  {/* <img src="./assets/images/products/jacket-3.jpg" alt="Mens Winter Leathers Jackets" width="300" className="product-img default"> */}
                  <Image
                    src={singleItem?.images[0].url}
                    alt={singleItem?.slug}
                    width={300}
                    height={300}
                    className="product-img default"
                  />
                  {/* <img src="./assets/images/products/jacket-4.jpg" alt="Mens Winter Leathers Jackets" width="300" className="product-img hover"> */}

                  <Image
                    src={singleItem?.images[1].url}
                    alt={singleItem?.slug}
                    width={300}
                    height={300}
                    className="product-img hover"
                  />
                  {/* <p
                  className={`showcase-badge angle black ${
                    i === randomCardIndex ? "active" : ""
                  }`}
                >
                  sale
                </p> */}
                  <p
                    className={`showcase-badge angle pink ${
                      i === randomCardIndex ? "active" : ""
                    }`}
                  >
                    new
                  </p>
                  {/* <p className="showcase-badge">15%</p> */}

                  <div className="showcase-actions">
                    <button className="btn-action">
                      {/* <IonIcon icon={heartOutline} /> */}
                      <AiOutlineHeart />
                    </button>
                    <Link href={`/product/${singleItem?._id}`}>
                      <button className="btn-action">
                        {/* <IonIcon icon={eyeOutline} /> */}

                        <BsEye />
                      </button>
                    </Link>

                    <button className="btn-action">
                      {/* <IonIcon icon={repeatOutline} /> */}
                      <BsRepeat />
                    </button>

                    <button className="btn-action">
                      {/* <IonIcon icon={bagAddOutline} /> */}
                      <BsBagPlus />
                    </button>
                  </div>
                </div>

                <div className="showcase-content">
                  <Link
                    href={`/product/${singleItem?._id}`}
                    className="showcase-category"
                  >
                    {singleItem?.category}
                  </Link>

                  <Link href={`/product/${singleItem?._id}`}>
                    <h3 className="showcase-title">{singleItem?.title}</h3>
                  </Link>

                  <div className="showcase-rating">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <BsStarHalf />
                  </div>

                  <div className="price-box">
                    <p className="price">$ {singleItem?.price}</p>
                    <del>
                      ${Math.floor(`${singleItem?.price + Math.random() * 50}`)}{" "}
                    </del>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ClientOnly>
    </>
  );
};

export default ProductItems;
