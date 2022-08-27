import { colorTheme } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fontSizes";
import Button from "../button/button.component";
import FlexibleDiv from "../flexibleDiv/flexibleDiv.component";
import { HeaderText, Text } from "../typography/typography.component";
import {
  HeroColumn,
  HeroRow,
  HeroSection,
  HeroWrapper,
} from "./styles";

const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <HeroSection>
          <HeroRow>
            <HeroColumn>
              <HeaderText color={"white"} fontSize={"60px"}>
                Give Your Baby A New Look!
              </HeaderText>
              <Text color={"white"} fontSize={fontSizes.mobile_subtitle}>
                Get your little one quality cloths, toys and accessories.
              </Text>
              <FlexibleDiv>
                <Button
                  padding={"17px"}
                  background={"white"}
                  color={"black"}
                  width="120px"
                  radius={"2px"}
                  hoverBackground={"black"}
                  hoverBorder={"1px solid black"}
                  hoverColor={"white"}
                >
                  Shop Now
                </Button>
              </FlexibleDiv>
            </HeroColumn>

            <HeroColumn></HeroColumn>
          </HeroRow>
        </HeroSection>
      </HeroWrapper>
    </>
  );
};

export default Hero;
