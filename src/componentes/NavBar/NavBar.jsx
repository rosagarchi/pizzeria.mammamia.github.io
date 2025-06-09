import React from "react";
import Button from "react-bootstrap/Button";
import { formatoMoneda } from "../../utils/utils";

export default function NavBar({ token = false, total = 0 }) {
  return (
    <div className="navbar-contenedor">
      <div className="navbar-titulo">
        <span>Pizzería Mamma Mia!</span>
      </div>
      <div className="menu">
        <div className="navbar-contenedor-botones">
          <Button variant="outline-light">Home</Button>

          {token ? (
            <>
              <Button variant="outline-light">Profile</Button>
              <Button variant="outline-light">Logout</Button>
            </>
          ) : (
            <>
              <Button variant="outline-light">Login</Button>
              <Button variant="outline-light">Register</Button>
            </>
          )}
        </div>

        <div className="navbar-contenedor-total">
          <Button variant="outline-primary">
            Total: ${formatoMoneda(total)}
          </Button>
        </div>
      </div>
    </div>
  );
}
