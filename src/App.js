import React from "react";
import Header from "./components/Header/Header.jsx";
import Home from "./components/home/home.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/footer.jsx";
import Shopmain from "./components/shop/shopmain/main.jsx";
import ShoppingCard from "./components/shop/shopCard/shoppingCard.jsx";
import Plant_Care from "./components/plant care/plant.jsx";
import { Blogs } from "./components/blogs/blog.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shopmain />} />
          <Route path="/Plant_Care" element={<Plant_Care />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<h1>Error Code 404</h1>} />
          <Route path="/shoppingCard" element={<ShoppingCard/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;