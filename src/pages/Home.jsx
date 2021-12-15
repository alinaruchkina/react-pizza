import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';

function Home() {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(name) => console.log(name)}
          items={['Мясная', 'Вегетарианская', 'Гриль', 'Острая', 'Закрытая']}
        />
        <SortPopup items={['популярности', 'цене', 'алфавит']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items"></div>
      <PizzaBlock />
    </div>
  );
}

export default Home;
