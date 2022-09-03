import styled from "styled-components";
import { fontSizes } from "../../infrastructure/theme/fontSizes";
import { HeaderText } from "../typography/typography.component";

export const OrderWrapper = styled.div`
  width: 100%;
  transform: ${({ transform }) => (transform ? transform : "translateX(100%)")};
  position: absolute;
  left: 0px;
  top: 0px;
  min-height: 100vh;
  height: 100vh;
  z-index: 9999;
  background-color: #282727a3;
  position: fixed;
`;

export const OrderContainer = styled.div`
  position: relative;
  width: 500px;
  padding: 12px;
  height: 100%;
  background-color: white;
  transform: ${({ transform }) => (transform ? transform : "translateX(100%)")};
  float: right;
  box-shadow: 0px 8px 1px 0px lightgrey;
  transition: transform 0.7s ease-in-out;
  @media only screen and (max-width: 740px) {
    position: absolute;
    width: 100%;
    bottom: 0px;
    float: none;
    height: 60vh;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: transform 0.4s ease-in-out;
    padding: 23px 12px;
    transform: ${({ restransform }) =>
      restransform ? restransform : "translateY(-100%)"};
  }
`;

export const OrderTitle = styled(HeaderText)`
  margin: 0px;
  font-size: ${fontSizes.desktop_subtitle};
  @media only screen and (max-width: 680px) {
    font-size:${fontSizes.mobile_body_text}
  }
`;

