import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from 'Features/Auth/Main';
import { Main as CMain } from 'Features/HttpOnlyCookie/Main';


function App() {
  return (
    <CMain />
  );
}

export default App;
