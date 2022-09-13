import FlexibleDiv from "../../components/flexibleDiv/flexibleDiv.component";
import { HeaderText } from "../../components/typography/typography.component";
import CategoryProductRow from "./components/categoryProductRow";
import Head from "./components/head";
import { CategoryHero} from "./styles";
const Category = () => {
  return (
    <>
      <CategoryHero>
        <HeaderText color="white">Boys</HeaderText>
      </CategoryHero>
      <FlexibleDiv>
        <FlexibleDiv
          direction={"column"}
          width={"90%"}
          justifyContent={"center"}
          alignItems={"center"}
          breakPoint={"680px"}
          breakPointwidth={"100%"}
        >
          <Head />
          <CategoryProductRow />
        </FlexibleDiv>
      </FlexibleDiv>
    </>
  );
};

export default Category;
