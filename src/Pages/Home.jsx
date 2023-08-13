import React from "react";

import Categories from "../Components/Categories";
import Sort from "../Components/Sort";
import PizzaBlockSkeleton from "../Components/PizzaBlockSkeleton";
import PizzaBlock from "../Components/PizzaBlock";

function Home() {
  const [pizzasList, setPizzasList] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  const [activeCategory, setActiveCategory] = React.useState(parseInt(sessionStorage.getItem("activeCategory")) || 0)
  const [popupValue, setPopupValue] = React.useState(
    {name: sessionStorage.getItem("popupValueName"), sort: sessionStorage.getItem("popupValueSort")}
    || {name: "популярности", sort: "rating"}
  )



  React.useEffect(() => {
    setIsLoading(true)
    fetch(`https://64cbe6b52eafdcdc85197485.mockapi.io/pizzas?category=${activeCategory}&sortBy=${popupValue.sort}`)
      .then(res => res.json())
      .then(res => {
        setPizzasList(res)
        setIsLoading(false)
      })
    window.scroll(0, 0)
  }, [activeCategory, popupValue])

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={activeCategory} setActiveCategory={(id) => setActiveCategory(id)}/>
        <Sort popupValue={popupValue} setPopupValue={(elem) => setPopupValue(elem)}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <PizzaBlockSkeleton key={index}/>)
          : pizzasList.map((elem) => <PizzaBlock {...elem} key={elem.id}/>)
        }
      </div>
    </div>
  )
}

export default Home