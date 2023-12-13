import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Calorie from './components/Calorie';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/recipe" element={<Home/>} />
        <Route path="/calorie" element={<Calorie/>} />
      </Routes>
    </div>
  );
}

export default App;
