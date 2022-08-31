import styled from "styled-components";
import { colorTheme } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fontSizes";
import FlexibleDiv from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/typography.component";

const Box = styled.div`
  padding: 12px;
  background-color: white;
  text-align: center;
  border: 2px solid ${colorTheme.black.light};
  color: black;
  width: 64px;
  font-size: medium;
  font-weight: 500;
  border-radius: 5px;
  cursor: default;
`;

const ProductSizes = () => {
  return (
    <>
      <FlexibleDiv>
        <FlexibleDiv justifyContent={"flex-start"}>
          <Text
            fontSize={fontSizes.mobile_body_text}
            color={colorTheme.black.soft}
            fontWeight={"600"}
            textTransform={"uppercase"}
          >
            Sizes
          </Text>
        </FlexibleDiv>

        <FlexibleDiv justifyContent={"flex-start"} gap={"12px"}>
          {[0, 1, 2, 3, 4, 5, 6].map((index) => (
            <Box key={index}>6-9 M</Box>
          ))}
        </FlexibleDiv>
      </FlexibleDiv>
    </>
  );
};

export default ProductSizes;
