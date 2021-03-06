import React from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.scss';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/cart" component={Cart} exact />
        <Route path="/" render={() => <Home items={pizzas} />} exact />
      </div>
    </div>
  );
}

export default App;
