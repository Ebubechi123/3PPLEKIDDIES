import styled from "styled-components";
import { colorTheme } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fontSizes";



export const HeaderText = styled.h1`
top:${({top})=>top ? top : ''};
position:relative;
color:${({color})=> color ? color : colorTheme.black.strong };
font-size:${({fontSize})=>fontSize ? fontSize : fontSizes.desktop_header};
line-height:${({lineHeight})=>lineHeight ? lineHeight : ''};
font-weight:${({fontWeight})=>fontWeight ? fontWeight : ''};
font-family:${({fontFamily})=>fontFamily ? fontFamily : ''};

@media only screen and (max-width:680px){
    font-size:${({resFontSize})=> resFontSize ? resFontSize : fontSizes.mobile_header};
}
@media only screen and (max-width:380px){
    font-size:${({smallScreenFontSize})=>smallScreenFontSize ? smallScreenFontSize :"1.5rem"};
}

`
export const Text = styled.p`
position:relative;
width:${({width})=>width ? width :''};
color:${({color})=> color ? color : colorTheme.black.strong };
top:${({top})=>top ? top : ''};
font-size:${({fontSize})=>fontSize ? fontSize : fontSizes.desktop_body_text};
line-height:${({lineHeight})=>lineHeight ? lineHeight : ''};
font-weight:${({fontWeight})=>fontWeight ? fontWeight : ''};
font-family:${({fontFamily})=>fontFamily ? fontFamily : ''};
margin: ${({margin})=>margin ? margin :''};
margin-left:${({marginLeft})=>marginLeft? marginLeft :""};
margin-right:${({marginRight})=>marginRight? marginRight :""};
text-transform: ${({textTransform})=>textTransform ? textTransform :''};
cursor:${({cursor})=>cursor ? cursor :'text'};
transition: color .7s ease-in;
text-overflow: ${({textOverflow})=>textOverflow ? textOverflow :''};
white-space: ${({whiteSpace})=>whiteSpace ? whiteSpace :''};
overflow: ${({overflow})=>overflow ? overflow :''};
              /* whiteSpace: " nowrap",
              overflow: "hidden", */
&:hover{
    color:${({hoverColor})=>hoverColor ? hoverColor :''}
}

@media only screen and (max-width:680px){
    display: ${({resDisplay})=>resDisplay ? resDisplay:""};
    font-size:${({resFontSize})=> resFontSize ? resFontSize : fontSizes.mobile_body_text};
    line-height:${({reslineHeight})=>reslineHeight ? reslineHeight : ''};
    width:${({resWidth})=>resWidth ? resWidth :''};
}
`