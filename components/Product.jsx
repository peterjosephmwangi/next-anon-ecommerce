"use client";

import Image from "next/image";
import Link from "next/link";

export default function Product({ product }) {
  return (
    <>
      <Link href={`/product/${product?._id}`} className="productLink">
        {console.log(product?.id)}
        <div className="wrapperProduct">
          {product?.images ? (
            <Image
              alt={product?.slug}
              width={200}
              height={200}
              className="rounded cursor-pointer"
              src={product?.images[0].url}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          ) : null}
        </div>
        <div
          className="pt-2 px-1"
          style={{
            paddingTop: "0.5rem",
            paddingLeft: "0.25rem",
            paddingRight: "0.25rem",
          }}
        >
          <div className="productMyTitle">{product?.title}</div>
          <div className="font-extrabold" style={{ fontWeight: "800" }}>
            $ {product?.price}
          </div>

          <div className="lineThrough">
            <div
              className="line-through"
              style={{ textDecoration: "line-through" }}
            >
              <del>
                ${Math.floor(`${product?.price + Math.random() * 50}`)}{" "}
              </del>
            </div>
            <div
              className="px-2"
              style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
            >
              -
            </div>
            <div
              className="line-through"
              style={{ color: "green", fontWeight: "900" }}
            >
              {Math.floor(Math.random() * 20)} %
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
