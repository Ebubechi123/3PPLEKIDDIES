import React from 'react';
import styled from 'styled-components';import { colorTheme } from '../../infrastructure/theme/colors';



const ButtonStyles = styled.button`
width:${({width})=>width ? width : ''};
height:${({height})=> height ? height : ''};
padding:${({padding})=>padding ? padding : ''};
border-radius:${({radius})=>radius ? radius : ''};
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
font-size:${({fontSize})=>fontSize ? fontSize : ''};
font-weight:${({fontWeight})=>fontWeight ? fontWeight : ''};
color:${({color})=>color ? color : 'white'};
background:${({background })=>background ? background :colorTheme.primary_color};
border:${({border})=>border ? border : 'none'};
outline:${({outline})=> outline ? outline : 'none'};
transition: background .5s ease-in;
position:relative;
top:${({top})=>top ? top : ''};
&:hover{
transition:.5s ease-in;
color:${({hoverColor})=>hoverColor ? hoverColor : colorTheme.secondary_color};
background:${({hoverBackground})=>hoverBackground ? hoverBackground :'white'};
border:${({hoverBorder})=>hoverBorder ? hoverBorder :`.9px solid ${colorTheme.secondary_color}`};
}
`
const Button = ({
    children,
    style,
    background,
    fontWeight,
    fontSize,
    color,
    padding,
    height,
    width,
    radius,
    border,
    outline,
    top,
    hoverColor,
    hoverBackground,
    hoverBorder,
    onClick
}) => {
    return ( 
       <ButtonStyles style={style} onClick={onClick} background={background} fontSize={fontSize} fontWeight={fontWeight} color={color} padding={padding} height={height} width={width} 
       radius={radius} border={border} outline={outline} top={top} hoverColor={hoverColor} hoverBackground={hoverBackground} hoverBorder={hoverBorder}
       >
{children}
       </ButtonStyles>
     );
}
 
export default Button;