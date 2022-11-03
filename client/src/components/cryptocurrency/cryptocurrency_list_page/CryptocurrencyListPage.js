import Title from "../Title";
import CryptocurrenciesTable from "./CryptocurrenciesTable";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCryptocurrenciesErrorFromState, getCryptocurrenciesFromState, getCryptocurrenciesLoadingStatusFromState, getCryptocurrencyList } from "../../../redux/cryptocurrenciesSlice";
import { getFiatCurrencyForConversion } from "../../../redux/settingsSlice";
import { getRefreshCounter } from "../../../redux/refreshSlice";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import '../../../css/cryptocurrencies_table.css';
const CryptocurrencyListPage = () => {
    const dispatch = useDispatch();

    const cryptocurrencyList = useSelector(getCryptocurrenciesFromState);
    const cryptocurrencyListLoading = useSelector(getCryptocurrenciesLoadingStatusFromState);
    const cryptocurrencyListError = useSelector(getCryptocurrenciesErrorFromState);
    const selectedFiatCurrency = useSelector(getFiatCurrencyForConversion);
    const refresh = useSelector(getRefreshCounter);

    useEffect(() => {
        dispatch(getCryptocurrencyList(selectedFiatCurrency));
    }, [dispatch, selectedFiatCurrency, refresh]);  

    const objectExists = cryptocurrencyList.some(cryptocurrencyObject => cryptocurrencyObject.quote.hasOwnProperty(selectedFiatCurrency));

    if (cryptocurrencyListLoading) {
        return <Spinner />;
    }
    if (cryptocurrencyListError) {
        return <ErrorMessage message={cryptocurrencyListError}/>;
    }
    if(!cryptocurrencyList || cryptocurrencyList.length === 0){
        return <ErrorMessage message={'Cryptocurrency list top 100 - no data fetched'}/>;
    }
    if(objectExists){
        return <> <Title title={'Cryptocurrency List - Top 100'} />
                  <div className="table-height"> 
                    <div className="d-block mh-100 w-50 mx-auto mb-3 overflow-auto">
                        <CryptocurrenciesTable list={cryptocurrencyList} fiatCurrency={selectedFiatCurrency} />
                    </div>
                  </div>
                </>;
    } 
    return null;
}
export default CryptocurrencyListPage;