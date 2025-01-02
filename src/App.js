import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  LoginAdmin,
  HasilTest,
  LihatSoal,
  ActiveTest,
  AdminSetting,
  LoginPeserta,
  HomePeserta,
  TestPeserta,
  ProfilePeserta,
  AllPeserta,
  AdminQuist,
  StartTestPeserta,
} from "./pages";
import { Footer, Navbar } from "./components/index";
import PesertaTest from "./pages/admin/PesertaTest";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./pages/NotFound";

const Router = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="*" element={<NotFound />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/dashboard" element={<AllPeserta />} />
          <Route path="/hasil-test" element={<HasilTest />} />
          <Route path="/peserta-test" element={<PesertaTest />} />
          <Route path="/tambah-soal/:id" element={<AdminQuist />} />
          <Route path="/lihat-soal/:id_soal" element={<LihatSoal />} />
          <Route path="/activated-test" element={<ActiveTest />} />
          <Route path="/admin-setting" element={<AdminSetting />} />

          {/* routes for peserta */}
          <Route path="/login-peserta" element={<LoginPeserta />} />
          <Route path="/dashboard-peserta" element={<HomePeserta />} />
          <Route path="/test-peserta/:test" element={<TestPeserta />} />
          <Route path="/start-peserta/:test" element={<StartTestPeserta />} />
          <Route path="/profile-peserta" element={<ProfilePeserta />} />
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
