

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './Screen/HomeScreen';
import LaptopAcer from './Component/Laptop/LaptopAcer';
import LaptopAsus from './Component/Laptop/LaptopAsus';
import LaptopDell from './Component/Laptop/LaptopDell';
import LaptopHp from './Component/Laptop/LaptopHp';
import Promotion from './Component/Info/Promotion';
import Newproduct from './Component/Info/Newproduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<HomeScreen />} />
        <Route path='/LaptopAcer'  element={<LaptopAcer/>} />
        <Route path='/LaptopAsus' element={<LaptopAsus />} />
        <Route path='/LaptopDell' element={<LaptopDell />} />
        <Route path='/LaptopHp' element={<LaptopHp />} />
        <Route path='/Promotion' element={<Promotion />} />
        <Route path='/Newproduct' element={<Newproduct />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
