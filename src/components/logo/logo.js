import { Image } from "../image/image.component";
import logo from '../../assets/images/mainLogo.png'
import styled from "styled-components";

const LogoImage  = styled(Image)`
width: ${({width})=>width ? width :'90%'};
height: ${({height})=>height ? height :'90%'};
@media only screen and (max-width:780px){
width: 112px;
}
`

const Logo = ({width,height}) => {
    return ( 
       <>
        <LogoImage width={width} height={height} src={logo}  objectFit={"cover"} />
       </>
     );
}
 
export default Logo;