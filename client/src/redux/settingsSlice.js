import { createSlice } from "@reduxjs/toolkit";

const initialState = { fiatCurrencyForConversion : 'USD'}

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        changeSettings: (state, action) => {
            state.fiatCurrencyForConversion = action.payload;
        }
    }
});

export const getFiatCurrencyForConversion = state => state.settings.fiatCurrencyForConversion;
export const { changeSettings } = settingsSlice.actions;
export default settingsSlice.reducer;