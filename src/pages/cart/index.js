import { useEffect, useState } from "react";
import FlexibleDiv from "../../components/flexibleDiv/flexibleDiv.component";
import { OrderContainer, OrderWrapper } from "../../components/order/style";
import { Text } from "../../components/typography/typography.component";
import CartSection from "./cartSection";
import CheckSection from "./checkoutSection";

const Cart = () => {
  const [toggleOrder, setToggleOrder] = useState(false);
  const ToggleHandler = () => {
    setToggleOrder(!toggleOrder);
  };
  useEffect(() => {
    if (toggleOrder) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "unset";
    }
  });
  return (
    <FlexibleDiv
      justifyContent={"center"}
      minHeight={"100vh"}
      alignItems={"flex-start"}
      padding={"90px 0px"}
    >
      <FlexibleDiv
        width={"90%"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
      >
        <CartSection />
        <CheckSection ToggleHandler={ToggleHandler} />

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
            <Text>Head</Text>
          </OrderContainer>
        </OrderWrapper>
      </FlexibleDiv>
    </FlexibleDiv>
  );
};

export default Cart;
