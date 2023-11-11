import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const showProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="card" onClick={() => showProduct(item.id)}>
      <img src={item?.img} />
      <div className="choice">
        {item?.choice == true ? "Concious Choice" : ""}
      </div>
      <div>{item?.title}</div>
      <div>${item?.price}</div>
      <div className="new-product">{item?.new ? "New" : ""}</div>
    </div>
  );
};

export default ProductCard;
