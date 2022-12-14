import styled from "styled-components";
import { colorTheme } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fontSizes";
import { Text } from "../typography/typography.component";

export const NavBarWrapper = styled.div`
  width: 100%;
  height: 65px;
  background-color:${colorTheme.primary_color};
  position: fixed;
  z-index: 999;
  top: 0px;
  left: 0px;
  padding: 5px;
  box-shadow: ${({shadow})=>shadow ? shadow:''};
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
  @media screen and (max-width: 740px) {
    width: 70%;
  }
`;
export const LinkSection = styled.div`
  width: 60%;
  @media screen and (max-width: 790px) {
    width: 65%;
  }
  @media screen and (max-width: 740px) {
    width: 0%;
  }
`;

export const LinkWrapper = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  position: relative;

  gap: 29px;
  @media screen and (max-width: 740px) {
    position: absolute;
    left: 0px;
    top: 56px;
    height: 600px;
    position: fixed;
    z-index: 999;
    width: 100%;
    left: 0px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    transition: max-height 0.5s ease-in;
    transition: transform 0.3s ease-in-out ;
    transform: ${({translate})=> translate ? translate : 'translateX(-100%)'};
  }
`;

export const NavLinks = styled.li`
  font-size: ${fontSizes.mobile_details};
  color: white;
  font-weight: 400;
  cursor: pointer;
  list-style: none;
  position: relative;
  text-align: center;

  &::after {
    content: "";
    height: 1.2px;
    background: white;
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
  @media screen and (max-width: 740px) {
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
  @media screen and (max-width: 790px) {
    width: 10%;
  }
  @media screen and (max-width: 680px) {
    width: 15%;
  }
`;

export const CartText = styled(Text)`
margin-left: 7px;
  @media screen and (max-width: 790px) {
    display: none;
  }
`;
export const CartNo = styled.div`
position: absolute;
z-index:1;
top:0px;
width: 25px;
height: 25px;
text-align: center;
border-radius: 50%;
background-color: black;
display:grid;
left: -20px;
place-content: center;
@media screen and (max-width: 790px) {
    top: -25px;
  }
`

export const MenuBarSection = styled.div`
  display: none;
  @media screen and (max-width: 740px) {
    display: grid;
    place-content: center;
    width: 15%;
  }
`;

