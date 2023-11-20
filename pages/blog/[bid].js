import Header from "@/components/HeaderMain";
import Title from "@/components/Title";
import { Blog } from "../../models/Blog";
import { mongooseConnect } from "@/lib/mongoose";
import Image from "next/image";
import styled from "styled-components";
const WhiteBox = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.25);
  overflow: hidden;
  @media screen and (min-width: 450px) and (max-width: 768px) {
    margin: 0 auto;
  }
`;

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
  }
  gap: 40px;
  margin: 40px 0;
`;

const StyledDivCenter = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

export default function BlogPage({ myblog }) {
  return (
    <>
      <Header />
      <StyledDivCenter>
        <ColWrapper>
          <WhiteBox>
            <Image
              src={myblog?.images[0]}
              alt={myblog?._id}
              width={400}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </WhiteBox>
          <div>
            <Title
              className="title"
              style={{ textTransform: "uppercase", fontSize: "0.9rem" }}
            >
              {myblog?.title}
            </Title>
            <p
              style={{ marginTop: "1rem" }}
              style={{
                lineHeight: "1.6",
                letterSpacing: "0.4px",
                color: "gray",
              }}
            >
              {myblog?.description}
            </p>
          </div>
        </ColWrapper>
      </StyledDivCenter>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { bid } = context.query;
  const myblog = await Blog.findById(bid);
  return {
    props: {
      myblog: JSON.parse(JSON.stringify(myblog)),
    },
  };
}
