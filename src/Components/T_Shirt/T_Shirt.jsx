import React from 'react';
import './T_Shirt.css'
const T_Shirt = ({ tshirt, handleAddCart }) => {
  const { price, picture, name, gender } = tshirt;
  return (
    <div className="tShirtDiv">
      <img className="tshirt-image" src={picture} alt="" />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button onClick={() => handleAddCart(tshirt)}>Buy Now</button>
    </div>
  );
};

export default T_Shirt;