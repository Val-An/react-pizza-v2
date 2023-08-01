import './scss/app.scss';
import React from "react";
import Header from "./Components/Header"
import Categories from "./Components/Categories";
import Sort from "./Components/Sort";
import PizzaBlock from "./Components/PizzaBlock";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              <PizzaBlock title={"Мексиканская"} price={150}/>
              <PizzaBlock title={"Гавайская"} price={130}/>
              <PizzaBlock title={"Сырная"} price={100}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
