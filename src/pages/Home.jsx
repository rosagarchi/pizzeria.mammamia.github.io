import React, { useContext, useEffect, useState } from "react";
import Header from "../componentes/Header";
import CardPizza from "../componentes/CardPizza/CardPizza";
import { CartContext } from "../context/CartContext";
//import { pizzas } from "./assets/js/pizzas";

const urlApi = 'http://localhost:5000/api/pizzas'

export default function Home() {

  const { agregarPizza  } = useContext(CartContext);
  const [pizzas, setPizzas] = useState([]);

  const fetchPizzas = () => {
    fetch(urlApi).then((data) => {
      return data.json();
    }).then((pizzasData) => {
      setPizzas(pizzasData);
    })
  }

  useEffect(() => {
    fetchPizzas();
  },[]);


  return (
    <>
      <Header />
      <div className="home-contenedor">
        {pizzas.map(pizza => {
            return <CardPizza
               name={pizza.name}
               img={pizza.img}
               price={pizza.price}
               id={pizza.id}
               ingredients={pizza.ingredients}
               agregar={(pizzaSeleccionada) => agregarPizza(pizzaSeleccionada)}
        />  
        })}
      </div>
    </>
  );
}
