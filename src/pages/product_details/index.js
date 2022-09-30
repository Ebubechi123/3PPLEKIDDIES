import FlexibleDiv from "../../components/flexibleDiv/flexibleDiv.component";
import ProductDetailsSection from "../../components/productDetailsSection";
import ProductImageSection from "../../components/productImageSection";
import { useParams } from "react-router-dom";
import client from "../../infrastructure/utils/client";
import { useEffect } from "react";
import { GetSingleProduct } from "../../state management/context/singleProduct";

const ProductDetails = () => {
  const { slug } = useParams();
  const [, setSingleProduct] = GetSingleProduct();
  useEffect(() => {
    client
      .fetch(`*[slug.current == "${slug}"]`)
      .then((data) => setSingleProduct(data));

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [slug]);
  return (
    <>
      <FlexibleDiv padding={"40px 0px 20px 0px"} alignItems="flex-start">
        <ProductImageSection />
        <ProductDetailsSection />
      </FlexibleDiv>
    </>
  );
};

export default ProductDetails;
