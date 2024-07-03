import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import {
  Home,
  LoginAdmin,
  HasilTest,
  EditSoal,
  LihatSoal,
  HomeAdmin,
} from "./pages";
import { Footer, Navbar } from "./components/index";
import { useDispatch, useSelector } from "react-redux";
import PesertaTest from "./pages/admin/PesertaTest";
import { ToastContainer } from "react-toastify";
import NotFound from "./pages/NotFound";

const Router = () => {
  const { user, loading } = useSelector((state) => state.auth);
  const token = localStorage.getItem("userToken");

  console.log("usernya apa", user);
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="*" element={<NotFound />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<LoginAdmin />} />
          <Route path="/dashboard" element={<HomeAdmin />} />
          <Route path="/hasil-test" element={<HasilTest />} />
          <Route path="/peserta-test" element={<PesertaTest />} />
          <Route path="/tambah-soal/:id" element={<EditSoal />} />
          <Route path="/lihat-soal" element={<LihatSoal />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
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
