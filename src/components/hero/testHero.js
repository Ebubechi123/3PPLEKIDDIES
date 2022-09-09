import {
  HeroTitle,
  Image1,
  Image2,
  TestCol,
  TestColImg,
  TestHeroSection,
  TestHeroWrapper,
} from "./styles";
import HeroImg1 from "../../assets/images/heroImg2.jpg";
import HeroImg2 from "../../assets/images/heroImg3.jpg";
import { Text } from "../typography/typography.component";
import { fontSizes } from "../../infrastructure/theme/fontSizes";
import Button from "../button/button.component";

const TestHero = () => {
  return (
    <TestHeroWrapper>
      <TestHeroSection>
        <TestCol>
          <HeroTitle
            margin={"0px"}
            color={"black"}
            fontSize={"50px"}
            resFontSize={fontSizes.desktop_subtitle}
          >
            Give Your Little <br /> Child A New Look!
          </HeroTitle>
          <Text
            margin={"12px 0px 22px 0px"}
            fontSize={fontSizes.mobile_details}
            resFontSize={"small"}
          >
            Get your little one quality cloths, toys and accessories.
          </Text>
          <Button
            padding={"12px"}
            width={"120px"}
            color={"white"}
            radius={"4px"}
          >
            Shop Now
          </Button>
        </TestCol>
        <TestColImg>
          <Image1 src={HeroImg1} />
          <Image2 src={HeroImg2} />
        </TestColImg>
      </TestHeroSection>
    </TestHeroWrapper>
  );
};

export default TestHero;
