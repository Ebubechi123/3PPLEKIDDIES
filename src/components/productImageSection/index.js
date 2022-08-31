import React from 'react'
import FlexibleDiv from '../flexibleDiv/flexibleDiv.component';
import { Image } from '../image/image.component';
import ProductImage from "../../assets/images/product-6.jpg"
import styled from 'styled-components';

const ProductImg = styled(Image)`
@media only screen and (max-width:780px){
height: 10rem;
width: 100%;
}
`

const ProductImageSection = () => {
    return ( 
        <>
        <FlexibleDiv flexBasis={'40%'} breakPoint={"780px"} breakPointflexBasis={"100%"} >
       <FlexibleDiv padding={'20px'}breakPoint={"780px"} breakPointJustifyContent={"flex-start"}>
       <ProductImg src={ProductImage} width={"80%"} height={"100%"} objectFit={"cover"} />
       </FlexibleDiv>
        </FlexibleDiv>
        
        </>
     );
}
 
export default ProductImageSection;