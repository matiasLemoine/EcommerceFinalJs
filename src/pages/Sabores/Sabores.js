import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListFlavours from "../../components/ItemListFlavours/ItemListFlavours";

const Sabores = ({ match }) => {

  return (
    <>
      <h2>{match.params.id}</h2>
      <div className="container">
        <div className="row align-items-start">
          <div className="row">
            <ItemListFlavours identificador={match.params.sabor} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sabores;