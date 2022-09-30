import { colorTheme } from "../../infrastructure/theme/colors";
import FlexibleDiv from "../flexibleDiv/flexibleDiv.component";
import { HeaderText } from "../typography/typography.component";

const ProductTitle = ({ title }) => {
  return (
    <>
      <FlexibleDiv justifyContent={"flex-start"}>
        <HeaderText
          fontSize={"2rem"}
          color={colorTheme.ash}
          margin={"0px"}
          resFontSize={"1.5rem"}
        >
         {title}
        </HeaderText>
      </FlexibleDiv>
    </>
  );
};

export default ProductTitle;
