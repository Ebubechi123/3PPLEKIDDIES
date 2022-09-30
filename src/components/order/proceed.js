import { fontSizes } from "../../infrastructure/theme/fontSizes";
import GetTotalPrice from "../../infrastructure/utils/getTotalQuantity";
import Button from "../button/button.component";
import FlexibleDiv from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/typography.component";

const Proceed = ({ padding,bottom,position,productPrice }) => {
  const totalCost = GetTotalPrice()
  return (
    <>
      <FlexibleDiv
        position={position ? position :"absolute"}
        bottom={bottom ? bottom :"20px"}
        padding={padding ? padding :"23px"}
        left={"0px"}
        breakPoint={"740px"}
        breakPointBottom={"auto"}
      >
        {/* Total Price */}
        <FlexibleDiv
          flexBasis={"50%"}
          direction={"column"}
          justifyContent={"space-evenly"}
          alignItems={"flex-start"}
        >
          <Text
            margin={"0px"}
            fontWeight={"800"}
            fontSize={fontSizes.mobile_subtitle}
            resFontSize={fontSizes.mobile_details}
          >
            N{totalCost || productPrice + 100}.00
          </Text>
          <Text margin={"0px"} fontSize={fontSizes.mobile_smallest}
           resFontSize={fontSizes.mobile_smallest}
          >
            Total cost
          </Text>
        </FlexibleDiv>

        {/* Proceed */}

        <FlexibleDiv flexBasis={"50%"} breakPoint={"680px"} breakPointJustifyContent={'flex-start'} >
          <Button
            width={"70%"}
            background={"#34b334"}
            color={"white"}
            padding={"12px"}
            radius={"3px"}
          >
            Proceed
          </Button>
        </FlexibleDiv>
      </FlexibleDiv>
    </>
  );
};

export default Proceed;
