import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import dataSlice from "./dataSlice";
const reducer = {
	data : dataSlice,
};

const middleware = [thunk];

const store = configureStore({
  reducer,
  middleware,
});

export default store;
