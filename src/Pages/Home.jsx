import React from "react";

import Categories from "../Components/Categories";
import Sort from "../Components/Sort";
import PizzaBlockSkeleton from "../Components/PizzaBlockSkeleton";
import PizzaBlock from "../Components/PizzaBlock";

const getSessionStorage = () => {
  return {
    name: sessionStorage.getItem("popupValueName"),
    sort: sessionStorage.getItem("popupValueSort"),
    order: sessionStorage.getItem("popupValueOrder"),
  };
};

function Home({ searchValue }) {
  const [pizzasList, setPizzasList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [activeCategory, setActiveCategory] = React.useState(
    parseInt(sessionStorage.getItem("activeCategory")) || 0,
  );
  const [popupValue, setPopupValue] = React.useState({
    name: "популярности",
    sort: "rating",
    order: "desc",
  });

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://64cbe6b52eafdcdc85197485.mockapi.io/pizzas?category=${activeCategory}&sortBy=${popupValue.sort}&order=${popupValue.order}`,
    )
      .then((res) => res.json())
      .then((res) => {
        setPizzasList(res);
        setIsLoading(false);
      });
    window.scroll(0, 0);
  }, [activeCategory, popupValue]);

  const skeleton = [...new Array(6)].map((_, index) => (
    <PizzaBlockSkeleton key={index} />
  ));
  const pizzas = pizzasList
    .filter((obj) =>
      obj.title.toLowerCase().includes(searchValue.toLowerCase()),
    )
    .map((elem) => <PizzaBlock {...elem} key={elem.id} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={(id) => setActiveCategory(id)}
        />
        <Sort
          popupValue={popupValue}
          setPopupValue={(elem) => setPopupValue(elem)}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : pizzas}</div>
    </div>
  );
}

export default Home;
