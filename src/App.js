import React from "react";
import Header from "./components/Header/Header.jsx";
import Home from "./components/home/home.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/footer.jsx";
import Shopmain from "./components/shop/shopmain/main.jsx";
import ShoppingCard from "./components/shop/shopCard/shoppingCard.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shopmain />} />
          <Route path="*" element={<h1>Error Code 404</h1>} />
          <Route path="/shoppingCard" element={<ShoppingCard/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;