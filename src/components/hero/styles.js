import styled from "styled-components";
import BgImg from "../../assets/images/siblings.jpg";
import { HeaderText } from "../typography/typography.component";
export const HeroWrapper = styled.header`
  width: 100%;
  /* background:linear-gradient(27deg, #d9c4c42e,#f1ca888c); */
  background-image: linear-gradient(rgba(0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url(${(img)=>img ? img :BgImg});
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

export const TestHeroWrapper = styled.div`
  padding: 23px 0px;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;
  /* height: 100vh; */
`;

export const TestHeroSection = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  position: relative;
  height: 100%;
`;

export const TestCol = styled.div`
  flex-basis: 50%;
  min-width: 300px;
  position: relative;
  @media screen and (max-width: 780px) {
    flex-basis: 55%;
  }
  @media screen and (max-width: 680px) {
    flex-basis: 100%;
  }
`;

export const TestColImg = styled.div`
  flex-basis: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 22px;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    right: -27px;
    top: -18px;
    border-bottom-left-radius: 10px;
    background-color: #1010f50f;
    /* background-color: red; */
  }
  @media screen and (max-width: 780px) {
    flex-basis: 45%;
  }
  @media screen and (max-width: 680px) {
    margin-top: 45px;
    flex-basis: 90%;
    &::after {
      right: 0px;
    }
  }
`;

export const Image1 = styled.img`
  width: 40%;
  height: 40%;
  object-fit: cover;
  z-index: 1;
  @media screen and (max-width: 680px) {
    width: 40%;
  }
`;
export const Image2 = styled.img`
  width: 60%;
  height: 60%;
  object-fit: cover;
  /* filter: grayscale(0.9); */
  z-index: 1;
  @media screen and (max-width: 680px) {
    width: 40%;
  }
`;

export const HeroTitle = styled(HeaderText)`
  @media screen and (max-width: 880px) {
    font-size: 40px;
  }
  @media screen and (max-width: 780px) {
    font-size: 40px;
  }
  @media screen and (max-width: 680px) {
    font-size: 30px;
  }
`;
