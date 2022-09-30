import React from "react";
import FlexibleDiv from "../flexibleDiv/flexibleDiv.component";
import { Image } from "../image/image.component";
// import ProductImage from "../../assets/images/product-6.jpg"
import styled from "styled-components";
import { colorTheme } from "../../infrastructure/theme/colors";
import { GetSingleProduct } from "../../state management/context/singleProduct";
import UrlFor from "../../infrastructure/utils/imageBuilder";

const ProductImg = styled(Image)`
  @media only screen and (max-width: 780px) {
    height: 10rem;
    width: 100%;
  }
`;

const ProductImageSection = () => {
  const [singleProduct] = GetSingleProduct();
  const productImage = singleProduct[0]?.image;
  return (
    <>
      <FlexibleDiv
        flexBasis={"40%"}
        breakPoint={"780px"}
        breakPointflexBasis={"100%"}
      >
        <FlexibleDiv
          padding={"0px 20px"}
          breakPoint={"780px"}
          breakPointJustifyContent={"flex-start"}
        >
          {productImage ? (
            <ProductImg
              src={UrlFor(productImage).url()}
              width={"80%"}
              height={"100%"}
              objectFit={"cover"}
            />
          ) : (
            <FlexibleDiv
              bg={colorTheme.black.light}
              radius={"5px"}
              height={"500px"}
              breakPoint={"780px"}
            />
          )}
        </FlexibleDiv>
      </FlexibleDiv>
    </>
  );
};

export default ProductImageSection;
