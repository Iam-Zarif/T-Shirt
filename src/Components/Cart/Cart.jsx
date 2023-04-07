import React from 'react';

const Cart = ({ cart, handleRemoveCart }) => {
    console.log(cart)
    let message;
    if(cart.length === 0){
        message=<p>PLease select something</p>
    }
  return (
    <div>
      <h2>Order Summary : {cart.length}</h2>
      {message}
      {cart.length < 2 ? <p>Fokira</p> : <p>Valo chele</p>}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveCart(tshirt._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;