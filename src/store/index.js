import { configureStore } from "@reduxjs/toolkit";
import { launchSlice } from "./reducer";

const store = configureStore({
    reducer: {launchSlice : launchSlice.reducer}
});

export default store;