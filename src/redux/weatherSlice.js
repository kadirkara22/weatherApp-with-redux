import { createSlice } from "@reduxjs/toolkit";
import MockCountryList from "../mock-country.json"
const citiesInTurkey = MockCountryList.citiesInTurkey
export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        countryList: citiesInTurkey,
        countryName: null,
        items: []

    },
    reducers: {
        selectCountry: (state, action) => {
            state.countryName = action.payload;

        },
        getCountry: (state, action) => {
            const data = action.payload
            state.items = data;
        }
    },
    extraReducers: {}
})

export const { selectCountry, getCountry } = weatherSlice.actions;
export default weatherSlice.reducer;