import FlexibleDiv from "../../../components/flexibleDiv/flexibleDiv.component";
import ProductCard from "../../../components/productRow/productCard";
import { ProductData } from "../../../components/productRow/productData";

const CategoryProductRow = () => {
  return (
    <>
      <FlexibleDiv padding={"4rem 0rem"}>
        <FlexibleDiv
          justifyContent={"center"}
          width={"100%"}
          gap={"10px"}
          breakPoint={"680px"}
          breakPointwidth={"100%"}
        >
          {ProductData.map(({ img, title, price }, index) => (
            <ProductCard
              key={index}
              img={img}
              title={title}
              price={price}
              product={ProductData}
            />
          ))}
        </FlexibleDiv>
      </FlexibleDiv>
    </>
  );
};

export default CategoryProductRow;
