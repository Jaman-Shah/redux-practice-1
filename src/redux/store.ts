import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "@/redux/features/counter/counterSlice";
import colorPickerReducer from "@/redux/features/colorPicker/colorPickerSlice";
import { baseApi } from "./api/baseApi";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    colorPicker: colorPickerReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
