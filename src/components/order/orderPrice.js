import { fontSizes } from "../../infrastructure/theme/fontSizes";
import FlexibleDiv from "../flexibleDiv/flexibleDiv.component";
import Input from "../input/input.component";
import { Text } from "../typography/typography.component";

const OrderPrice = () => {
  return (
    <>
      <FlexibleDiv flexBasis={"50%"}>
        <FlexibleDiv justifyContent={"flex-start"}>
          <FlexibleDiv justifyContent={"flex-start"}>
            <Text
              fontSize={fontSizes.mobile_details}
              fontWeight={"700"}
              margin={"0px 0px 7px 0px"}
              resFontSize={"12px"}
            >
              Product Price:
            </Text>
          </FlexibleDiv>
          <Input
            value={"N500"}
            readOnly
            width={"50%"}
            padding={"12px"}
            border={"1px solid lightgrey"}
            radius={"5px"}
          />
        </FlexibleDiv>
      </FlexibleDiv>
    </>
  );
};

export default OrderPrice;
