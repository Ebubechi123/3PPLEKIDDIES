import Categories from "../../components/categories/categories.component";
import Features from "../../components/features/features.component";
import Hero from "../../components/hero/hero.component";
import TestHero from "../../components/hero/testHero";
import ProductSection from "../../components/productRow";
import { ProductRow } from "../../components/productRow/style";
import { useSelector,useDispatch } from "react-redux";
import { fetchProducts, getProducts } from "../../state management/redux/slices/productSlice";
import { useEffect } from "react";
import client from "../../infrastructure/utils/client";
const Home = () => {
    const dispatch=useDispatch();
        useEffect(()=>{
        dispatch(getProducts())
        },[])
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