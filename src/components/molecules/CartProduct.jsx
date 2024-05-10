import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const CartProduct = (props) => {
  const { key, image, name, description, onClick, id } = props;

  const navigate = useNavigate();

  return (
    <div
      key={key}
      onClick={onClick}
      className="max-w-[300px] w-full overflow-hidden bg-white shadow-md rounded-sm cursor-pointer"
    >
      <img src={image} alt="" className="w-full h-[160px] object-cover" />
      <div className="flex flex-col mx-2 my-3">
        <h1 className="font-semibold">{name}</h1>
        <h1 className="text-xs">{description}</h1>
      </div>
    </div>
  );
};

export default CartProduct;
