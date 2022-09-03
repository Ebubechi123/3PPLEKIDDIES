import styled from "styled-components";

const FlexibleDivStyles = styled.div`
  height: ${({ height }) => (height ? height : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  border:${({border})=>border ? border : 'none'};
  position: ${({ position }) => (position ? position : "")};
  display: ${({ display }) => (display ? display : "flex")};
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  flex: ${({flex})=>flex ? flex :''};
  width: ${({ width }) => (width ? width : "100%")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  right: ${({ right }) => (right ? right : "")};
  left: ${({ left }) => (left ? left : "")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-evenly"};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "")};
max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "")};
  top: ${({ top }) => (top ? top : "")};
  background:${({bg})=>bg ? bg : ""};
  flex-wrap: ${({wrap})=>wrap ? wrap : 'wrap'};
  flex-basis: ${({ flexBasis }) => (flexBasis ? flexBasis : "")};
  border-bottom:${({borderBottom})=>borderBottom ? borderBottom : ''};
  border-radius:${({radius})=>radius ? radius : ''};
  margin:${({margin})=>margin ? margin : ''};
  z-index:${({zIndex})=>zIndex ? zIndex : ''};
  bottom:${({bottom})=>bottom? bottom :''};
  gap: ${({gap})=>gap ?gap :''};
  box-shadow: ${({shadow})=>shadow ? shadow :""};
  line-height: ${({lineHeight})=> lineHeight ? lineHeight :''};
  flex-grow: ${({flexGrow})=>flexGrow ? flexGrow :''};
  transition: ${({transition})=>transition ? transition :""};

 @media screen and (max-width: ${({breakPoint})=>breakPoint ? breakPoint :''} ) {
    width: ${({ breakPointwidth }) => (breakPointwidth ? breakPointwidth : "")};
    display: ${({ breakPointDisplay }) =>
      breakPointDisplay ? breakPointDisplay : ""};
    flex-basis: ${({ breakPointflexBasis }) => (breakPointflexBasis ? breakPointflexBasis : "")};
    justify-content: ${({ breakPointJustifyContent }) => (breakPointJustifyContent ? breakPointJustifyContent : "")};
    flex-wrap: ${({wrap})=>wrap ? wrap : 'wrap'};
    align-items: ${({ breakPointAlign }) => (breakPointAlign ? breakPointAlign : "center")};
    margin:${({breakPointMargin})=>breakPointMargin ? breakPointMargin : ''};
    gap: ${({breakPointgap})=>breakPointgap ?breakPointgap :''};
    flex-direction: ${({ breakPointdirection }) => (breakPointdirection ? breakPointdirection : "row")};
    padding: ${({breakPointPadding})=>breakPointPadding ? breakPointPadding :""};
    left: ${({breakPointLeft})=>breakPointLeft ? breakPointLeft :""};
    bottom: ${({breakPointBottom})=> breakPointBottom ? breakPointBottom :""} ;
 }
 @media screen and (max-width: ${({resPoint})=>resPoint ? resPoint :''} ) {
    width: ${({ reswidth }) => (reswidth ? reswidth : "")};
    display: ${({ resDisplay }) =>
      resDisplay ? resDisplay : ""};
    flex-basis: ${({ resflexBasis }) => (resflexBasis ? resflexBasis : "")};
    justify-content: ${({ resJustifyContent }) => (resJustifyContent ? resJustifyContent : "")};
    flex-wrap: ${({wrap})=>wrap ? wrap : 'wrap'};
    align-items: ${({ resAlign }) => (resAlign ? resAlign : "center")};
    margin:${({resMargin})=>resMargin ? resMargin : ''};
    gap: ${({resgap})=>resgap ?resgap :''};
    flex-direction: ${({ resdirection }) => (resdirection ? resdirection : "row")};
    padding: ${({resPadding})=>resPadding ? resPadding :'0px'};
  
 }
`;

const FlexibleDiv = ({
  children,
  flexBasis,
  breakPointflexBasis,
  flexGrow,
  right,
  left,
  alignItems,
  breakPointwidth,
  breakPoint,
  breakPointDisplay,
  display,
  direction,
  width,
  height,
  justifyContent,
  minHeight,
  position,
  top,
  flexWrap,
  padding,
  bg,
  wrap,
  breakPointAlign,
  borderBottom,
  radius,
  margin,
  zIndex,
  breakPointMargin,
  border,
  bottom,
  gap,
  flex,
  maxHeight,
  minWidth,
  transition,
  breakPointgap,
  shadow,
  lineHeight,
  breakPointdirection,
  breakPointJustifyContent,
  breakPointPadding,
  breakPointLeft,
  breakPointBottom ,
  reswidth,
  resAlign,
  resDisplay,
  resJustifyContent,
  resMargin,
  resPoint,
  resdirection,
  resflexBasis,
  resPadding,
  resgap,
  style,
  onClick
}) => {
  return (
    <>
      <FlexibleDivStyles
      style={style}
        right={right}
        left={left}
        flexWrap={flexWrap}
        justifyContent={justifyContent}
        breakPoint={breakPoint}
        breakPointDisplay={breakPointDisplay}
        display={display}
        breakPointwidth={breakPointwidth}
        height={height}
        direction={direction}
        width={width}
        top={top}
        position={position}
        minHeight={minHeight}
        alignItems={alignItems}
        flexBasis={flexBasis}
        padding={padding}
        bg={bg}
        wrap={wrap}
        breakPointflexBasis={breakPointflexBasis}
        breakPointAlign={breakPointAlign}
        borderBottom={borderBottom}
        breakPointLeft={breakPointLeft}
        radius={radius}
        margin={margin}
        zIndex={zIndex}
        breakPointMargin={breakPointMargin}
        border={border}
        bottom={bottom}
        gap={gap}
        flex={flex}
        maxHeight={maxHeight}
        transition={transition}
        breakPointgap={breakPointgap}
        shadow={shadow}
        lineHeight={lineHeight}
        flexGrow={flexGrow}
        breakPointdirection={ breakPointdirection}
        breakPointJustifyContent={breakPointJustifyContent}
        resAlign={resAlign}
        resDisplay={resDisplay}
        resMargin={resMargin}
        resJustifyContent={resJustifyContent}
        resPoint={resPoint}
        resdirection={resdirection}
        resflexBasis={resflexBasis}
        resgap={resgap}
        reswidth={reswidth}
        breakPointPadding={breakPointPadding}
        breakPointBottom ={breakPointBottom }
        resPadding={resPadding}
        minWidth={minWidth}
        onClick={onClick}
       
      >

        {children}
      </FlexibleDivStyles>
    </>
  );
};

export default FlexibleDiv;
