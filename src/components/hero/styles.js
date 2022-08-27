import styled from "styled-components";
import BgImg from "../../assets/images/siblings.jpg"
export const HeroWrapper = styled.header`
  width: 100%;
  /* background:linear-gradient(27deg, #d9c4c42e,#f1ca888c); */
  background-image: linear-gradient(rgba(0,0,0.2),rgba(0,0,0,0.5)), url(${BgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 65vh;
`;

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const HeroRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
`;

export const HeroColumn = styled.div`
text-align: center;
line-height: 2rem;
`;

