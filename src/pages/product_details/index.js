import FlexibleDiv from "../../components/flexibleDiv/flexibleDiv.component";
import ProductDetailsSection from "../../components/productDetailsSection";
import ProductImageSection from "../../components/productImageSection";


const ProductDetails = () => {
    return ( 
        <>
        <FlexibleDiv padding={'20px 0px'} alignItems="flex-start" >
            <ProductImageSection/>
            <ProductDetailsSection/>
        </FlexibleDiv>
        </>
     );
}
 
export default ProductDetails;