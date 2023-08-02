import React from "react";

function Categories() {
  const categories =  ["Все", "Мясные", "Вегетарианская" , "Гриль", "Острые", "Закрытые"]
  const [activeCategory, setActiveCategory] = React.useState(parseInt(localStorage.getItem("activeCategory")))
  const onClickActiveCategory = (i) => {
    setActiveCategory(i)
    localStorage.setItem("activeCategory", i)
  }

  return(
    <div className="categories">
      <ul>
        {categories.map((value, i) => {
          return <li key={i} onClick={() => onClickActiveCategory(i)} className={activeCategory === i ? "active" : ""}>{value}</li>
        })}
      </ul>
    </div>
  )
}

export default Categories