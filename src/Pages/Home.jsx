import React from "react";

import Categories from "../Components/Categories";
import Sort from "../Components/Sort";
import PizzaBlockSkeleton from "../Components/PizzaBlockSkeleton";
import PizzaBlock from "../Components/PizzaBlock";
import Pagination from "../Components/Pagination";

const getSessionStorage = {
  name: sessionStorage.getItem("popupValueName") || "популярности",
  sort: sessionStorage.getItem("popupValueSort") || "rating",
};

function Home({ searchValue }) {
  const [pizzasList, setPizzasList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeCategory, setActiveCategory] = React.useState(
    parseInt(sessionStorage.getItem("activeCategory")) || "",
  );
  const [popupValue, setPopupValue] = React.useState(getSessionStorage);
  const [currentPage, setCurrentPage] = React.useState(1);
  const limit = 4;
  // const pageLength = Math.ceil(pizzasList.length / limit);
  const pageLength = 3;

  React.useEffect(() => {
    setIsLoading(true);

    const sortBy = popupValue.sort.replace("-", "");
    const order = popupValue.sort.includes("-") ? "asc" : "desc";
    const search = searchValue ? `search=${searchValue}` : "";
    const category = activeCategory ? `category=${activeCategory}` : "";

    const url = new URL(`https://64cbe6b52eafdcdc85197485.mockapi.io/pizzas`);
    url.searchParams.append("search", searchValue);
    url.searchParams.append("page", currentPage);
    url.searchParams.append("limit", limit);
    url.searchParams.append("sortBy", sortBy);
    url.searchParams.append("order", order);
    url.searchParams.append("category", activeCategory);
    fetch(
      `https://64cbe6b52eafdcdc85197485.mockapi.io/pizzas?${search}&sortBy=${sortBy}&order=${order}&${category}&limit=${limit}&page=${currentPage}`,
    )
      .then((res) => res.json())
      .then((res) => {
        setPizzasList(res);
        setIsLoading(false);
      });
    window.scroll(0, 0);
  }, [activeCategory, popupValue, searchValue, currentPage]);

  const skeleton = [...new Array(6)].map((_, index) => (
    <PizzaBlockSkeleton key={index} />
  ));
  const pizzas = pizzasList
    //  --for static--
    // .filter((obj) =>
    //   obj.title.toLowerCase().includes(searchValue.toLowerCase()),
    // )
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
      <Pagination
        pageLength={pageLength}
        setCurrentPage={(num) => setCurrentPage(num)}
      />
    </div>
  );
}

export default Home;
