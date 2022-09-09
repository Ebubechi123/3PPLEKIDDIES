
import React, { useState } from "react";
import styled from "styled-components";
import FlexibleDiv from "../../components/flexibleDiv/flexibleDiv.component";
import { ArrowDownIcon, ArrowUpIcon } from "../../components/icons";
import { Text } from "../../components/typography/typography.component";
import { fontSizes } from "../../infrastructure/theme/fontSizes";
import { Image } from "../../components/image/image.component";
import IMG1 from "../../assets/images/product-1.jpg"
import IMG2 from "../../assets/images/product-11.jpg"
import IMG3 from "../../assets/images/product-3.jpg"
import IMG4 from "../../assets/images/product-4.jpg"
import IMG5 from "../../assets/images/product-5.jpg"
import IMG6 from "../../assets/images/product-6.jpg"
import IMG7 from "../../assets/images/product-7.jpg"
import IMG8 from "../../assets/images/product-8.jpg"
import IMG9 from "../../assets/images/product-9.jpg"
import IMG10 from "../../assets/images/product-10.jpg"
const ListContainer = styled.ul`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  gap:12px;
  padding: 0px 8px;;
  line-height: 1.9em;
  flex-wrap: wrap;
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  overflow: hidden;
  transition: 0.6s ease-in-out;
`;

const List = styled.li`
  padding: 0px;
  color: black;
  list-style-type: none;
  cursor: default;
  font-size: small;
  font-weight: 500;
`;

const LIST_PRODUCT_IMAGES = () => {

    const imgs=[
        {
            id:Math.random(),
            img:IMG1
        },
        {
            id:Math.random(),
            img:IMG2
        },
        {
            id:Math.random(),
            img:IMG3
        },
        {
            id:Math.random(),
            img:IMG4
        },
        {
            id:Math.random(),
            img:IMG5
        },
        {
            id:Math.random(),
            img:IMG6
        },
        {
            id:Math.random(),
            img:IMG6
        },
        {
            id:Math.random(),
            img:IMG7
        },
        {
            id:Math.random(),
            img:IMG8
        },
        {
            id:Math.random(),
            img:IMG9
        },
        {
            id:Math.random(),
            img:IMG10
        },
    ]








    const [dropDown, setDropDown] = useState(false);
    return (
      <FlexibleDiv margin={"32px 0px"} justifyContent={"flex-start"}>
        <FlexibleDiv
          width={"100%"}
          border={".9px solid lightgrey"}
          radius={"5px"}
          height={dropDown ? "auto" : "35.1px"}
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
              Images of Products
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
          <ListContainer maxHeight={dropDown ? "auto" : "0px"} >
            {imgs.map(({img,id})=>(
                <Image key={id} src={img} width={'20%'} height={'20%'} radius={"5px"} objectFit={"cover"} />
            ))}
          </ListContainer>
        </FlexibleDiv>
      </FlexibleDiv>
    );
}
 
export default LIST_PRODUCT_IMAGES;





