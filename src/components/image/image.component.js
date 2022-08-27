import styled from "styled-components";

const ImageStyles = styled.img`
width: ${({width})=>width ? width :''};
height: ${({height})=>height ? height :''};
object-fit: ${({objectFit})=>objectFit ? objectFit :''};
cursor: ${({cursor})=>cursor ? cursor :''};
`

const Image = ({width,height,objectFit,cursor,src,alt}) => {
    return ( 
        <ImageStyles width={width} height={height} objectFit={objectFit} cursor={cursor} src={src} alt={alt} />
     );
}
 
export default Image;