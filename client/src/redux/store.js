import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from './settingsSlice';
import refreshReducer from './refreshSlice';
import cryptocurrenciesReducer from './cryptocurrenciesSlice';
import cryptocurrencyReducer from './cryptocurrencySlice';

export const store = configureStore({
    reducer: {
       settings: settingsReducer,
       refresh: refreshReducer,
       cryptocurrencies: cryptocurrenciesReducer,
       cryptocurrency: cryptocurrencyReducer
    }
});