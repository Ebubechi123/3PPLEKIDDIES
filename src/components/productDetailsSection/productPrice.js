import { colorTheme } from "../../infrastructure/theme/colors";
import FlexibleDiv from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/typography.component";

const ProductPrice = ({price}) => {
  return (
    <>
      <FlexibleDiv justifyContent={"flex-start"}>
        <Text
          fontSize={"1.3rem"}
          color={colorTheme.black.strong}
          margin={"0px"}
          fontWeight={"800"}
        >
          N 500
        </Text>
      </FlexibleDiv>
    </>
  );
};

export default ProductPrice;
