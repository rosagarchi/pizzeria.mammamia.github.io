import React from "react";
import Header from "./componentes/Header";
import CardPizza from "./componentes/CardPizza/CardPizza";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home-contenedor">
        <CardPizza
          name="Pizza Napolitana"
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9
080-784dcc87ec2c"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
        />

        <CardPizza
          name="Pizza Española"
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-
a1c6-8c57bc388fab"
          price={6950}
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
        />

        <CardPizza
          name="Pizza Pepperoni"
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-
ac54-90f6c31eb3e3"
          price={6950}
          ingredients={["mozzarella", "pepperoni", "orégano"]}
        />
      </div>
    </>
  );
}
