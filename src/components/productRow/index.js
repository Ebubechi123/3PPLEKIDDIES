import Accessories from "./accessories/accessories.component";
import Boys from "./boys/boys.component";
import Girls from "./girls/girls.component";
import { ProductWrapper } from "./style";
import Toys from "./toys/toys.component";

const ProductSection = () => {
    return ( 
        <>
        
   <ProductWrapper>
   <Boys/>
   <Girls/>
   <Toys/>
   <Accessories/>
   </ProductWrapper>
        
        </>
     );
}
 
export default ProductSection;