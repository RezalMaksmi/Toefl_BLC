import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAPIAct } from '../redux/fetch/Get';
import { useParams } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const ProductDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const { loading, users } = useSelector((state) => state.getAPI);
    const [progress, setProgress] = useState(0);

    // function getApiByAct(url,id){
    //     if(id){
    //     const response = await fetch(url?id=id)
    //     const data = await response.json()
    //     return data
    //     }
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     return data
    //     }

    useEffect(() => {
        loading ? setProgress(100) : setProgress(40);
        const fetchData = async () => {
          try {
            if (id) {
                dispatch(getAPIAct(`http://localhost:8000/peserta/${id}`));
            }else{
                dispatch(getAPIAct("http://localhost:8000/peserta"));
            }
          } catch (error) {
            console.log("Error Fetching :",error);
          }
        };
        fetchData();
      }, []);










// =============================================
    // const featchDataCuy = async () => {
    // try {
    //   const productResponse = await axios.get(`http://localhost:2000/products/${id}`)
    //     setDataProduct(productResponse.data)
    //   console.log("respon", dataProduct)
      
    //     } catch (err) {
    //     console.log(err)
    //     }
    // }
    // useEffect(()  =>{
    //     featchDataCuy()
    // }, [])

    // useEffect(() => {
    //     loading ? setProgress(100) : setProgress(40);
    //     const fetchData = async () => {
    //       try {
    //         if (products.length === 0) {
    //         dispatch(getAPIAct(`http://localhost:2000/products/${id}`));
    //         }
    //       } catch (error) {
    //         console.log("Error Fetching :",error);
    //       }
    //     };
    //     fetchData();
    //   }, [dispatch]);


  return (
    <div className="w-full  container mx-auto py-8">
      {loading ? (
            <LoadingBar
              color="#f11946"
              progress={progress}
              onLoaderFinished={() => setProgress(0)}
            />
            ) : (
          
                <div key={users.id} className=" mx-10 flex flex-row flex-wrap gap-11 justify-start py-8 w-full ">
              
            
                 <div className="max-w-[500px] h-[300px] overflow-hidden bg-slate-500 rounded-lg">
                    <img className='w-full h-full object-cover' src={users.image} alt="" />
                 </div>
                 <div className="flex flex-col gap-3 h-auto justify-evenly">
                    <div className="flex flex-col">
                        <h1 className='text-4xl font-bold'>{users.name}</h1>
                        <span className='text-2xl'>{users.description}</span>
                        <span className='text-2xl'>{users.price}</span>
                        <span>====================</span>
                        <span className='text-2xl'>{users.user.username}</span>
                    </div>

                    {
                      console.table(users.user)
                    }

                    <button className='px-11 py-3 bg-green-800 max-w-fit hover:bg-green-950 text-white rounded-md'>Pesan Sekarang</button>
                 </div>
              
              </div>
            )}
    </div>
  )
}

export default ProductDetail
