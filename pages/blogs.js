import HeaderLayout from "@/components/HeaderLayout";
import Center from "@/components/Center";
import { mongooseConnect } from "@/lib/mongoose";
import { Blog } from "@/models/Blog";
import Title from "@/components/Title";
import BlogLists from "../components/BlogLists";

export default function ProductsPage({ blogs }) {
  return (
    <>
      <HeaderLayout blogs={blogs} />
      <Center>
        <Title>All Blogs</Title>
      </Center>
      <BlogLists blogs={blogs} />
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const blogs = await Blog.find({}, null, { sort: { _id: -1 } });
  return {
    props: {
      blogs: JSON.parse(JSON.stringify(blogs)),
    },
  };
}
