
import React from 'react'
import styled from 'styled-components';
import FlexibleDiv from '../flexibleDiv/flexibleDiv.component';
import {Image} from '../image/image.component';
import ToyImg from "../../assets/images/toys.jpg"
import { Text } from '../typography/typography.component';
const Card = styled.div`
flex-basis: 30%;
line-height: 1.9rem;
`
const Categories = () => {
    return ( 
        <>
        <FlexibleDiv padding={'80px 0px'} breakPoint={'780px'} breakPointMargin={"20px 0px"} breakPointPadding={"20px 0px"} >
            <FlexibleDiv  >
            
            {[0,1,2].map(index=>(
                <Card key={index}>
                <Image src={ToyImg} width={'100%'} radius={'5px'} />
                <FlexibleDiv>
                    <FlexibleDiv width={'50%'} justifyContent={'flex-start'} >
                        <Text margin={"0px"} fontSize={"16px"} resFontSize={"smaller"} >
                            Clothing
                        </Text>
                    </FlexibleDiv>
                    <FlexibleDiv width={'50%'} justifyContent={"flex-end"}>
                        <Text cursor={'pointer'} margin={"0px"} fontSize={"small"} fontWeight={"700"} resFontSize={"xx-small"}  >
                           Shop Now
                        </Text>
                    </FlexibleDiv>
                </FlexibleDiv>
            </Card>
            ))}
            
            </FlexibleDiv>
        </FlexibleDiv>
        </>
     );
}
 
export default Categories;