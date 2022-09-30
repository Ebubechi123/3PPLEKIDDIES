import { GetSingleProduct } from "../../state management/context/singleProduct";
import Button from "../button/button.component";
import FlexibleDiv from "../flexibleDiv/flexibleDiv.component";
import { CartIcon } from "../icons";

const ButtonOption = ({setToggleOrder}) => {
  const [singleProduct] = GetSingleProduct();
  let colors = singleProduct[0]?.colors
  return (
    <>
      <FlexibleDiv margin={colors ? 'inherit' :'100px 0px 0px 0px '} padding={"12px"}>
        <FlexibleDiv justifyContent={colors?"flex-end": 'flex-start'} gap={"12px"}>
          <Button
            style={{ gap: "8px" }}
            padding={"10px"}
            border={"2px solid black"}
            color={"black"}
            background={"white"}
            width={"120px"}
          >
            <CartIcon /> Add to Bag
          </Button>
          <Button onClick={()=>{setToggleOrder(true)}} padding={"12px"} background={"black"} width={"120px"}>
            Order
          </Button>
        </FlexibleDiv>
      </FlexibleDiv>
    </>
  );
};

export default ButtonOption;
