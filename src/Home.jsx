import React from "react";
import Header from "./componentes/Header";
import CardPizza from "./componentes/CardPizza/CardPizza";
import { pizzas } from "./assets/js/pizzas";

export default function Home() {
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
