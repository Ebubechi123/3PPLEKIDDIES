import styled from "styled-components";
import Footer from "../../components/footer/footer.component";
import NavigationBar from "../../components/navigation/navigationBar";

const LayoutStyle = styled.div`
width: 100%;
height: 100%;
padding: 0px;
margin: 0px;
display: block;
position: relative;
`

const MainSection = styled.div`
width: 100%;
position: relative;
top: 70px;
`

const Layout = ({children}) => {
    return ( 
        <>
        <LayoutStyle>
            <NavigationBar/>
          <MainSection>
          {children}
          </MainSection>
          <Footer/>
        </LayoutStyle>
        </>
     );
}
 
export default Layout;