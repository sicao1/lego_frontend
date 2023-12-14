import { configureStore } from "@reduxjs/toolkit";
import setsReducer from "./slices/setSlice";
import { formReducer } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    sets: setsReducer,
    form: formReducer,
  },
});

export default store;
