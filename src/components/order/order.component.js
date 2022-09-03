import React, { useEffect, useState } from "react";
import FlexibleDiv from "../flexibleDiv/flexibleDiv.component";
import OrderColor from "./orderColor";
import OrderQuantity from "./orderQuantity";
import OrderPrice from "./orderPrice";
import OrderSize from "./orderSize";
import { OrderContainer, OrderWrapper } from "./style";
import Title from "./title";
import OrderName from "./orderName";
import PhoneNumber from "./phoneNumber";
import Email from "./email";
import Proceed from "./proceed";

const Order = ({ toggleOrder, setToggleOrder }) => {
  const ToggleHandler = () => {
    setToggleOrder(false);
  };
  useEffect(()=>{
    if (toggleOrder) {
        window.document.body.style.overflow="hidden"
    }
    else{
        window.document.body.style.overflow="unset"
    }
  })
  return (
    <>
      <OrderWrapper
        onClick={() => {
          ToggleHandler();
        }}
        transform={toggleOrder ? "translateX(0%)" : "translateX(100%)"}
      >
        <OrderContainer
          onClick={(e) => {
            e.stopPropagation();
          }}
          transform={toggleOrder ? "translateX(0%)" : "translateX(100%)"}
          restransform={toggleOrder ? "translateY(0%)" : "translateY(100%)"}
        >
          <Title />
          <OrderName />

          <FlexibleDiv padding={"2px 0px"}>
            <OrderPrice />
            <OrderSize />
          </FlexibleDiv>

          <FlexibleDiv padding={"23px 0px"}>
            <OrderColor />
            <OrderQuantity />
          </FlexibleDiv>
          <FlexibleDiv padding={"12px 0px"}>
            <PhoneNumber/>
            <Email/>
          </FlexibleDiv>
          <Proceed/>
        </OrderContainer>
      </OrderWrapper>
    </>
  );
};

export default Order;
