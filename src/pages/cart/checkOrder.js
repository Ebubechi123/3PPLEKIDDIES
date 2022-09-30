import { useSelector } from "react-redux";
import FlexibleDiv from "../../components/flexibleDiv/flexibleDiv.component";
import Email from "../../components/order/email";
import PhoneNumber from "../../components/order/phoneNumber";
import Proceed from "../../components/order/proceed";
import { OrderContainer, OrderWrapper } from "../../components/order/style";
import Title from "../../components/order/title";
import { Text } from "../../components/typography/typography.component";
import { fontSizes } from "../../infrastructure/theme/fontSizes";
import LIST_OF_PRODUCT_NAMES from "./list_of_product_names";
import LIST_PRODUCT_IMAGES from "./list_product_images";

const CartOrder = ({ toggleOrder, ToggleHandler }) => {
  const no_of_cartItems = useSelector((state)=>state.persistedReducer.cart.length)
  return (
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
        <Title/>

        <FlexibleDiv justifyContent={"flex-start"} padding={"9px 0px"} >
        <Text margin={"0px"} fontSize={fontSizes.mobile_body_text}resFontSize={'small'} >Cart Items({no_of_cartItems})</Text>
        </FlexibleDiv>

        <LIST_OF_PRODUCT_NAMES/>
        <LIST_PRODUCT_IMAGES/>


        <FlexibleDiv padding={'30px 0px'} >
            <PhoneNumber/>
            <Email/>
        </FlexibleDiv>

        <Proceed position={'relative'} bottom={'-230px'} />
      </OrderContainer>
    </OrderWrapper>
  );
};

export default CartOrder;
