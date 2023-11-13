import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./features/themeSlice";
import computeSlice from "./features/computeSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    compute: computeSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
