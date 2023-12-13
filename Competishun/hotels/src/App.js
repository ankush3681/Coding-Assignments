import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
