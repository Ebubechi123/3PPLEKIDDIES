import styled from "styled-components";
import { colorTheme } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fontSizes";
import {Image} from "../image/image.component";
import { HeaderText, Text } from "../typography/typography.component";


export const ProductWrapper = styled.section`
width: 100%;
margin: 30px 0px;
overflow-x: hidden;
`
export const ProductSectionStyle = styled.section`
width: 100%;
margin: 30px 0px;
overflow-x: hidden;
`

export const ProductSectionTitle = styled(HeaderText)`
margin:0px;
@media only screen and (max-width:380px){
    font-size: ${fontSizes.mobile_subtitle};
}
`

export const ProductTitle = styled(Text)`
margin:0px;
color: rgb(100 97 97 / 92%);
font-weight: 600;
@media only screen and (max-width:380px){
    font-size: xx-small;
}
`
export const ProductPrice = styled(Text)`
margin:0px;
color:${colorTheme.black.strong};
font-weight: 800;
@media only screen and (max-width:380px){
    font-size: medium;
}
`
export const CountInStock = styled(Text)`
margin:5px 0px;
color:${colorTheme.black.strong};
font-weight: 500;
background:#01eb0161;

border-radius: 5px;
padding:5px;
@media only screen and (max-width:380px){
    font-size: medium;
}
`

export const ProductRow = styled.div`
width:90%;
padding:15px;
margin: auto;
display: flex;
gap:22px;
align-items: center;
justify-content: space-evenly;

@media only screen and (max-width:680px){
    flex-wrap:wrap;
    padding: 0px;
}
`

export const ProductCardStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
flex-basis: 25%;
@media only screen and (max-width:680px){
   flex-basis:40%;
}
`

export const ProductImage = styled(Image)`
@media only screen and (max-width:680px){
   height:9rem;
}
`
export const Cart = styled.div`
background-color: white;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
border-radius: 50%;
padding: 10px;
top: 20px;
right:10px;
cursor: pointer;
@media only screen and (max-width:680px){
   padding:8px;
   font-size: 12px;
}
`