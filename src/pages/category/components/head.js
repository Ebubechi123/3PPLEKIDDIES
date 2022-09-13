import FlexibleDiv from "../../../components/flexibleDiv/flexibleDiv.component";
import { ProductData } from "../../../components/productRow/productData";
import { Text } from "../../../components/typography/typography.component";
import { colorTheme } from "../../../infrastructure/theme/colors";
import { fontSizes } from "../../../infrastructure/theme/fontSizes";
import Filter from "./filter";

const Head = () => {
  return (
    <>
      <FlexibleDiv justifyContent={"center"} padding={"120px 0px 0px 0px"}>
        <FlexibleDiv
          justifyContent={"space-between"}
          width={"77%"}
          breakPoint={"680px"}
          breakPointwidth={"86%"}
        >
          {/* No of products in this category */}
          <FlexibleDiv width={"50%"} justifyContent={"flex-start"}>
            <Text
              margin={"0px"}
              fontSize={fontSizes.mobile_body_text}
              color={colorTheme.black.soft}
              fontWeight={"600"}
              resFontSize={"small"}
            >
              Showing all {ProductData.length} results
            </Text>
          </FlexibleDiv>

          {/* Filter */}
          <Filter />
        </FlexibleDiv>
      </FlexibleDiv>
    </>
  );
};

export default Head;
