import { fontSizes } from "../../infrastructure/theme/fontSizes";
import FlexibleDiv from "../flexibleDiv/flexibleDiv.component";
import { CloseIcon } from "../icons";
import Input from "../input/input.component";
import { Text } from "../typography/typography.component";

const OrderQuantity = ({ productPrice }) => {
  return (
    <FlexibleDiv  flexBasis={"50%"} >
      <FlexibleDiv justifyContent={"flex-start"}>
        <FlexibleDiv justifyContent={"flex-start"}>
          <Text
            fontSize={fontSizes.mobile_details}
            fontWeight={"700"}
            margin={"0px 0px 7px 0px"}
            resFontSize={"12px"}
          >
            Quantity:
          </Text>
        </FlexibleDiv>
        <FlexibleDiv justifyContent={"flex-start"}  wrap={"nowrap"}>
          <FlexibleDiv
            flexBasis={"50%"}
            justifyContent={"flex-start"}
            gap={"12px"}
          >
            <Text
              fontSize={fontSizes.mobile_details}
              resFontSize={"12px"}
              fontWeight={"700"}
            >
              N{productPrice}.00
            </Text>
            <CloseIcon size={12} />
          </FlexibleDiv>
          <FlexibleDiv flexBasis={"50%"} justifyContent={"flex-start"}>
            <Input
              type={"number"}
              width={"40%"}
              padding={"12px"}
              border={"1px solid lightgrey"}
              radius={"5px"}
            />
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </FlexibleDiv>
  );
};

export default OrderQuantity;
