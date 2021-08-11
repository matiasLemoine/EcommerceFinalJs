import React from "react";

import cart from "../CartWidget/bCart.png";



function CartWidget() {
  return (
    <>
      <div>
        <img src={cart}  className="cart" alt="cart"/>
      </div>
    </>
  );
}

export default CartWidget;