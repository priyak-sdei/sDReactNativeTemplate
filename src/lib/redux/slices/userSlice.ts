import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authAPIs } from "../api/AuthAPIs/authAPI";
// Access the list of injectEndpoints values in slices

const userSlice = createSlice({
  name: "user",
  initialState: {
    message: "Initial message",
    userData: {},
  },
  reducers: {
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    /** Access the injectedEndpoint data from the action payload */
    builder.addMatcher(
      authAPIs.endpoints.loginUser.matchFulfilled,
      (state, action) => {
        state.userData = { ...action };
      }
    );
  },
});

export const { setMessage } = userSlice.actions;
export default userSlice.reducer;
