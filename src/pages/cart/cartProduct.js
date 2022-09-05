import FlexibleDiv from "../../components/flexibleDiv/flexibleDiv.component";
import { Image } from "../../components/image/image.component";
import CartImg from "../../assets/images/product-8.jpg";
import { Text } from "../../components/typography/typography.component";
import { fontSizes } from "../../infrastructure/theme/fontSizes";
import { DeleteIcon } from "../../components/icons";
import Input from "../../components/input/input.component";
import { Option, Select } from "../../components/order/orderSize";
import { useState } from "react";
const CartProduct = () => {
  const [quantity, setQauntity] = useState(1);
  const InputHandler = (e) => {
    let Value = e.target.value;
    setQauntity(Value);
  };

  const Add = () => {
    setQauntity(() => {
      let sumValue = quantity + 1;
      setQauntity(sumValue);
    });
  };
  const Minus = () => {
    if (quantity >= 0) {
      let deletValue = quantity - 1;
      setQauntity(deletValue);
    }
  };
  return (
    <>
      <FlexibleDiv padding={"19px 19px"} alignItems={"flex-start"}>
        {/* Image */}
        <FlexibleDiv width={"20%"}>
          <Image
            src={CartImg}
            width={"100%"}
            height={"100%"}
            objectFit={"cover"}
            style={{ borderRadius: "5px" }}
          />
        </FlexibleDiv>

        {/* Details */}

        <FlexibleDiv
          width={"80%"}
          justifyContent={"space-between"}
          alignItems={"space-between"}
        >
          {/* Product name and Cart Price */}
          <FlexibleDiv alignItems={"flex-start"}>
            <FlexibleDiv width={"60%"}>
              {/* Product Name */}
              <FlexibleDiv justifyContent={"flex-start"} padding={"5px 19px"}>
                <Text
                  margin={"0px"}
                  fontSize={fontSizes.mobile_body_text}
                  resFontSize={"small"}
                >
                  Relaxed Fit T-shirt
                </Text>
              </FlexibleDiv>
              {/* Product price */}
              <FlexibleDiv justifyContent={"flex-start"} padding={"0px 19px"}>
                <Text
                  margin={"0px"}
                  fontSize={fontSizes.mobile_smallest}
                  color={"#727272"}
                  resFontSize={"x-small"}
                  fontWeight={"600"}
                >
                  N600.00
                </Text>
              </FlexibleDiv>
            </FlexibleDiv>

            {/* Cart Price */}
            <FlexibleDiv width={"40%"} justifyContent={"flex-end"}>
              <Text
                margin={"0px"}
                fontSize={fontSizes.mobile_body_text}
                fontWeight={"700"}
                resFontSize={"small"}
              >
                N600.00
              </Text>
            </FlexibleDiv>
          </FlexibleDiv>

          {/* product features and delete button */}

          <FlexibleDiv
            padding={"70px 0px 8px 19px"}
            breakPoint={"780px"}
            breakPointPadding={"10px 0px 8px 19px"}
            breakPointwidth={"100%"}
          >
            <FlexibleDiv
              width={"80%"}
              justifyContent={"flex-start"}
              gap={"10px"}
              breakPoint={"780px"}
              breakPointwidth={"100%"}
            >
              {/* Size */}
              <FlexibleDiv
                flexBasis={"25%"}
                radius={"5px"}
                border={".9px solid #cbcbcb"}
                padding={"5px"}
              >
                <Select>
                  <Option>Xl</Option>
                  <Option>L</Option>
                  <Option>LL</Option>
                </Select>
              </FlexibleDiv>

              {/* Color */}
              <FlexibleDiv
                flexBasis={"25%"}
                radius={"5px"}
                border={".9px solid #cbcbcb"}
                padding={"5px"}
              >
                <Select>
                  <Option>Blue</Option>
                  <Option>Red</Option>
                  <Option>Yellow</Option>
                </Select>
              </FlexibleDiv>

              {/* Qauntity */}
              <FlexibleDiv
                flexBasis={"25%"}
                radius={"5px"}
                border={".9px solid #cbcbcb"}
                padding={"5px"}
              >
                <FlexibleDiv width={"30%"}>
                  <Text
                    cursor={"pointer"}
                    margin={"0px"}
                    fontSize={".8rem"}
                    resFontSize={".8rem"}
                    onClick={() => {
                      Minus();
                    }}
                  >
                    -
                  </Text>
                </FlexibleDiv>
                <FlexibleDiv width={"30%"}>
                  <Input
                    width={"100%"}
                    style={{ textAlign: "center" }}
                    type={"number"}
                    value={quantity}
                    onChange={(e) => {
                      InputHandler(e);
                    }}
                  />
                </FlexibleDiv>
                <FlexibleDiv width={"30%"}>
                  <Text
                    cursor={"pointer"}
                    onClick={() => Add()}
                    margin={"0px"}
                    fontSize={".8rem"}
                    resFontSize={".8rem"}
                  >
                    +
                  </Text>
                </FlexibleDiv>
              </FlexibleDiv>
            </FlexibleDiv>
            {/* Delete Product from cart */}
            <FlexibleDiv
              width={"20%"}
              justifyContent={"flex-end"}
              gap={"4px"}
              breakPoint={"780px"}
              breakPointwidth={"100%"}
            >
              <DeleteIcon color={"#727272"} />
              <Text
                cursor={"pointer"}
                fontSize={fontSizes.mobile_smallest}
                resFontSize={"x-small"}
                color={"#727272"}
                fontWeight={"600"}
              >
                Delete
              </Text>
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </>
  );
};

export default CartProduct;
