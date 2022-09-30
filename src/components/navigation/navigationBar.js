import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import { colorTheme } from "../../infrastructure/theme/colors";
import FlexibleDiv from "../flexibleDiv/flexibleDiv.component";
import { CartIcon, CloseIcon, MenuIcon } from "../icons";
import Logo from "../logo/logo";
import { Text } from "../typography/typography.component";
import { Nav_Links } from "./navLinks";
import {
  CartNo,
  CartSection,
  CartText,
  LinkSection,
  LinkWrapper,
  LogoSection,
  MenuBarSection,
  NavBarStyles,
  NavBarWrapper,
  NavLinks,
} from "./styles";

const NavigationBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigation = useNavigate()
  const cart = useSelector((state)=>state.persistedReducer.cart)
  return (
    <>
      <NavBarWrapper shadow={toggleMenu ? "0px 0px 2px 1px lightgrey" : ""} >
        <NavBarStyles>
          <MenuBarSection>
            {/* Open Icon */}
            <MenuIcon
              size={18}
              cursor={"pointer"}
              color={"white"}
              onClick={() => {
                setToggleMenu(true);
              }}
              style={{ display: `${toggleMenu ? "none" : "block"}` }}
            />
            {/* Close Icon */}
            <CloseIcon
              cursor={"pointer"}
              color={"white"}
              style={{ display: `${toggleMenu ? "block" : "none"}` }}
              size={18}
              onClick={() => {
                setToggleMenu(false);
              }}
            />
          </MenuBarSection>
          <LogoSection>
            <Logo/>
          </LogoSection>

          <LinkSection>
            <LinkWrapper translate={toggleMenu ? 'translateX(0%)' :'translateX(-100%)'} >
              {Nav_Links.map(({ link, path },index) => (
            
                <Link to={`${path}`} key={index}  onClick={()=>{setToggleMenu(false)}}>
                <NavLinks key={index}>{link}</NavLinks>
                </Link>
            
              ))}
            </LinkWrapper>
          </LinkSection>

          <CartSection>
          <Link to={'/cart'}>
          <CartIcon cursor={"pointer"} color={"white"} />
          </Link>

           <Link style={{position:'relative'}}  to={'/cart'}>
            <CartNo  >
                <Text margin={"0px"} fontSize={'10px'} color={'white'} resFontSize={"10px"}>{cart.length}</Text>
            </CartNo>
           <CartText cursor={"pointer"} color={"white"} fontSize={"small"} fontWeight={"600"}>
              Shopping Bag
            </CartText>
           </Link>
          </CartSection>
        </NavBarStyles>
      </NavBarWrapper>
    </>
  );
};

export default NavigationBar;
