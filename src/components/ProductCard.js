import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div>
        <img src={item?.img}/>
        <div>{item?.choice == true? "Concious Choice" : ""}</div>
        <div>{item?.title}</div>
        <div>${item?.price}</div>
        <div>{item?.new == true? "New" : ""}</div>
    </div>
  )
}

export default ProductCard