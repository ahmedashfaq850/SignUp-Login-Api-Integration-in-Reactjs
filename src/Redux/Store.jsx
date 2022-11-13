import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";

const store = configureStore({
    reducer: {
        // Add your reducers here
        auth: AuthSlice
    }
})



export default store