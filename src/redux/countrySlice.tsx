import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CountryType } from "../types/types";

export const getCountries = createAsyncThunk("countries/fetch", async () => {
  const response = await fetch("../data.json");
  const data = await response.json();
  return data;
});

const initialState: CountryType = {
  countries: [],
  filteredCountries: [],
  loading: false,
  error: null,
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setFilteredCountriesState(state: any, action) {
      state.filteredCountries = state.countries.filter((country: any) => {
        if (action.payload === "All") {
          return country;
        }
        return country.region === action.payload;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        (state.countries = []),
          (state.filteredCountries = []),
          (state.loading = true);
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.filteredCountries = action.payload;
        state.loading = false;
      })
      .addCase(getCountries.rejected, (state, action) => {
        (state.countries = []),
          (state.filteredCountries = []),
          (state.loading = false),
          (state.error = action.error.message);
      });
  },
});

export const { setFilteredCountriesState } = countriesSlice.actions;

export default countriesSlice.reducer;
