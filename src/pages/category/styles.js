import styled from "styled-components";
import HeroImg from "../../assets/images/heroImg1.jpg"
export const CategoryHero = styled.div`
position: relative;
top: 1px;
  background-image: linear-gradient(rgba(0, 0,0, 0.4), rgba(0, 0, 0, 0.9)),
    url(${HeroImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width:680px) {
    height: 45vh;
  }
`;

 export const Curve = styled.div`
background-color: white;
position: absolute;
top: 80%;
width: 80%;
/* left: 0px; */
z-index: 1;
padding: 75px;
border-bottom-left-radius: 50px;
margin: auto 0px;
/* right: 0px; */

border-collapse: collapse;
`



export const FilterUl = styled.ul`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding: 0px;
`

export const FilterList = styled.li`
list-style: none;
margin-top: 9px;
cursor: pointer;
font-size: smaller;
font-weight: 400;
`