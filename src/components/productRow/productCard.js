import { Link } from "react-router-dom";
import { fontSizes } from "../../infrastructure/theme/fontSizes";
import FlexibleDiv from "../flexibleDiv/flexibleDiv.component";
import { CartIcon } from "../icons";
import { Cart, ProductCardStyle, ProductImage, ProductPrice, ProductTitle } from "./style";
import { useDispatch } from "react-redux";
import { addToCart } from "../../state management/redux/actions/cartAction";
const ProductCard = ({img,title,price,product}) => {
    const dispatch= useDispatch()

    const CartHandler =(product)=>{
        dispatch(addToCart(product))
    }
    return ( 
        <>
    <ProductCardStyle>
        <FlexibleDiv>
            <ProductImage width={'100%'} height={'70%'} objectFit={"cover"} src={img} alt={title} />
        </FlexibleDiv>
        <FlexibleDiv padding={'1rem'} justifyContent={'space-evenly'} alignItems={'flex-start'} direction={"column"} lineHeight={"1.3rem"} >
        <ProductTitle fontSize={fontSizes.mobile_details} resFontSize={"smaller"} >{title}</ProductTitle>
        <ProductPrice fontSize={fontSizes.mobile_body_text} resFontSize={"14px"}>N{price}</ProductPrice>
        </FlexibleDiv>
        <Cart onClick={()=>{CartHandler(product)}} >
            <CartIcon />
        </Cart>
        </ProductCardStyle>
        </>
     );
}
 
export default ProductCard;