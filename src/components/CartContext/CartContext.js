import React, { createContext, useState, useContext } from "react";

//Components

//Context Create
export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

// Provider
export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);
  let objeto;

  const addToCart = (cantidad, obj) => {
    objeto = cart.find((item) => item.id === obj.id);

    if (objeto == null) {
      setCart((prev) => [...prev, { ...obj, cantidad }]);
    } else {
      objeto.cantidad = objeto.cantidad + cantidad;
    }
  };

  const deletedToCart = (id) => {
    const copy = [...cart];
    const index = copy.findIndex((x) => x.id === id);
    if (index !== -1) {
      copy.splice(index, 1);
      setCart(copy);
    }
  };
  
  // Context Return
  return (
    <>
      <CartContext.Provider
        value={{ cart, setCart, clearCart, addToCart, deletedToCart }}
      >
        {props.children}
      </CartContext.Provider>
    </>
  );
};
