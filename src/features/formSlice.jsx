import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formDatas: [],
};
const formSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    submit: (state, action) => {
      // console.log(action.payload.texts.length);
      if (action.payload.texts.length != 0) {
        state.formDatas = [...state.formDatas, action.payload.texts];
      }
    },
    removePost: (state, action) => {
      // console.log(action.payload.id);
      state.formDatas = state.formDatas.filter(
        (datas, id) => id !== action.payload.id
      );
    },
    editePost: (state, action) => {
      state.formDatas[action.payload.postNo] = action.payload.texts;
    },
  },
});

export default formSlice.reducer;
export const { submit, removePost, editePost } = formSlice.actions;
