import CryptocurrencyTableRow from './CryptocurrencyTableRow';

const CryptocurrenciesTable = ({list, fiatCurrency}) => {
    const cryptocurrenciesTableRows = list.map(cryptocurrency => <CryptocurrencyTableRow cryptocurrency={cryptocurrency} fiatCurrency={fiatCurrency} key={cryptocurrency.id} />);

    return (
      <table className="table table-hover table-striped">
          <thead className="table-dark sticky-top">
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Symbol</th>
              <th scope="col">Price in {fiatCurrency}</th>
              <th scope="col">24h Change</th>
            </tr>
          </thead>
          <tbody>
            {cryptocurrenciesTableRows}
          </tbody>
        </table>
    );
  }
export default CryptocurrenciesTable;