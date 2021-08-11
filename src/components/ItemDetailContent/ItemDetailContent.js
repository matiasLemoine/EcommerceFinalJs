import React, { useState, useEffect } from "react";

//Components
import ItemDetail from "../ItemDetail/ItemDetail";

//Data
import ItemData from "../ItemData/ItemData";
import { db } from "../Firebase/firebase";

function ItemDetailContent(props) {
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

  let objeto;

  objeto = items.filter((item) => item.id === props.identificador);

  return (
    <>
      {objeto.map((item) => (
        <div className="col" key={item.id}>
          <ItemDetail
            imagen={item.imagen}
            tit={item.title}
            desc={item.descripcion}
            cant={item.cantidad}
            id={item.id}
            price={item.price}
            category={item.category}
          />
        </div>
      ))}
    </>
  );
}

export default ItemDetailContent;