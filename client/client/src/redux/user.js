import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminInfor: localStorage.getItem("adminInfor")
    ? JSON.parse(localStorage.getItem("adminInfor"))
    : null,
};

const productsSlice = createSlice({
  name: "productsRedux",
  initialState,
  reducers: {
    signOut(state) {
      state.userInfor = null;
      localStorage.removeItem("adminInfor");
    },
    signIn(state) {
      state.userInfor = localStorage.getItem("adminInfor")
        ? JSON.parse(localStorage.getItem("adminInfor"))
        : null;
    },
    setStatusProducts(state, action) {
      const index = state.products.findIndex(
        (item) => item.id === action.payload
      );
      state.products[index].favourite = !state.products[index].favourite;
    },
  },
});

export const { signOut, signIn, setStatusProducts } = productsSlice.actions;
export default productsSlice.reducer;
