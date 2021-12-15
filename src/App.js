import React from 'react';
// import logo from './logo.svg';
import './App.scss';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3001/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setPizzas(json.pizzas);
      });
  }, []);
  console.log(pizzas);
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
