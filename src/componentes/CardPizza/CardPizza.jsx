import React from 'react';
import { CardLink, CardSubtitle } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { formatoMoneda } from '../../utils/utils';
import { Link } from 'react-router-dom';

export default function CardPizza({ name, price, ingredients, img,id, agregar, detalleVisible }) {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
        <div className="card-titulo">
            <Card.Title>{name}</Card.Title>
        </div>
        <div className="card-detalle">
        <CardSubtitle>Ingredientes:</CardSubtitle>
        <Card.Text>
            {ingredients.join()}
        </Card.Text>
        </div>
        <div className="card-contenedor-botones">
            <div className="card-contenedor-precio">
                <span>Precio: ${formatoMoneda(price)}</span>
            </div>
            <div className="card-botones">
                {detalleVisible && 
                <Link to={`/pizzeria.mammamia.github.io/pizza/${id}`}>
                    <Button variant="outline-dark">Ver Más</Button>
                </Link>
                }
                <Button variant="dark" onClick={() => agregar({
                    name,
                    price,
                    ingredients,
                    img,
                    id,
                    count: 1,
                })}>Añadir</Button>
            </div>
        </div>
        </Card.Body>
    </Card>
  )
}
