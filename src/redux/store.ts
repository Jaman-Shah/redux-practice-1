import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "@/redux/features/counter/counterSlice";
import colorPickerReducer from "@/redux/features/colorPicker/colorPickerSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    colorPicker: colorPickerReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
