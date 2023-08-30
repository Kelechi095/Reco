import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'

export const getCountries = createAsyncThunk('countries/fetch', async() => {
    const response = await fetch("../data.json")
    const data = await response.json()
    return data
})

interface CountryType {
    countries: [],
    loading: boolean
    error: string | undefined | null
}

const initialState: CountryType = {
    countries: [],
    loading: false,
    error: null 
}

export const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCountries.pending, (state) => {
            state.countries = [],
            state.loading = true
        })
        .addCase(getCountries.fulfilled, (state, action) => {
            state.countries = action.payload
            state.loading = false
        })
        .addCase(getCountries.rejected, (state, action) => {
            state.countries = [],
            state.loading = false,
            state.error = action.error.message
        })
    }
})

//export const {} = countriesSlice.actions

export default countriesSlice.reducer