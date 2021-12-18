import React from 'react';
// import logo from './logo.svg';
import './App.scss';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3002/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setPizzas(json.pizzas);
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
