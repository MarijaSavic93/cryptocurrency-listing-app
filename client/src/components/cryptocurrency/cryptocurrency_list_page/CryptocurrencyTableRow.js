import { useNavigate } from 'react-router-dom';
import '../../../css/add_cursor_table_row.css';

const CryptocurrencyTableRow = ({cryptocurrency, fiatCurrency}) => {
    const navigate = useNavigate();
    const handleClick = (cryptocurrencyId) => navigate(`/${cryptocurrencyId}`);

    return (       
    <tr className="clickable-table-row" data-testid="cryptocurrency" onClick={() => handleClick(cryptocurrency.id)}>
      <th scope="row">{cryptocurrency.cmc_rank}</th>
      <td>{cryptocurrency.symbol}</td>
      <td>{cryptocurrency.quote[fiatCurrency].price}</td>
      <td>{cryptocurrency.quote[fiatCurrency].volume_change_24h}</td>
    </tr>);
}
export default CryptocurrencyTableRow;