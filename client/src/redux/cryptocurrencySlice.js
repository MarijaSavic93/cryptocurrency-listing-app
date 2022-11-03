import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    cryptocurrency: {},
    isLoading: false,
    error: null};

export const getCryptocurrencyById = createAsyncThunk('cryptocurrencies/getCryptocurrencyById', 
async (parameters) => {

    const response = await Promise.all([axios.get('/detailsFIAT', {params: { id : parameters.id, convert: `${parameters.fiatCurrency}`}}), 
    axios.get('/detailsBitcoin', {params: { id : parameters.id }})]).then(([fiatCurrency, bitcoin]) => {

        const loadedCryptocurrency = fiatCurrency.data;
        loadedCryptocurrency.quote.BTC = bitcoin.data;
        
        console.log(bitcoin.data);
        return  loadedCryptocurrency;
    });                 
    return response;
});

const cryptocurrencySlice = createSlice({
    name: 'cryptocurrency',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(getCryptocurrencyById.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(getCryptocurrencyById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;

            state.cryptocurrency = action.payload;                
        })  
        .addCase(getCryptocurrencyById.rejected, (state, action) => {
            state.isLoading = false;
            
            state.error = action.error.message;
        })
    }
});

export const getCryptocurrencyFromState = state => state.cryptocurrency.cryptocurrency;
export const getCryptocurrencyLoadingStatusFromState = state => state.cryptocurrency.isLoading;
export const getCryptocurrencyErrorFromState = state => state.cryptocurrency.error;
export default cryptocurrencySlice.reducer;