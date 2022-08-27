import styled from "styled-components";
import { colorTheme } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fontSizes";
import { Text } from "../typography/typography.component";

export const NavBarWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  position: fixed;
  z-index: 999;
  top: 0px;
  left: 0px;
  padding: 5px;
  /* box-shadow: 0px 0px 2px 1px lightgrey; */
`;

export const NavBarStyles = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const LogoSection = styled.div`
  display: grid;
  place-content: center;
  width: 15%;
  @media screen and (max-width: 680px) {
    width: 70%;
  }
`;
export const LinkSection = styled.div`
  width: 60%;
  @media screen and (max-width: 680px) {
    width: 0%;
  }
`;

export const LinkWrapper = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 29px;
  @media screen and (max-width: 680px) {
    position: absolute;
    left: 0px;
    top: 56px;
    max-height: ${({ minHeight }) => (minHeight ? minHeight : "0px")};
    position: fixed;
    z-index: 999;
    width: 100%;
    left: 0px;
    background: lightgrey;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    transition: max-height 0.5s ease-in;
  }
`;

export const NavLinks = styled.li`
  font-size: ${fontSizes.mobile_details};
  color: grey;
  font-weight: 400;
  cursor: pointer;
  list-style: none;
  position: relative;

  &::after {
    content: "";
    height: 1.2px;
    background: black;
    width: 100%;
    left: 0px;
    top: 100%;
    transform: scaleX(0%);
    transition: transform 0.4s ease-in;
    position: absolute;
  }

  &:hover::after {
    transform: scaleX(100%);
  }
  @media screen and (max-width: 680px) {
    padding: 0px 23px;
    margin-bottom: 20px;
    margin-top: 20px;
    color: ${colorTheme.black.strong};
    &::after {
      top: 120%;
      left: 20px;
    }
    &:hover::after {
      transform: scaleX(100%);
    }
  }
`;

export const CartSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  width: 25%;
  padding-right: 33px;
  @media screen and (max-width: 680px) {
    width: 15%;
  }
`;

export const CartText = styled(Text)`
  @media screen and (max-width: 680px) {
    display: none;
  }
`;

export const MenuBarSection = styled.div`
  display: none;
  @media screen and (max-width: 680px) {
    display: grid;
    place-content: center;
    width: 15%;
  }
`;

