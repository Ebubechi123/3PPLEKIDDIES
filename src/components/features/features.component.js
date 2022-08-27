import FlexibleDiv from "../flexibleDiv/flexibleDiv.component";
import styled from "styled-components";
import { DeliveryIcon, LeafIcon, SparkleIcon } from "../icons";
import { Text } from "../typography/typography.component";
const Col = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media only screen and (max-width: 680px) {
    flex-wrap: wrap;
    width: auto;
  }
`;

const featuresArray = [
  {
    name: "Fast Delivery",
    icon: <DeliveryIcon size={22} />,
  },
  {
    name: "Organic Cotton Clothing",
    icon: <LeafIcon size={18} />,
  },
  {
    name: "Quality Accessories",
    icon: <SparkleIcon size={18} />,
  },
];
const Features = () => {
  return (
    <>
      <FlexibleDiv margin={"50px 0px"}>
        <FlexibleDiv
          width={"100%"}
          breakPoint={"680px"}
          breakPointwidth={"100%"}
        >
          {featuresArray.map(({ name, icon }) => (
            <Col>
              <span>{icon}</span>

              <Text
                resFontSize={"xx-small"}
                margin={"0px"}
                fontSize={"medium"}
                fontWeight={"500"}
                color={"grey"}
              >
                {name}
              </Text>
            </Col>
          ))}
        </FlexibleDiv>
      </FlexibleDiv>
    </>
  );
};

export default Features;
