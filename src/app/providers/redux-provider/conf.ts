import { API } from "@/shared/api";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [API.reducerPath]: API.reducer,

        // тут будут slices
    },

    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat([API.middleware]);
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
