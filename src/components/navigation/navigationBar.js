import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { CartIcon, CloseIcon, MenuIcon } from "../icons";
import Logo from "../logo/logo";
import { Nav_Links } from "./navLinks";
import {
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
            <LinkWrapper minHeight={toggleMenu ? "100vh" : ""}>
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

           <Link  to={'/'}>
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
