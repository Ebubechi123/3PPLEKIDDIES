import styled from "styled-components";

export const  Image = styled.img`
width: ${({width})=>width ? width :''};
height: ${({height})=>height ? height :''};
object-fit: ${({objectFit})=>objectFit ? objectFit :''};
cursor: ${({cursor})=>cursor ? cursor :''};
border-radius: ${({radius})=> radius ? radius :''};
`

// const Image = ({width,height,objectFit,radius,cursor,src,alt}) => {
//     return ( 
//         <ImageStyles width={width} height={height} objectFit={objectFit} radius={radius} cursor={cursor} src={src} alt={alt} />
//      );
// }
 
// export default Image;