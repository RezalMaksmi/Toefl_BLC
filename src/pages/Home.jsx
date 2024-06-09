import React, { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";

import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAPIAct } from "../redux/fetch/Get";
import { CartProduct } from "../components";
import DashboardAdmin from "./admin/DashboardAdmin";
import LandingPage from "./LandingPage";

const Home = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, products, users } = useSelector((state) => state.getAPI);
  const [progress, setProgress] = useState(0);
  const getUserDataFromLocalStorage = () => {
    const getUser = localStorage.getItem("userData");
    return getUser ? JSON.parse(getUser) : {};
  };
  // const { token, role } = getUserDataFromLocalStorage();

  const { type, status, error, token } = useSelector((state) => state.auth);

  return (
    <div className="w-full">
      {type === "admin" && token ? (
        <DashboardAdmin />
      ) : (
        // <div className="flex flex-row flex-wrap gap-4 justify-center py-8 w-full">

        /* {products.map((item, key) => (
            <CartProduct
              key={item.id}
              image={item.image}
              name={item.name}
              description={item.description}
              id={item.id}
              onClick={() => handleDetail(item.id)}
            />
          ))} */

        // </div>
        <LandingPage />
      )}
    </div>
  );
};

export default Home;
