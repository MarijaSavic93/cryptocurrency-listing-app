import { render } from '@testing-library/react';
import CryptocurrencyTableRow from '../components/cryptocurrency/cryptocurrency_list_page/CryptocurrencyTableRow';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { fireEvent } from '@testing-library/react';

test('should redirect and update history', () => {
    const fakeFiatCurrency = 'USD';
    const fakeCryptocurrencyItem = {id: 1,
        symbol: 'BTC',
        cmc_rank: 1,
        quote: {
            [fakeFiatCurrency]:{
                price: '20000',
                volume_change_24h: -0.123
            }
        }
    }
    const history = createMemoryHistory();

    const { getByTestId } = render(<Router location={history.location} navigator={history} >
            <table>
                <tbody>
                <CryptocurrencyTableRow cryptocurrency={fakeCryptocurrencyItem} fiatCurrency={fakeFiatCurrency} key={fakeCryptocurrencyItem.id} />
                </tbody>             
            </table>         
        </Router>);
    
    fireEvent.click(getByTestId('cryptocurrency'));
    expect(history.location.pathname).toBe(`/${fakeCryptocurrencyItem.id}`);
})