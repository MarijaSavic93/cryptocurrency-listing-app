const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(cors());

app.get('/list', (appRequest, appResponse) => {
    const currencyForConversion = appRequest.query.convert;

    const options = {
        method: 'GET',
        url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        params: { convert: currencyForConversion },
        headers: { 'X-CMC_PRO_API_KEY': process.env.API_KEY }
    }

    axios.request(options).then(response => {
        const originalList = response.data.data;

        const resultList = originalList.map(({id, symbol, cmc_rank, quote: {[currencyForConversion]: {price, volume_change_24h}}}) => 
        ({id, symbol, cmc_rank, quote: {[currencyForConversion]: {price, volume_change_24h}}}));

        appResponse.json(resultList);
    });
});

app.get('/detailsFIAT', (appRequest, appResponse) => {
    const currencyForConversion = appRequest.query.convert;
    const cryptocurrencyId = appRequest.query.id;

    const options = {
        method: 'GET',
        url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
        params: {id: cryptocurrencyId, convert: currencyForConversion },
        headers: { 'X-CMC_PRO_API_KEY': process.env.API_KEY }
    }

    axios.request(options).then(response => {
        const originalFIATDetails = response.data.data[cryptocurrencyId];

        const result = (({id, name, symbol, cmc_rank, circulating_supply, total_supply, quote:{[currencyForConversion]:{price, volume_24h, market_cap, percent_change_1h, percent_change_24h, percent_change_7d}}}) => 
        ({id, name, symbol, cmc_rank, circulating_supply, total_supply, quote:{[currencyForConversion]:{price, volume_24h, market_cap, percent_change_1h, percent_change_24h, percent_change_7d}}}))(originalFIATDetails);

        appResponse.json(result);
    });
});

app.get('/detalisBitcoin', (appRequest, appResponse) => {
    const cryptocurrencyId = appRequest.query.id;

    const options = {
        method: 'GET',
        url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
        params: { id: cryptocurrencyId, convert: 'BTC' },
        headers: { 'X-CMC_PRO_API_KEY': process.env.API_KEY }
    }

    axios.request(options).then(response => {
        const originalBitconDetails = response.data.data[cryptocurrencyId].quote.BTC;

        const result = (({price, percent_change_1h, percent_change_24h, percent_change_7d}) => ({price, percent_change_1h, percent_change_24h, percent_change_7d}))(originalBitconDetails);

        appResponse.json(result);
    });
});

app.get('*', (appRequest, appResponse) => {
    appResponse.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});