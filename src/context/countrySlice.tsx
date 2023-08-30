import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getCountries = createAsyncThunk('countries/fetch', async() => {
    const response = await fetch('../data.json')
    const data = await response.json()
    return data
})

const initialState = {
    countries: [],
    loading: false,
    error: null
}

const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCountries.pending, (state, action) => {
            state.countries = [],
            state.loading = true
        })
        .addCased
    }
})