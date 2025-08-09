import React, { useState, useEffect } from "react";
import CardPizza from "../componentes/CardPizza/CardPizza";

const urlApi = "http://localhost:5000/api/pizzas/p001";

export default function Pizza() {
  const [pizza, setPizza] = useState(null);

  const fetchPizzas = () => {
    fetch(urlApi)
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
      />
    </div>
  );
}
