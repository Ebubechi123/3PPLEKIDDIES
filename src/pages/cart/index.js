import { useEffect, useState } from "react";
import FlexibleDiv from "../../components/flexibleDiv/flexibleDiv.component";
import CartSection from "./cartSection";
import CartOrder from "./checkOrder";
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
    window.scrollTo(0, 0)
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
        <CartOrder toggleOrder={toggleOrder}  ToggleHandler={ToggleHandler} />
      </FlexibleDiv>
    </FlexibleDiv>
  );
};

export default Cart;
