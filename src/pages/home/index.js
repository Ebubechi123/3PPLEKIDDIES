import Categories from "../../components/categories/categories.component";
import Features from "../../components/features/features.component";
import Hero from "../../components/hero/hero.component";
import TestHero from "../../components/hero/testHero";
import ProductSection from "../../components/productRow";
import { ProductRow } from "../../components/productRow/style";

const Home = () => {
    return ( 
        <>
       {/* <Hero/> */}
       <TestHero/>
       <Features/>
       <Categories/>
       <ProductSection/>
        </>
     );
}
 
export default Home;