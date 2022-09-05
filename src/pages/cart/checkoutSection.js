import Button from "../../components/button/button.component";
import FlexibleDiv from "../../components/flexibleDiv/flexibleDiv.component";
// import { InfoIcon } from "../../components/icons";
import { Link } from "react-router-dom";
import { Text } from "../../components/typography/typography.component";
import { fontSizes } from "../../infrastructure/theme/fontSizes";

const CheckSection = ({ ToggleHandler }) => {
  let Subtotal = 500;
  let deliveryAmount = 100;
  return (
    <>
      <FlexibleDiv
        width={"40%"}
        breakPoint={"780px"}
        breakPointMargin={"50px 0px 0px 0px"}
        breakPointwidth={"100%"}
      >
        <FlexibleDiv
          width={"80%"}
          //   shadow={"0px 0px 1px 0.2px #c7c7c7"}
          shadow={"0px 1px 2px 1px lightgrey"}
          radius={"5px"}
          breakPoint={"780px"}
          breakPointwidth={"100%"}
        >
          {/* Head */}
          <FlexibleDiv padding={"5px 19px "} justifyContent={"flex-start"}>
            <Text
              margin={"0px"}
              fontWeight={"400"}
              color={"#727272"}
              fontSize={"1em"}
              reFontSize={"1em"}
            >
              Delivery
            </Text>
          </FlexibleDiv>
          {/* Subtotal */}
          <FlexibleDiv justifyContent={"space-between"} padding={"9px 19px"}>
            <Text
              margin={"0px"}
              fontSize={fontSizes.mobile_details}
              reFontSize={"small"}
              color={"#727272"}
              fontWeight={"600"}
            >
              Sub Total
            </Text>
            <Text
              margin={"0px"}
              fontSize={fontSizes.mobile_details}
              reFontSize={"small"}
              color={"#727272"}
            >
              N{Subtotal}.00
            </Text>
          </FlexibleDiv>

          {/* Delivery */}
          <FlexibleDiv justifyContent={"space-between"} padding={"9px 19px"}>
            <Text
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              margin={"0px"}
              fontSize={".9em"}
              reFontSize={"small"}
              color={"#727272"}
              fontWeight={"400"}
            >
              Delivery
            </Text>
            <Text
              margin={"0px"}
              fontSize={fontSizes.mobile_smallest}
              reFontSize={"small"}
              color={"#727272"}
            >
              N{deliveryAmount}.00
            </Text>
          </FlexibleDiv>

          {/* Total */}
          <FlexibleDiv justifyContent={"space-between"} padding={"12px 19px"}>
            <Text
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              margin={"0px"}
              fontSize={"1.2rem"}
              reFontSize={"small"}
              fontWeight={"400"}
              color={"#727272"}
            >
              Total
            </Text>
            <Text
              margin={"0px"}
              fontSize={fontSizes.mobile_body_text}
              reFontSize={"small"}
              fontWeight={"600"}
            >
              N{Subtotal + deliveryAmount}
            </Text>
          </FlexibleDiv>

          {/* Order */}

          <FlexibleDiv padding={"10px 0px"}>
            <Button
              width={"90%"}
              radius={"5px"}
              background={"orange"}
              color={"white"}
              padding={"10px"}
              hoverBackground={"orange"}
              hoverColor={"white"}
              hoverBorder={"none"}
              onClick={() => {ToggleHandler()}}
            >
              Place an Order
            </Button>
          </FlexibleDiv>
          <FlexibleDiv padding={"2px 0px 20px 0px"}>
            <Link to={'/'} style={{width:"90%"}} >
              <Button
                width={"100%"}
                radius={"5px"}
                background={"white"}
                color={"black"}
                padding={"10px"}
                hoverBackground={"white"}
                hoverColor={"black"}
                hoverBorder={"none"}
                style={{ boxShadow: "0px 1px 2px 1px lightgrey" }}
              >
                Continue Shopping
              </Button>
            </Link>
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </>
  );
};

export default CheckSection;
