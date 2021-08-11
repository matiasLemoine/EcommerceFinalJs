import React, { useState, useEffect } from "react";

//Components
import ItemList from "../ItemList/ItemList";

//Data
import ItemData from "../ItemData/ItemData";
import { db } from "../Firebase/firebase";

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);
  const datosfirebase = [];
  const getItemData = () => {
    db.collection("ItemData").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        datosfirebase.push({ id: doc.id, ...doc.data() });
      });
      setItems(datosfirebase);
    });
  };

  //Use Effect
  useEffect(() => {
    setTimeout(() => {
      setItems(ItemData);
    }, 2000);
  });

  let objdato;

  if (props.elements !== "Destacado") {
    objdato = items.filter((item) => item.tag === props.elements);
  } else {
    objdato = items.filter((item) => item.destacado === true);
  }  
  return (
    <>
      <ItemList objeto={objdato} />
    </>
  );
};

export default ItemListContainer;