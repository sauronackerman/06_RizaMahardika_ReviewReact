import {
  createSlice,
  createSelector,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
const initialStateValue = [];

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    getNews: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { getNews } = newsSlice.actions;
export default newsSlice.reducer;
