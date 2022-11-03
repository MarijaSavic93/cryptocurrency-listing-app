import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    cryptocurrencies: [],
    isLoading: false,
    error: null};

export const getCryptocurrencyList = createAsyncThunk('cryptocurrencies/getCryptocurrencyList', 
async (currencyForConversion) => {

    const response = await axios.get('/list', {
        params: {convert: currencyForConversion}
    });

    return response.data;
});

const cryptocurrenciesSlice = createSlice({
    name: 'cryptocurrencies',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(getCryptocurrencyList.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(getCryptocurrencyList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            
            state.cryptocurrencies = action.payload;
        })
        .addCase(getCryptocurrencyList.rejected, (state, action) => {
            state.isLoading = false;
            
            state.error = action.error.message;
        })
    }
});

export const getCryptocurrenciesFromState = state => state.cryptocurrencies.cryptocurrencies;
export const getCryptocurrenciesLoadingStatusFromState = state => state.cryptocurrencies.isLoading;
export const getCryptocurrenciesErrorFromState = state => state.cryptocurrencies.error;
export default cryptocurrenciesSlice.reducer;