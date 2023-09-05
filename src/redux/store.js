import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage'
import userReducer from "./userSlice"
import noteReducer from './noteTakingSlice'
import newsFeedReducer from "./newsFeedSlice/index"

let rootReducer = combineReducers({
  user: userReducer,
  note: noteReducer,
  newsFeed: newsFeedReducer
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);