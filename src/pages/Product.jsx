import React from 'react'
import { Input } from '../components'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
    const [searchProduct, setSearchProduct] = useState("");
    const navigate = useNavigate();
  
    const handleInputChange = (e) => {
      setSearchProduct(e.target.value);
    };
    const handleSearch = () => {
        navigate(`/search/${searchProduct}`);
    }
  return (
    <div>
      
       <br />
       <div className="flex flex-row gap-2">
        <Input 
        placeholder="Search"
        value={searchProduct}
        onChange={handleInputChange}
        name="text"
        type="text"
        typeInput="InputWithIcon"
        />
        <button className='px-5 py-2 bg-green-800 rounded-md text-white' onClick={handleSearch}>Search</button>
       </div>
    </div>
  )
}

export default Product
