import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Home, LoginAdmin, Search, Product, DashboardAdmin } from "./pages";
import { Navbar } from "./components/index";
import { useDispatch, useSelector } from "react-redux";
import ProductDetail from "./pages/ProductDetail";

const Router = () => {
  const { loading, products } = useSelector((state) => state.getAPI);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search/:searchValue" element={<Search />} />
        <Route path="/product" element={<Product />} />
        <Route path="/:id" element={<ProductDetail />} />
        <Route path="/login" element={<LoginAdmin />} />
        <Route path="/dashboard" element={<DashboardAdmin />} />
      </Routes>
    </BrowserRouter>
  );
};
function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
