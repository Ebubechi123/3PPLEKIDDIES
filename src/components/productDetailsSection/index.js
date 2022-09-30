import FlexibleDiv from "../flexibleDiv/flexibleDiv.component";
import ProductTitle from "./productTitle";
import ProductPrice from "./productPrice";
import ProductDescription from "./productDescription";
import ProductSizes from "./productSizes";
import ProductColors from "./productColors";
import ButtonOption from "./buttonOption";
import Order from "../order/order.component";
import { useState } from "react";
import { GetSingleProduct } from "../../state management/context/singleProduct";

const ProductDetailsSection = () => {
  const [toggleOrder,setToggleOrder] = useState(false)
  const [singleProduct] = GetSingleProduct();
  console.log(singleProduct)
  let title = singleProduct[0]?.name
  let price = singleProduct[0]?.price
  let description= singleProduct[0]?.description
   let sizes = singleProduct[0]?.sizes
   let colors = singleProduct[0]?.colors
  return (
    <>
      <FlexibleDiv flexBasis={"60%"} breakPoint={"780px"} breakPointflexBasis={"100%"} >
        <FlexibleDiv padding={" 0px 20px"} height={"100%"}>
          <FlexibleDiv lineHeight={"2rem"}>
            {/* Title of Product */}
            <ProductTitle title={title} />
            {/* Price of Product */}
            <ProductPrice price={price} />
          </FlexibleDiv>

          <ProductDescription description={description} />

         {sizes?  <ProductSizes sizes={sizes} /> : null}
        {colors?   <ProductColors colors={colors} /> : colors}
          <ButtonOption setToggleOrder={setToggleOrder} />
          <Order toggleOrder={toggleOrder} setToggleOrder={setToggleOrder}  />
        </FlexibleDiv>
      </FlexibleDiv>
    </>
  );
};

export default ProductDetailsSection;
