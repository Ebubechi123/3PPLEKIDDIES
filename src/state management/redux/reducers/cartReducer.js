import { ACTIONTYPES } from "../types";

const cart = [];

export const CartReducer = (state = cart, { type, payload }) => {
  let product = payload;
  let exist = cart.find((e) => e.id === product.id);
  switch (type) {
    case ACTIONTYPES.ADD_TO_CART:
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case ACTIONTYPES.DELETE_FROM_CART:
      if (exist.qty > 1) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        exist.filter((e) => e.id !== exist.id);
      }

    default:
      return state;
      break;
  }
};
