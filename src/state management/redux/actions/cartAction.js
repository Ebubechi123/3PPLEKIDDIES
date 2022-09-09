import { ACTIONTYPES } from "../types"


export const addToCart=(product)=>{
 return{
    type:ACTIONTYPES.ADD_TO_CART,
    payload:product
 }
}