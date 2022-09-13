import { useEffect } from "react";
import { useState } from "react";
import FlexibleDiv from "../../../components/flexibleDiv/flexibleDiv.component";
import { ArrowDownIcon, ArrowUpIcon } from "../../../components/icons";
import Input from "../../../components/input/input.component";
import { Text } from "../../../components/typography/typography.component";
import { colorTheme } from "../../../infrastructure/theme/colors";
import { FilterList, FilterUl } from "../styles";

const Filter = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <FlexibleDiv
      width={"50%"}
      justifyContent={"flex-end"}
      position={"relative"}
    >
      <FlexibleDiv
        justifyContent={"space-between"}
        width={"100px"}
        border={`1px solid ${colorTheme.primary_color}`}
        radius={"5px"}
        padding={"9px"}
        bg={"#f3f3f3"}
        breakPoint={"680px"}
        breakPointwidth={"40%"}
        position={"relative"}
        onClick={(e) => {
          e.stopPropagation();
          setToggle(!toggle);
        }}
      >
        <Text
          margin={"0px"}
          fontSize={".7rem"}
          fontWeight={"600"}
          resFontSize={"13px"}
        >
          Filter
        </Text>
        {toggle ? (
          <ArrowUpIcon cursor={"pointer"} onClick={() => setToggle(!toggle)} />
        ) : (
          <ArrowDownIcon
            cursor={"pointer"}
            onClick={() => setToggle(!toggle)}
          />
        )}
        <FilterOptions toggle={toggle} setToggle={setToggle} />
      </FlexibleDiv>
    </FlexibleDiv>
  );
};

export default Filter;

const FilterOptions = ({ toggle, setToggle }) => {
  useEffect(() => {
    if (toggle) {
      window.addEventListener("click", () => {
        setToggle(false);
      });
    }
  }, [toggle]);
  return (
    <>
      <FlexibleDiv
        onClick={(e) => {
          e.stopPropagation();
        }}
        display={toggle ? "flex" : "none"}
        position={"absolute"}
        shadow={"0px 0px 3px 1px #d1cfcf"}
        bg={"white"}
        radius={"2px"}
        padding={"5px"}
        zIndex={"1"}
        top={"50px"}
        right={"0px"}
        minWidth={"200px"}
        width={"230px"}
      >
        <FlexibleDiv>
          <FlexibleDiv justifyContent={"flex-start"}>
            <Text
              margin={"0px"}
              fontSize={"medium"}
              resFontSize={"smaller"}
              fontWeight={"600"}
            >
              Price
            </Text>
          </FlexibleDiv>

          <FilterUl>
            <FilterList>Under N25</FilterList>
            <FilterList>N25 to N50</FilterList>
            <FilterList>N50 to N100</FilterList>
            <FilterList>N100 to N200</FilterList>
            <FilterList>N200 & Above</FilterList>
          </FilterUl>

          {/* Min && Max */}
          <FlexibleDiv wrap={"nowrap"} gap={"12px"} padding={"5px 0px"}>
            <FlexibleDiv
              width={"50%"}
              padding={"5px"}
              border={".9px solid #d1cfcf"}
              radius={"3px"}
            >
              <FlexibleDiv width={"30%"}>
                <Text
                  margin={"0px"}
                  color={"lightgrey"}
                  fontSize={"smaller"}
                  resFontSize={"xx-small"}
                >
                  N
                </Text>
              </FlexibleDiv>
              <FlexibleDiv width={"70%"}>
                <Input
                  width={"100%"}
                  bg={"transparent"}
                  placeHolder={"Min"}
                  type={"number"}
                />
              </FlexibleDiv>
            </FlexibleDiv>

            <FlexibleDiv
              width={"50%"}
              padding={"5px"}
              border={".9px solid #d1cfcf"}
              radius={"3px"}
            >
              <FlexibleDiv width={"30%"}>
                <Text
                  margin={"0px"}
                  color={"lightgrey"}
                  fontSize={"smaller"}
                  resFontSize={"xx-small"}
                >
                  N
                </Text>
              </FlexibleDiv>
              <FlexibleDiv width={"70%"}>
                <Input
                  width={"100%"}
                  bg={"transparent"}
                  placeHolder={"Max"}
                  type={"number"}
                />
              </FlexibleDiv>
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </>
  );
};
