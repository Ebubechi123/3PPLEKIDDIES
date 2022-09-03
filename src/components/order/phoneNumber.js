import { fontSizes } from "../../infrastructure/theme/fontSizes";
import FlexibleDiv from "../flexibleDiv/flexibleDiv.component";
import Input from "../input/input.component";
import { Text } from "../typography/typography.component";

const PhoneNumber = () => {
    return ( 
        <>
    <FlexibleDiv flexBasis={"50%"} >
    <FlexibleDiv justifyContent={'flex-start'} >
    <FlexibleDiv justifyContent={'flex-start'}>
    <Text fontSize={fontSizes.mobile_details} fontWeight={"700"} margin={'0px 0px 7px 0px'} resFontSize={"12px"} >
        Your WhatsApp Number:
    </Text>
    </FlexibleDiv>
    <Input placeHolder={'(+234)'} type={"tel"} width={'80%'} padding={"12px"} border={'1px solid lightgrey'} radius={"5px"}  />
        
    </FlexibleDiv>
   </FlexibleDiv>
        </>
     );
}
 
export default PhoneNumber;