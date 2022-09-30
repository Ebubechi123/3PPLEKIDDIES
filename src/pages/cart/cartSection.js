import { useSelector } from "react-redux";
import FlexibleDiv from "../../components/flexibleDiv/flexibleDiv.component";
import { Text } from "../../components/typography/typography.component";
import CartProduct from "./cartProduct";

const CartSection = () => {
  const cart = useSelector((state) => state.persistedReducer.cart);
  return (
    <>
      <FlexibleDiv width={"60%"} breakPoint={"780px"} breakPointwidth={"100%"}>
        <FlexibleDiv shadow={"0px 1px 2px 1px lightgrey"} radius={"5px"}>
          {/* Head */}
          <FlexibleDiv
            padding={"5px 19px "}
            justifyContent={"flex-start"}
            borderBottom={"0.1px solid #5252523d"}
          >
            <Text fontWeight={"600"}>Cart</Text>
          </FlexibleDiv>

          {cart.map((product) => (
            <CartProduct key={product._id} product={product} />
          ))}
        </FlexibleDiv>
      </FlexibleDiv>
    </>
  );
};

export default CartSection;
