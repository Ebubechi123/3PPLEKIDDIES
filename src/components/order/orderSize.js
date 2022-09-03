import styled from "styled-components";
import { fontSizes } from "../../infrastructure/theme/fontSizes";
import FlexibleDiv from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/typography.component";
const Select = styled.select`
  width: 100%;
  outline: none;
  border: none;
`;

const Option = styled.option`
  width: 100%;
  padding: 12px;
  color: black;
`;
const OrderSize = () => {
  return (
    <>
      <FlexibleDiv  flexBasis={"50%"} >
        <FlexibleDiv justifyContent={"flex-start"}>
          <FlexibleDiv justifyContent={"flex-start"}>
            <Text
              fontSize={fontSizes.mobile_details}
              fontWeight={"700"}
              margin={"0px 0px 7px 0px"}
              resFontSize={"12px"}
            >
              Product Sizes:
            </Text>
          </FlexibleDiv>
          <FlexibleDiv width={'50%'} border={'1px solid lightgrey'} radius={"5px"} padding={"12px"} >
          <Select>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </>
  );
};

export default OrderSize;
