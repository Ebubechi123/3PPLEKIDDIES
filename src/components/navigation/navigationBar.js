import React, { useState } from "react";
import { CartIcon, CloseIcon, MenuIcon } from "../icons";
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
  return (
    <>
      <NavBarWrapper>
        <NavBarStyles>
          <MenuBarSection>
            {/* Open Icon */}
            <MenuIcon
              size={18}
              cursor={"pointer"}
              onClick={() => {
                setToggleMenu(true);
              }}
              style={{ display: `${toggleMenu ? "none" : "block"}` }}
            />
            {/* Close Icon */}
            <CloseIcon
              cursor={"pointer"}
              style={{ display: `${toggleMenu ? "block" : "none"}` }}
              size={18}
              onClick={() => {
                setToggleMenu(false);
              }}
            />
          </MenuBarSection>
          <LogoSection>
            <h4>Logo</h4>
          </LogoSection>

          <LinkSection>
            <LinkWrapper minHeight={toggleMenu ? "400px" : ""}>
              {Nav_Links.map(({ link, path }) => (
                <NavLinks>{link}</NavLinks>
              ))}
            </LinkWrapper>
          </LinkSection>

          <CartSection>
            <CartIcon cursor={"pointer"} />
            <CartText cursor={"pointer"} fontSize={"small"} fontWeight={"600"}>
              Shopping Bag
            </CartText>
          </CartSection>
        </NavBarStyles>
      </NavBarWrapper>
    </>
  );
};

export default NavigationBar;
