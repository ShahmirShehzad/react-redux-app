import { actionTypes } from "../constants/actionTypes";

export const setProducts = (product) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: product,
  };
};

export const selectedProducts = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};
