import { colorTheme } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fontSizes";
import FlexibleDiv from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/typography.component";

const ProductDescription = () => {
  return (
    <>
      <FlexibleDiv padding={"50px 0px"} lineHeight={"1.4rem"}>
        <Text
          fontSize={fontSizes.mobile_details}
          fontWeight={"600"}
          color={colorTheme.black.soft}
        >
          100% ultra soft organic cotton 110 gram.Beverages are not usually
          consumed for their food value, but many, particularly the fruit
          drinks, contain quite a high percentage of sugar, vitamins and
          minerals, and therefore, add to the energy content of the diet.
        </Text>
      </FlexibleDiv>
    </>
  );
};

export default ProductDescription;
