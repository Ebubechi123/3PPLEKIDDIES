import styled from "styled-components";
import { colorTheme } from "../../infrastructure/theme/colors";

export const FooterWrapper = styled.div`
width: 100%;
position: relative;
/* position: absolute; */
margin-top: 290px;
left: 0px;
bottom: 0px;
/* background-color: #404040; */
background-color: ${colorTheme.primary_color};
padding: 10px 0px;
`

export const FooterLinkWrapper= styled.ul`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 19px;
margin-top: 40px;
`
export const FooterLinks = styled.li`
font-size: 12px;
font-weight: 600;
color: white;
text-transform: capitalize;
list-style-type: none;
width: 30px;
height:30px;
border-radius: 50%;
border:1px solid white;
padding: 3px;
text-align: center;
display: grid;
place-content: center;
cursor: pointer;
@media screen and (max-width:680px) {
    font-size: xx-small;
}
`