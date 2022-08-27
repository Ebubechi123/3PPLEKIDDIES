import styled from "styled-components";
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
        </LayoutStyle>
        </>
     );
}
 
export default Layout;