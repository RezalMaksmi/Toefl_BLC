import React from 'react'
import { useParams } from "react-router-dom";

const Search = () => {
    const { searchValue } = useParams();
    return (
      <div>
        <span>Search :  {searchValue}</span>
       
      </div>
    )
}

export default Search
