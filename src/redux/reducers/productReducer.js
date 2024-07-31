import { actionTypes } from "./../constants/actionTypes";

const initialState = {
  products: [
    {
      id: 1,
      name: "Shahmir",
      categoy: "Programmmer",
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
