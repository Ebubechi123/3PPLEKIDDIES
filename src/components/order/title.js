import FlexibleDiv from "../flexibleDiv/flexibleDiv.component";
import { OrderTitle } from "./style";

const Title = ({title}) => {
    return ( 
        <FlexibleDiv justifyContent={'flex-start'} >
            <OrderTitle>
             {title ? title :'Place an Order'}
            </OrderTitle>
          </FlexibleDiv>
     );
}
 
export default Title;