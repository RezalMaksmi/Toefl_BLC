import React, { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar"

import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { getAPIAct } from "../redux/fetch/Get";
import { CartProduct } from "../components";
import DashboardAdmin from "./DashboardAdmin";


const Home = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, products,users } = useSelector((state) => state.getAPI);
  const [progress, setProgress] = useState(0);
  const getUserDataFromLocalStorage = () => {
    const getUser = localStorage.getItem("userData");
    return getUser ? JSON.parse(getUser) : {};
  };
  const { token, role } = getUserDataFromLocalStorage();

  useEffect(() => {
    loading ? setProgress(100) : setProgress(40);
    const fetchData = async () => {
      try {
        if (id) {
            console.log("ada id")
            dispatch(getAPIAct(`http://localhost:2000/products/${id}`));
        }else{
            dispatch(getAPIAct("http://localhost:2000/products"));
        }
      } catch (error) {
        console.log("Error Fetching :",error);
      }
    };
    fetchData();
  }, []);

  // console.log(products)
 
 
 
  // fetch api 
 

  // const featchDataCuy = async () => {
  //   try {
  //     const productResponse = await axios.get("http://localhost:2000/products")
  
  //     console.log("respon"+productResponse)
      
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  // useEffect(()  =>{
  //   featchDataCuy()
  // }, [])
  const handleDetail = (id) => {
    navigate(`/${id}`);
}

console.log(role)

  return (
    <div className="w-full">
      {
        role === "admin" && token ? (  
          <DashboardAdmin />
        ):( 
          <div className="flex flex-row flex-wrap gap-4 justify-center py-8 w-full">
          {products.map((item, key) => (
            <CartProduct 
              key={item.id}
              image={item.image}
              name={item.name}
              description={item.description}
              id={item.id}
              onClick={() => handleDetail(item.id)}
            />
          ))}
          </div>
        )
      }
          
    </div>
  )
}

export default Home
