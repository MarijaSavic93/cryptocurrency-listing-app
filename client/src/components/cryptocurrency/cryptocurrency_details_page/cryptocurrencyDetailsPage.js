import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCryptocurrencyErrorFromState, getCryptocurrencyFromState, getCryptocurrencyLoadingStatusFromState, getCryptocurrencyById } from "../../../redux/cryptocurrencySlice";
import { getFiatCurrencyForConversion } from "../../../redux/settingsSlice";
import { getRefreshCounter } from "../../../redux/refreshSlice";
import { useParams } from "react-router-dom";
import Title from "../Title";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import DetailTitle from "../DetailTitle";
import DetailsTable from "./DetailsTable";

const CryptocurrencyDetailsPage = () => {
    const { cryptocurrencyId } = useParams(); 
    const dispatch = useDispatch();

    const cryptocurrency = useSelector(getCryptocurrencyFromState);
    const cryptocurrencyLoading = useSelector(getCryptocurrencyLoadingStatusFromState);
    const cryptocurrencyError = useSelector(getCryptocurrencyErrorFromState);
    const selectedFiatCurrency = useSelector(getFiatCurrencyForConversion);
    const refresh = useSelector(getRefreshCounter);

    useEffect(() => {
        dispatch(getCryptocurrencyById({id: cryptocurrencyId, fiatCurrency: selectedFiatCurrency}));
    }, [dispatch, selectedFiatCurrency, refresh, cryptocurrencyId]);
    
    const objectExists = cryptocurrency.hasOwnProperty('quote');
    const objectCurrencyExists = cryptocurrency.quote?.hasOwnProperty(selectedFiatCurrency);

    if (cryptocurrencyLoading) {
      return <Spinner />;
    }
    if (cryptocurrencyError) {
      return <ErrorMessage message={cryptocurrencyError} />;
    }
    if(!cryptocurrency){
      return <ErrorMessage message={'Error - no data fetched'} />;
    }
    if(objectExists && objectCurrencyExists){
      const main = (({name, symbol, cmc_rank, circulating_supply, total_supply}) => ({name, symbol, cmc_rank, circulating_supply, total_supply}))(cryptocurrency);
      const bitcoin = cryptocurrency.quote.BTC;
      const fiatCurrency = cryptocurrency.quote[selectedFiatCurrency];

      return <> <Title title={`Details About ${cryptocurrency.name}`}/>
                <div className="my-class"> 
                  <div className="d-block w-50 mx-auto">
                      <DetailsTable tableObject={main} detailType={'main'} />
                      <DetailTitle text={`Values in ${selectedFiatCurrency}`} />
                      <DetailsTable tableObject={fiatCurrency} detailType={'fiatCurrency'} />
                      <DetailTitle text={'Values in BTC'} />
                      <DetailsTable tableObject={bitcoin} detailType={'bitcoin'} />
                  </div>
                </div>
              </>;
    }
    return null;   
}
export default CryptocurrencyDetailsPage;