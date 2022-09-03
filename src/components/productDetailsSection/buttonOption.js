import Button from "../button/button.component";
import FlexibleDiv from "../flexibleDiv/flexibleDiv.component";
import { CartIcon } from "../icons";

const ButtonOption = ({setToggleOrder}) => {
  return (
    <>
      <FlexibleDiv padding={"12px"}>
        <FlexibleDiv justifyContent={"flex-end"} gap={"12px"}>
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
