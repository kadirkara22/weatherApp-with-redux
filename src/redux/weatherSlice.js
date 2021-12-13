import { createSlice } from "@reduxjs/toolkit";
import MockCountryList from "../mock-country.json"
const citiesInTurkey = MockCountryList.citiesInTurkey
export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        countryList: citiesInTurkey,
        countryName: null,
        items: [],
        countryData: []

    },
    reducers: {
        selectCountry: (state, action) => {
            state.countryName = action.payload;

        },
        getCountry: (state, action) => {
            const data = action.payload
            state.items = data;
        },
        getSelectCountry: (state, action) => {
            const data = action.payload;
            state.countryData = data;
        }
    },
    extraReducers: {}
})

export const { selectCountry, getCountry, getSelectCountry } = weatherSlice.actions;
export default weatherSlice.reducer;