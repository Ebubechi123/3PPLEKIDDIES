import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import FlexibleDiv from "../../components/flexibleDiv/flexibleDiv.component";
import { ArrowDownIcon, ArrowUpIcon } from "../../components/icons";
import { Text } from "../../components/typography/typography.component";
import { fontSizes } from "../../infrastructure/theme/fontSizes";

const ListContainer = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 8px;
  line-height: 1.9em;
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  overflow: hidden;
  transition: 0.6s ease-in-out;
  z-index: 1;
`;

const List = styled.li`
  padding: 0px;
  color: black;
  list-style-type: none;
  cursor: default;
  font-size: small;
  font-weight: 500;
  z-index: 1;

  @media screen and (max-width:680px) {
    font-size: x-small;
  }
`;

function LIST_OF_PRODUCT_NAMES({}) {
  const [dropDown, setDropDown] = useState(false);
  const product = useSelector((state) => state.persistedReducer.cart);
  return (
    <FlexibleDiv margin={"12px 0px"} justifyContent={"flex-start"}>
      <FlexibleDiv
        width={"100%"}
        border={".9px solid lightgrey"}
        radius={"5px"}
        height={dropDown ? "auto" : "35.1px"}
        breakPoint={"680px"}
        breakPointwidth={"90%"}
        onClick={() => setDropDown(!dropDown)}
      >
        <FlexibleDiv
          justifyContent={"space-between"}
          padding={"8px"}
          borderBottom={"1px solid lightgrey"}
        >
          <Text
            fontWeight={"700"}
            fontSize={fontSizes.mobile_details}
            margin={"0px"}
            resFontSize={'small'}
          >
            List Of Products
          </Text>

          {dropDown ? (
            <ArrowUpIcon
              cursor={"pointer"}
              onClick={() => setDropDown(!dropDown)}
            />
          ) : (
            <ArrowDownIcon
              cursor={"pointer"}
              onClick={() => setDropDown(!dropDown)}
            />
          )}
        </FlexibleDiv>
        <ListContainer maxHeight={dropDown ? "auto" : "0px"} onClick={(e)=>{
            e.stopPropagation()
          }} >
          {/* <List>Red Gucci T-shirt</List>
          <List>Seven-By-Chacha children hoodie</List>
          <List>Luis Vuitton Blue shorts</List> */}
          {product.map(({name})=>(
            <List>{name}</List>
          ))}
        
        </ListContainer>
      </FlexibleDiv>
    </FlexibleDiv>
  );
}

export default LIST_OF_PRODUCT_NAMES;
