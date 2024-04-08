import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, LoginAdmin, Search, DashboardAdmin, ErrorPage } from "./pages";
import { Navbar } from "./components/index";
import ProductDetail from "./pages/ProductDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search/:searchValue" element={<Search />} />
        <Route path="/:id" element={<ProductDetail />} />
        <Route path="/login" element={<LoginAdmin />} />
        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/dashboard" element={<DashboardAdmin />} />
        <Route path="*" element={<ErrorPage />} />
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
