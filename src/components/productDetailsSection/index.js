import FlexibleDiv from "../flexibleDiv/flexibleDiv.component";
import ProductTitle from "./productTitle";
import ProductPrice from "./productPrice";
import ProductDescription from "./productDescription";
import ProductSizes from "./productSizes";
import ProductColors from "./productColors";
import ButtonOption from "./buttonOption";
import Order from "../order/order.component";
import { useState } from "react";

const ProductDetailsSection = () => {
  const [toggleOrder,setToggleOrder] = useState(false)
  return (
    <>
      <FlexibleDiv flexBasis={"60%"} breakPoint={"780px"} breakPointflexBasis={"100%"} >
        <FlexibleDiv padding={" 0px 20px"} height={"100%"}>
          <FlexibleDiv lineHeight={"2rem"}>
            {/* Title of Product */}
            <ProductTitle />
            {/* Price of Product */}
            <ProductPrice />
          </FlexibleDiv>

          <ProductDescription />

          <ProductSizes />
          <ProductColors />
          <ButtonOption setToggleOrder={setToggleOrder} />
          <Order toggleOrder={toggleOrder} setToggleOrder={setToggleOrder}  />
        </FlexibleDiv>
      </FlexibleDiv>
    </>
  );
};

export default ProductDetailsSection;
