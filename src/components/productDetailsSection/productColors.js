import styled from "styled-components";
import { colorTheme } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fontSizes";
import FlexibleDiv from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/typography.component";

const ColorBall = styled.div`
  padding: 4px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${({ bg }) => (bg ? bg : "")};
  border: ${({ border }) => (border ? border : "none")};
  cursor: default;
`;

const ProductColors = ({colors}) => {
  return (
    <>
      <FlexibleDiv padding={"20px 0px"}>
        {/* Title */}
        <FlexibleDiv justifyContent={"flex-start"}>
          <Text
            fontSize={fontSizes.mobile_body_text}
            color={colorTheme.black.soft}
            fontWeight={"600"}
            textTransform={"uppercase"}
          >
            Available Colors
          </Text>
        </FlexibleDiv>

        {/* Colors */}

        <FlexibleDiv justifyContent={"flex-start"} gap={"12px"}>
          {[
            {
              index: 0,
              color: "teal",
            },
            {
              index: 1,
              color: "black",
            },
            {
              index: 2,
              color: "purple",
            },
          ].map(({ color, index }) => (
            <ColorBall bg={color} id={index} key={index} />
          ))}
        </FlexibleDiv>
      </FlexibleDiv>
    </>
  );
};

export default ProductColors;
