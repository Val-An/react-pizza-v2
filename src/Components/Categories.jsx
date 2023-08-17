import React from "react";

function Categories({ activeCategory, setActiveCategory }) {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const onClickActiveCategory = (id) => {
    setActiveCategory(id);
    sessionStorage.setItem("activeCategory", id);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => {
          return (
            <li
              key={i}
              onClick={() => onClickActiveCategory(i)}
              className={activeCategory === i ? "active" : ""}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
