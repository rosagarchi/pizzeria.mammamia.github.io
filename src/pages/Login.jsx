import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { UserContext } from "../context/UserContext";

const urlApi = "http://localhost:5000/api/auth/login";

export default function Login() {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const { setToken } = useContext(UserContext);

  const login = () => {
    if (email.trim() === "" || contrasena.trim() === "") {
      alert("Debe completar todos los campos.");
    } else if (contrasena.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return false;
    } else {
      fetch(urlApi, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password: contrasena,
        }),
      })
        .then((respuesta) => {
          if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
          }
          return respuesta.json();
        })
        .then((data) => {
          setToken(data.token);
        }).catch((error) => {
          alert('Error de credenciales');
        });
    }
  };

  return (
    <div className="registro-contenedor">
      <div className="formulario-registro">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="Email"
              onChange={(el) => setEmail(el.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(el) => setContrasena(el.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="button" onClick={login}>
            Entrar
          </Button>
        </Form>
      </div>
    </div>
  );
}
