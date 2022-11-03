import { useSelector, useDispatch } from "react-redux";
import { fiatCurrencies } from "../../../data/fiatCurrencies";
import { changeSettings, getFiatCurrencyForConversion } from "../../../redux/settingsSlice";
import '../../../css/add_cursor_list_item.css';

const SettingsDropdown = () => {
    const selectedFiatCurrency = useSelector(getFiatCurrencyForConversion);
    const dispatch = useDispatch();

    const handleClick = newSelectedFiatCurrency => {
        dispatch(changeSettings(newSelectedFiatCurrency));
    }

    return(
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="settingsDropdownMenu">
            <li><h6 className="dropdown-header">Choose a FIAT currency</h6></li>
            
            {fiatCurrencies.map((fiatCurrency) => fiatCurrency === selectedFiatCurrency ?
             <li key={fiatCurrency}><p className="dropdown-item text-muted m-0 pe-none ">{fiatCurrency}</p></li> :
             <li className="clickable-list-item" key={fiatCurrency} onClick={() => handleClick(fiatCurrency)}><p className="dropdown-item m-0 pe-auto">{fiatCurrency}</p></li>)}            
        </ul>
    );
}
export default SettingsDropdown;