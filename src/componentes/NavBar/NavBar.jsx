import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { formatoMoneda } from "../../utils/utils";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
export default function NavBar({ token = false }) {

  const { total  } = useContext(CartContext);

  return (
    <div className="navbar-contenedor">
      <div className="navbar-titulo">
        <span>Pizzería Mamma Mia!</span>
      </div>
      <div className="menu">
        <div className="navbar-contenedor-botones">
          <Link to="/pizzeria.mammamia.github.io/">
            <Button variant="outline-light">Home</Button>
          </Link>
          {token ? (
            <>
              <Link to="/pizzeria.mammamia.github.io/profile">
                <Button variant="outline-light">Profile</Button>
              </Link>
              <Button variant="outline-light">Logout</Button>
            </>
          ) : (
            <>
              <Link to="/pizzeria.mammamia.github.io/login">
                <Button variant="outline-light">Login</Button>
              </Link>
              <Link to="/pizzeria.mammamia.github.io/register">
                <Button variant="outline-light">Register</Button>
              </Link>
            </>
          )}
        </div>

        <div className="navbar-contenedor-total">
          <Link to="/pizzeria.mammamia.github.io/cart">
            <Button variant="outline-primary">
              Total: ${formatoMoneda(total)}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
