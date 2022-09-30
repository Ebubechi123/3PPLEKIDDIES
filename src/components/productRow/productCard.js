import { Link, useNavigate } from "react-router-dom";
import { fontSizes } from "../../infrastructure/theme/fontSizes";
import FlexibleDiv from "../flexibleDiv/flexibleDiv.component";
import { CartIcon } from "../icons";
import { Cart, CountInStock, ProductCardStyle, ProductImage, ProductPrice, ProductTitle } from "./style";
import { useDispatch } from "react-redux";
import UrlFor from "../../infrastructure/utils/imageBuilder";
import { addToCart } from "../../state management/redux/slices/cartSlices";
const ProductCard = ({img,title,price,product}) => {
    const dispatch= useDispatch()

    const CartHandler =(product)=>{
        dispatch(addToCart(product))
    }

    const navigate =useNavigate()

    return ( 
        <>
       
        <ProductCardStyle onClick={()=>{navigate(`/product-details/${product.slug.current}`)}} >
        <FlexibleDiv>
            <ProductImage width={'100%'} height={'230px'} objectFit={"cover"} src={product ? UrlFor(product.image).url() : img } alt={title} />
        </FlexibleDiv>
        <FlexibleDiv padding={'1rem'} justifyContent={'space-evenly'} alignItems={'flex-start'} direction={"column"} lineHeight={"1.3rem"} >
       <FlexibleDiv justifyContent={'space-between'} >
       <ProductTitle fontSize={fontSizes.mobile_details} resFontSize={"smaller"} >{ product? product.name:  title}</ProductTitle>
       <CountInStock fontSize={'14px'} resFontSize={"10px"} > In stock </CountInStock>
       </FlexibleDiv>
        <ProductPrice fontSize={fontSizes.mobile_body_text} resFontSize={"14px"}>N{product ? product.price : price}</ProductPrice>
       
        </FlexibleDiv>
        <Cart onClick={(e)=>{
            CartHandler(product);
            e.stopPropagation()
            
            }} >
            <CartIcon />
        </Cart>
        </ProductCardStyle>

        </>
     );
}
 
export default ProductCard;