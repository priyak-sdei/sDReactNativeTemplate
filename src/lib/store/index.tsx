import { configureStore, combineSlices } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userSlice from "@lib/redux/slices/userSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { clientApi } from "@lib/redux/api/clientApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { PersistConfig } from "redux-persist/es/types";
import { PersistPartial } from "redux-persist/es/persistReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user"], // Specify which slices of state to persist
};

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
export const persistor = persistStore(store);
export default store;
