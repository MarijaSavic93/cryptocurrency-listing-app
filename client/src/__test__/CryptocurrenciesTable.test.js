import { render } from '@testing-library/react';
import CryptocurrenciesTable from '../components/cryptocurrency/cryptocurrency_list_page/CryptocurrenciesTable';
import { BrowserRouter } from 'react-router-dom';

test('should render table of cryptocurrencies', () => {   
    const fakeFiatCurrency = 'USD';
    const fakeList = [
    {id: 1, symbol: 'BTC', cmc_rank: 1, quote: {[fakeFiatCurrency]:{price: '20000', volume_change_24h: -0.123}}},
    {id: 2, symbol: 'ETH', cmc_rank: 2, quote: {[fakeFiatCurrency]:{price: '2000', volume_change_24h: 0.123}}},
    {id: 3, symbol: 'USDT', cmc_rank: 3, quote: {[fakeFiatCurrency]:{price: '1', volume_change_24h: 0.342}}}]; 

    const {getAllByTestId} = render(<BrowserRouter>
            <CryptocurrenciesTable list={fakeList} fiatCurrency={fakeFiatCurrency} />
            </BrowserRouter>);              
    expect(getAllByTestId('cryptocurrency')).toHaveLength(fakeList.length);
});

    

