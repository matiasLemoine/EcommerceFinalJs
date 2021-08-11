import React, { useState } from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCartContext } from "../CartContext/CartContext";

function ItemCount(props) {
  const [numero, setNumero] = useState(props.cantidad);
  const [cantidad, setCantidad] = useState(0);
  const { cart } = useCartContext();

  //Hook
  const handleIncrement = () => {
    if (numero > 0) {
      setNumero(numero - 1);
      setCantidad(cantidad + 1);
    }
  };
  const handleDecrement = () => {
    if (cantidad > 0) {
      setNumero(numero + 1);
      setCantidad(cantidad - 1);
    }
  };

  return (
    <Card className="App">
      <Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            Stock: {numero} Compra: {cantidad}
          </ListGroupItem>
        </ListGroup>
        <div className="container">
          <div className="row align-items-start">
              <div className="col">
                <Button onClick={handleDecrement} variant="outline-primary">
                  -
                </Button>
              </div>
              <div className="col">
                <Button onClick={handleIncrement} variant="outline-success">
                  +
                </Button>
              </div>
          </div>
        </div>

        <div className="cart-btn">
          <Button
            variant="primary"
            onClick={() => props.paramOnAdd(cantidad, props.id)}
            type="submit"
          >
            Agregar
          </Button>

          <Link className="Link" to="/Cart">
            <button disabled={cart.length === 0 ? true : false}>
              Procesar compra
            </button>
          </Link>
          <button
            disabled={cart.length === 0 ? true : false}
            onClick={() => props.paramClearCart()}
          >
            Eliminar carrito
          </button>
        </div>
      </Card.Body>
    </Card>
     
  );
}

export default ItemCount;