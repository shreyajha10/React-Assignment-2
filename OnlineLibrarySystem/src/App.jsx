import React from 'react';
//import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

import { Provider } from 'react-redux';
import store from './utils/store';
// import './styles/App.css';
// import ".../style.css";
import { Outlet } from 'react-router-dom';
const App = () => {
  return (
   
    <>
    <Provider store={store}>
    <Navbar/>
    <Outlet/>
    </Provider>
    
    </>
  );
};

export default App;
