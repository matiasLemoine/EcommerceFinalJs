//React
import { React } from "react";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Cascade Styled Sheets
import "./App.css";

//React Router DOM
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Pages
import Cart from "./pages/Cart/Cart";
import About from "./pages/About/About";
import Inicio from "./pages/Inicio/Inicio";
import Sabores from "./pages/Sabores/Sabores";
import Detalle from "./pages/Detalle/Detalle";
import Checkout from "./pages/Checkout/Checkout";
import Categorias from "./pages/Categorias/Categorias";

//Components
import NavBar from "./components/Navbar/NavBar";
import { CartProvider } from "./components/CartContext/CartContext";


function App() {
  return (
    <>
      <BrowserRouter>
       <CartProvider>
          <NavBar />
          <Switch>
            <Route path="/Inicio" exact component={Inicio} />
            <Route path="/Cart" exact component={Cart} />
            <Route path="/About" exact component={About} />
            <Route path="/Detalle/:id" exact component={Detalle} />
            <Route path="/Sabores/:sabor" exact component={Sabores} />
            <Route path="/Categorias/:category" exact component={Categorias} />
            <Route path="/Checkout" exact component={Checkout} />
          </Switch>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;