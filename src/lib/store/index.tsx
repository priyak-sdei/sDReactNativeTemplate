import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userSlice from "@lib/redux/slices/userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { clientApi } from "@lib/redux/api/clientApi";
import logger from "redux-logger";

const rootReducer = combineReducers({
  user: userSlice,
  [clientApi.reducerPath]: clientApi.reducer,
});

const middleware = [clientApi.middleware];

if (__DEV__ && !process.env.JEST_WORKER_ID) {
  middleware.push(logger);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      immutableCheck: false,
    }).concat(clientApi.middleware);
  },
  devTools: true,
});

setupListeners(store.dispatch);
export default store;
