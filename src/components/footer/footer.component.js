import { fontSizes } from "../../infrastructure/theme/fontSizes";
import FlexibleDiv from "../flexibleDiv/flexibleDiv.component";
import {
  ChatIcon,
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  PhoneIcon,
  TwitterIcon,
} from "../icons";
import Logo from "../logo/logo";
import { HeaderText, Text } from "../typography/typography.component";
import { FooterLinks, FooterLinkWrapper, FooterWrapper } from "./styles";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        {/* Logo */}
        <FlexibleDiv
          direction={"column"}
          justifyContent={"center"}
          padding={"30px 0px"}
        >
          <Logo width={"90px"} height={"90px"} />
          <HeaderText
            margin={"0px"}
            color={"white"}
            fontSize={fontSizes.desktop_subtitle}
            resFontSize={fontSizes.mobile_body_text}
          >
            3PPLEKIDDIES
          </HeaderText>
        </FlexibleDiv>

        {/* Contact */}
        <FlexibleDiv padding={"12px 0px"}>
          <FlexibleDiv
            width={"70%"}
            justifyContent={"center"}
            breakPoint={"680px"}
            breakPointwidth={"100%"}
          >
            <FlexibleDiv
              width={"30%"}
              justifyContent={"center"}
              gap={"12px"}
              wrap={"nowrap"}
            >
              <PhoneIcon size={23} color={"white"} />
              <Text
                margin={"0px"}
                color={"white"}
                fontSize={"15px"}
                resFontSize={"9px"}
              >
                08092962213
              </Text>
            </FlexibleDiv>
            <FlexibleDiv width={"30%"} justifyContent={"center"} gap={"12px"}>
              <ChatIcon size={23} color={"white"} />
              <Text
                margin={"0px"}
                color={"white"}
                fontSize={"15px"}
                resFontSize={"9px"}
              >
                ebube2003nice@gmail.com
              </Text>
            </FlexibleDiv>
            <FlexibleDiv
              width={"30%"}
              justifyContent={"center"}
              gap={"12px"}
              wrap={"nowrap"}
            >
              <LocationIcon size={23} color={"white"} />
              <Text
                margin={"0px"}
                color={"white"}
                fontSize={"15px"}
                resFontSize={"9px"}
              >
                FCT,Nigeria
              </Text>
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>

        {/* Line */}

        <FlexibleDiv justifyContent={"center"} padding={"80px 0px 0px 0px"}>
          <FlexibleDiv
            height={"1.7px"}
            bg={"lightgrey"}
            width={"80%"}
          ></FlexibleDiv>
        </FlexibleDiv>

        {/* Bottom */}

        <FlexibleDiv justifyContent={"center"}>
          <FlexibleDiv
            width={"80%"}
            breakPoint={"680px"}
            breakPointwidth={"100%"}
          >
            <FlexibleDiv width={"100%"}>
              <FooterLinkWrapper>
                <FooterLinks>
                  <FacebookIcon size={16} color={"white"} />
                </FooterLinks>
                <FooterLinks>
                  <TwitterIcon size={16} color={"white"} />
                </FooterLinks>
                <FooterLinks>
                  <InstagramIcon size={16} color={"white"} />
                </FooterLinks>
              </FooterLinkWrapper>
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </FooterWrapper>
    </>
  );
};

export default Footer;
