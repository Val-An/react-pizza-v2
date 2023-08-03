import './scss/app.scss';
import React from "react";
import Header from "./Components/Header"
import Categories from "./Components/Categories";
import Sort from "./Components/Sort";
import PizzaBlock from "./Components/PizzaBlock";
import pizzas from "./assets/pizzas.json"


function App() {
  const [pizzasList, setPizzasList] = React.useState([])
  React.useEffect(() => {
    fetch("https://64cbe6b52eafdcdc85197485.mockapi.io/pizzas")
      .then(res => res.json())
      .then(res => setPizzasList(res))
  }, [])

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
              {pizzasList.map((elem) => (
                <PizzaBlock {...elem} key={elem.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
