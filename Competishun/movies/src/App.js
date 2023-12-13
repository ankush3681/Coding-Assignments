import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Favourite from './components/Favourite';
import Watchlist from './components/Watchlist';
import MovieDetail from './components/MovieDetail';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/favorite" element={<Favourite/>}/>
        <Route path="/watchlist" element={<Watchlist/>}/>
        <Route path="/home/:id" element={<MovieDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
