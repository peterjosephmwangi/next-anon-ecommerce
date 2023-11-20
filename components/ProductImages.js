import styled from "styled-components";
import React, { useState } from "react";
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  padding: 10px;

  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.25);
`;
const BigImage = styled.img`
  max-width: 100%;
  max-height: 300px;
`;
const ImageButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-grow: 0;
  margin-top: 10px;
`;
const ImageButton = styled.div`
  border: 2px solid #ccc;
  ${(props) =>
    props.active
      ? `
      border-color: #ccc;
    `
      : `
      border-color: transparent;
    `}
  height: 60px;
  width: 60px;
  padding: 2px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
`;
const BigImageWrapper = styled.div`
  text-align: center;
`;

export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0].url);
  // console.log(activeImage);

  return (
    <>
      <BigImageWrapper>
        <BigImage src={activeImage} />
      </BigImageWrapper>
      <ImageButtons>
        {images?.map((image) => (
          <ImageButton
            key={image._id}
            active={image === activeImage}
            onClick={() => setActiveImage(image.url)}
            // onClick={() => console.log(image.url)}
          >
            <Image src={image.url} width={60} height={60} alt="productImages" />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}
