import {FaShoppingBag,FaBars,FaLeaf,} from "react-icons/fa"
import {AiOutlineClose,} from "react-icons/ai"
import {MdOutlineDeliveryDining,MdDelete,MdInfo,MdArrowDropDown,MdArrowDropUp} from "react-icons/md"
import {GiSparkles} from "react-icons/gi"


export const CartIcon =({size,onClick,color,style,cursor})=>{
    return <FaShoppingBag size={size} onClick={onClick} color={color} style={style} cursor={cursor} />
}
export const MenuIcon =({size,onClick,color,style,cursor})=>{
    return <FaBars size={size} onClick={onClick} color={color} style={style} cursor={cursor} />
}
export const CloseIcon =({size,onClick,color,style,cursor})=>{
    return <AiOutlineClose size={size} onClick={onClick} color={color} style={style} cursor={cursor} />
}
export const DeliveryIcon =({size,onClick,color,style,cursor})=>{
    return <MdOutlineDeliveryDining size={size} onClick={onClick} color={color} style={style} cursor={cursor} />
}
export const LeafIcon =({size,onClick,color,style,cursor})=>{
    return <FaLeaf size={size} onClick={onClick} color={color} style={style} cursor={cursor} />
}
export const SparkleIcon =({size,onClick,color,style,cursor})=>{
    return <GiSparkles size={size} onClick={onClick} color={color} style={style} cursor={cursor} />
}
export const DeleteIcon =({size,onClick,color,style,cursor})=>{
    return <MdDelete size={size} onClick={onClick} color={color} style={style} cursor={cursor} />
}
export const InfoIcon =({size,onClick,color,style,cursor})=>{
    return <MdInfo size={size} onClick={onClick} color={color} style={style} cursor={cursor} />
}
export const ArrowDownIcon =({size,onClick,color,style,cursor})=>{
    return <MdArrowDropDown size={size} onClick={onClick} color={color} style={style} cursor={cursor} />
}
export const ArrowUpIcon =({size,onClick,color,style,cursor})=>{
    return <MdArrowDropUp size={size} onClick={onClick} color={color} style={style} cursor={cursor} />
}