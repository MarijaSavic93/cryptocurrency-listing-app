import CryptocurrencyListPage from './components/cryptocurrency/cryptocurrency_list_page/CryptocurrencyListPage';
import Navigation from './components/navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import CryptocurrencyDetailsPage from './components/cryptocurrency/cryptocurrency_details_page/cryptocurrencyDetailsPage';
import './css/cursor_none_all.css';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<CryptocurrencyListPage/>} />
        <Route path='/:cryptocurrencyId' element={<CryptocurrencyDetailsPage/>} />
      </Routes>
    </>
  );
}

export default App;
