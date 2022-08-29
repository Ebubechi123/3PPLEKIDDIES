import React from 'react'
import { fontSizes } from '../../../infrastructure/theme/fontSizes';
import FlexibleDiv from '../../flexibleDiv/flexibleDiv.component';
import { Text } from '../../typography/typography.component';
import ProductCard from '../productCard';
import { ProductData } from '../productData';
import { ProductRow, ProductSectionStyle, ProductSectionTitle } from '../style';

const Accessories = () => {
    return ( 
        <>
        <ProductSectionStyle>
            <FlexibleDiv justifyContent={'space-between'} padding={'2rem 0rem'} width={'90%'} margin={'auto'} >
                <ProductSectionTitle fontSize={fontSizes.desktop_title} resFontSize={'1.4rem'}>
                    Accessories
                </ProductSectionTitle>

                <Text fontWeight={"600"} margin={"0px"} fontSize={fontSizes.mobile_smallest} resFontSize={"small"} cursor={'pointer'} >
                    see all
                </Text>
            </FlexibleDiv>
            <ProductRow>
                    {ProductData.map(({img,title,price})=>(
                        <ProductCard img={img} title={title} price={price} />
                    ))}
                </ProductRow>
        </ProductSectionStyle>
        </>
     );
}
 
export default Accessories;