import "./scss/app.scss";
import React from "react";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import CartEmpty from "./Pages/CartEmpty";
import NotFound from "./Pages/NotFound";

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="App">
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="content">
          <Routes>
            <Route index element={<Home searchValue={searchValue} />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/cart-empty"} element={<CartEmpty />} />
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
