import React from 'react';
// import logo from './logo.svg';
import './App.scss';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/cart" component={Cart} exact />
          <Route path="/" component={Home} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;
