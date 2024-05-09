import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    ADD_PRODUCT: (state, action) => {
      // payload: {data, qt}
      const id = action.payload.data.id;
      const index = state.products.findIndex(item => item.id === id);

      if(index > -1) {
        state.products[index].qt += action.payload.qt;
      } else {
        state.products.push({
          ...action.payload.data,
          qt:action.payload.qt
        });
      }
    },
    CHANGE_PRODUCT: (state, action) => {
      // payload: {key, type '+' or '-'}
      if(state.products[action.payload.key]) {
        switch(action.payload.type) {
          case '-':
            state.products[action.payload.key].qt--;
            
            if(state.products[action.payload.key].qt <= 0) {
              state.products = state.products.filter((item, index) => index !== action.payload.key);
            }
          break;
          case '+':
            state.products[action.payload.key].qt ++;
          break;
          default:
          break;
        }
      }
    }
  }
})

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  },
})

export const { ADD_PRODUCT, CHANGE_PRODUCT } = cartSlice.actions