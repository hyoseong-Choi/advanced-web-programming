import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Carinfo from './pages/Carinfo';
import Userinfo from './pages/Userinfo';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Layout/>}>
      <Route index element = {<Home/>}/>
      <Route path = "carinfo" element = {<Carinfo/>}/>
      <Route path = "userinfo" element = {<Userinfo/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
