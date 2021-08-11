import React, { useState, useEffect } from "react";

//Components
import ItemList from "../ItemList/ItemList";

//Data
import ItemData from "../ItemData/ItemData";

const ItemListFlavours = (props) => {
  const [items, setItems] = useState([]);

  //Use Effect
  useEffect(() => {
    setTimeout(() => {
      setItems(ItemData);
    }, 2000);
  });

  let objdato;

  if (props.elements !== "Sabor") {
    objdato = items.filter((item) => item.tag === props.elements);
  } else {
    objdato = items.filter((item) => item.sabor === true);
  }
  console.log("itemlistflavours", objdato);
  
  return (
    <>
      <ItemList objeto={objdato} />
    </>
  );
};

export default ItemListFlavours;
