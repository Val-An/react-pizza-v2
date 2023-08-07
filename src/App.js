import './scss/app.scss';
import React from "react";
import Header from "./Components/Header"
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Components/Cart";

function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
        <Routes>
          <Route path={"/"} element={<Home />}/>
          <Route path={"/cart"} element={<Cart />}/>
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
