import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = ({ blogs }) => {
  return (
    <div>
      <div className="blog">
        <div className="container">
          <div className="blog-container has-scrollbar">
            {blogs.map((item, i) => (
              <div className="blog-card" key={i}>
                <Link href={`/blog/${item?.id}`} passHref>
                  <Image
                    src={item?.images[0]}
                    alt={item?._id}
                    width={300}
                    height={150}
                    className="blog-banner"
                  />
                </Link>

                <div className="blog-content">
                  <Link
                    href={`/blog/${item?.id}`}
                    className="blog-category"
                    passHref
                  >
                    {item?.category}
                  </Link>

                  <Link href={`/blog/${item?.id}`} passHref>
                    <h3 className="blog-title">{item?.title}</h3>
                  </Link>

                  <p className="blog-meta">
                    By <cite>{item?.author}</cite>
                    {/* <time datetime="2022-04-06">{item.datetiming}</time> */}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
