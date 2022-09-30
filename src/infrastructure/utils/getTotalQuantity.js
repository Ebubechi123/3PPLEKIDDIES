import { useSelector } from "react-redux";

const GetTotalPrice =  () => {
  const cart = useSelector((state) => state.persistedReducer.cart);
  let totalQuantity= 0;
     let totalPrice =0
    cart.forEach((item)=>{
      totalQuantity+=item.quantity;
      totalPrice +=item.price * item.quantity
    })

    
  return totalPrice;
};

export default GetTotalPrice;
