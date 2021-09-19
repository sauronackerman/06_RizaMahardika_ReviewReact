import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  nama: "",
  email: "",
  phone: "",
  nationality: "",
  message: "",
};

export const userSlice = createSlice({
  name: "userinput",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    submit: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { submit } = userSlice.actions;
export default userSlice.reducer;

// const initialState = {
//     nama: "",
//     email: "",
//     phone: "",
//     nationality: "",
//     message: "",
//   };

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "submit":
//             return {
//                ...state,

//             }

//         default:
//             break;
//     }
// }

// export default reducer;
