const DetailsTable = ({tableObject, detailType}) => {
    let tableBody;
    if(detailType === 'main'){
        tableBody = <><tr data-testid="detailsItem">
                        <td className="bg-dark fw-bold w-25 text-light">Name</td>
                        <td>{tableObject.name}</td>                
                       </tr>
                       <tr data-testid="detailsItem">
                        <td className="bg-dark fw-bold w-25 text-light">Rank</td>
                        <td>{tableObject.cmc_rank}</td>                
                       </tr>
                       <tr data-testid="detailsItem">
                        <td className="bg-dark fw-bold w-25 text-light">Symbol</td>
                        <td>{tableObject.symbol}</td>
                       </tr>
                       <tr data-testid="detailsItem">
                        <td className="bg-dark fw-bold w-25 text-light">Available Supply</td>
                        <td>{tableObject.circulating_supply}</td>
                       </tr>
                       <tr data-testid="detailsItem">
                        <td className="bg-dark fw-bold w-25 text-light">Total Supply</td>
                        <td>{tableObject.total_supply}</td>
                       </tr>
                    </>            
    }else if(detailType === 'fiatCurrency'){
        tableBody = <><tr data-testid="detailsItem">
                        <td className="bg-dark fw-bold w-25 text-light">Price</td>
                        <td>{tableObject.price}</td>                
                       </tr>
                       <tr data-testid="detailsItem">
                        <td className="bg-dark fw-bold w-25 text-light">24h Percent Change</td>
                        <td>{tableObject.percent_change_24h}</td>
                       </tr>
                       <tr data-testid="detailsItem">
                        <td className="bg-dark fw-bold w-25 text-light">1h Percent Change</td>
                        <td>{tableObject.percent_change_1h}</td>
                       </tr>
                       <tr data-testid="detailsItem">
                        <td className="bg-dark fw-bold w-25 text-light">7d Percent Change</td>
                        <td>{tableObject.percent_change_7d}</td>
                       </tr>
                       <tr data-testid="detailsItem">
                        <td className="bg-dark fw-bold w-25 text-light">24h Volume</td>
                        <td>{tableObject.volume_24h}</td>
                       </tr>
                       <tr data-testid="detailsItem">
                        <td className="bg-dark fw-bold w-25 text-light">Market Cap</td>
                        <td>{tableObject.market_cap}</td>
                       </tr>       
                    </>
    }else if(detailType === 'bitcoin'){
        tableBody = <><tr data-testid="detailsItem">
                        <td className="bg-dark fw-bold w-25 text-light">Price</td>
                        <td>{tableObject.price}</td>                
                       </tr>
                       <tr data-testid="detailsItem">
                        <td className="bg-dark fw-bold w-25 text-light">24h Percent Change</td>
                        <td>{tableObject.percent_change_24h}</td>
                       </tr>
                       <tr data-testid="detailsItem">
                        <td className="bg-dark fw-bold w-25 text-light">1h Percent Change</td>
                        <td>{tableObject.percent_change_1h}</td>
                       </tr>
                       <tr data-testid="detailsItem">
                        <td className="bg-dark fw-bold w-25 text-light">7d Percent Change</td>
                        <td>{tableObject.percent_change_7d}</td>
                       </tr>           
                    </>
    }
    return (<table className="table table-striped text-center">
                <tbody>{tableBody}</tbody>
            </table>);
}
export default DetailsTable;