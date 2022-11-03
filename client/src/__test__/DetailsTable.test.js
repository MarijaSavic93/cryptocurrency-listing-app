import { render } from '@testing-library/react';
import DetailsTable from '../components/cryptocurrency/cryptocurrency_details_page/DetailsTable';

describe('DetailsTable', () => {
    test('should render table with cryptocurrency details without convert values', () => {   
        const fakeDetailType = 'main';
        const fakeCryptocurrencyDetails = {name: 'Tether', symbol: 'USDT', cmc_rank: 3, circulating_supply: 30000, total_supply: 50000}; 
        const fakeCryptocurrencyDetailsLength = Object.values(fakeCryptocurrencyDetails).length;
    
        expect(fakeDetailType).toEqual('main');
    
        const {getAllByTestId} = render(<DetailsTable tableObject={fakeCryptocurrencyDetails} detailType={fakeDetailType}/>);
                  
        expect(getAllByTestId('detailsItem')).toHaveLength(fakeCryptocurrencyDetailsLength);
    });
    test('should render table with convert values for FIAT currency', () => {   
        const fakeDetailType = 'fiatCurrency';
        const fakeFiatCurrencyDetails = {price: 2000, volume_24h: 1000, market_cap: 300000, percent_change_1h: 0.1, percent_change_24h: 1.0, percent_change_7d: 10.0}; 
        const fakeFiatCurrencyDetailsLength = Object.values(fakeFiatCurrencyDetails).length;
    
        expect(fakeDetailType).toEqual('fiatCurrency');
    
        const {getAllByTestId} = render(<DetailsTable tableObject={fakeFiatCurrencyDetails} detailType={fakeDetailType}/>);
                  
        expect(getAllByTestId('detailsItem')).toHaveLength(fakeFiatCurrencyDetailsLength);
    });
    test('should render table with convert values for BTC currency', () => {   
        const fakeDetailType = 'bitcoin';
        const fakeBitcoinDetails = {price: 20000, percent_change_1h: 0.2, percent_change_24h: 2.0, percent_change_7d: 20.0}; 
        const fakeBitcoinDetailsLength = Object.values(fakeBitcoinDetails).length;
    
        expect(fakeDetailType).toEqual('bitcoin');
    
        const {getAllByTestId} = render(<DetailsTable tableObject={fakeBitcoinDetails} detailType={fakeDetailType}/>);
                  
        expect(getAllByTestId('detailsItem')).toHaveLength(fakeBitcoinDetailsLength);
    });
});
