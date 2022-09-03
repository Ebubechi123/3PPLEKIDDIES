import FlexibleDiv from "../flexibleDiv/flexibleDiv.component";
import { OrderTitle } from "./style";

const Title = () => {
    return ( 
        <FlexibleDiv justifyContent={'flex-start'} >
            <OrderTitle>
              Place an Order
            </OrderTitle>
          </FlexibleDiv>
     );
}
 
export default Title;