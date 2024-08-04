"use client";

import { createSlice } from "@reduxjs/toolkit";
interface IItem {
  variety: string;
  qty: number;
  image: string;
  price: number;
}
export interface ICartState {
  cart: IItem[];
}
const initialState: ICartState = {
  cart: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      //   console.log(action.payload);
      const duplicateItem = state.cart.findIndex(
        (el) => el.variety === action.payload.variety
      );
      // console.log(duplicateItem);
      if (duplicateItem === -1) {
        state.cart.push(action.payload);
        // [...state.cart, action.payload]
      } else {
        const cartUpd = state.cart.map((el) => {
          if (el.variety === action.payload.variety) {
            // console.log("ggg", el.price + 1);
            const cost = el.price / el.qty;
            return {
              ...el,
              price: cost * (el.qty + 1),
              qty: el.qty + 1,
            };
          } else return el;
        });
        state.cart = cartUpd;
      }

      console.log(state.cart);
    },
    decrement: (state, action) => {
      const cartUpd = state.cart.map((el) => {
        if (el.variety === action.payload.variety) {
          // console.log("ggg", el.price + 1);
          const cost = el.price / el.qty;
          return {
            ...el,
            price: el.price - cost,
            qty: el.qty - 1,
          };
        } else return el;
      });
      state.cart = cartUpd;
    },
    deleteItem: (state, action) => {
      const cartUpd = state.cart.filter((el) => {
        return el.variety !== action.payload.variety;
      });
      state.cart = cartUpd;
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, decrement, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
