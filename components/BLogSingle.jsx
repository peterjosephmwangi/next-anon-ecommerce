"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogSingle({ blog }) {
  return (
    <>
      <Link href={`/blog/${blog?._id}`} className="blogSingle">
        <div className="wrapperProduct">
          {blog?.images ? (
            <Image
              alt={blog?._id}
              width={200}
              height={200}
              className="rounded cursor-pointer"
              src={blog?.images[0]}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          ) : null}
        </div>
        <div
          className="pt-2 px-1"
          style={{
            paddingTop: "1rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <div className="blog-title">{blog?.title}</div>
          <div
            className="font-extrabold"
            style={{ fontWeight: "800", marginBottom: "2rem" }}
          >
            {blog?.category}
          </div>
        </div>
      </Link>
    </>
  );
}
