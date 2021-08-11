import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const Inicio = () => {
  return (
    <>
      <h2>Productos Destacados</h2>
      <div className="container">
        <div className="row align-items-start">
          <div className="row">
            <ItemListContainer elements={"Destacado"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;