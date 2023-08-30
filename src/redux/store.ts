import {configureStore} from "@reduxjs/toolkit"
import {countriesSlice} from "./countrySlice"

export const store = configureStore({
    reducer: {
        countries: countriesSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch