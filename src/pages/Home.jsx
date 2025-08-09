import React, { useEffect, useState } from "react";
import Header from "../componentes/Header";
import CardPizza from "../componentes/CardPizza/CardPizza";
//import { pizzas } from "./assets/js/pizzas";

const urlApi = 'http://localhost:5000/api/pizzas'

export default function Home() {

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
               ingredients={pizza.ingredients}
        />  
        })}
      </div>
    </>
  );
}
