import React, { useState, useEffect, useContext } from "react";
import CardPizza from "../componentes/CardPizza/CardPizza";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const urlApi = "http://localhost:5000/api/pizzas/";

export default function Pizza() {
  const { agregarPizza  } = useContext(CartContext);
  const [pizza, setPizza] = useState(null);
  const { id } = useParams();

  const fetchPizzas = () => {
    fetch(urlApi + id)
      .then((data) => {
        return data.json();
      })
      .then((pizzasData) => {
        setPizza(pizzasData);
      });
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  if (pizza === null) {
    return <div></div>;
  }

  return (
    <div className="contenedorpizza">
      <CardPizza
        name={pizza.name}
        img={pizza.img}
        price={pizza.price}
        ingredients={pizza.ingredients}
        detalleVisible={false}
        agregar={(pizzaSeleccionada) => agregarPizza(pizzaSeleccionada)}
      />
    </div>
  );
}
