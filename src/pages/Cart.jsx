import React, { useContext } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { pizzaCart } from '../assets/js/pizzas'
import { CartContext } from '../context/CartContext';

export default function Cart() {

  const { total, cart, aumentar, disminuir } = useContext(CartContext);


  return (
     <Container style={{ marginBottom: '5rem', width: '700px'}}>
        <Row>
            <Col>
                <h4 style={{marginTop: '3rem'  }}>Detalles del pedido:</h4>
            </Col>
        </Row>

        {cart.map(pizza => {
           return <Row className= "align-items-center mb-1" key={pizza.id}>
            <Col xs="auto">
                <div className="imagen-carrito">
                    <img className="img-fluid rounded" src={pizza.img}/>

                </div>
            </Col>
             <Col className='namepizza'>
               <p className='nombre'>{pizza.name}</p>
             </Col>
               <Col>
               <div className='contenedor-precio'>
               <div className='precio'>
                 <p>${pizza.price}</p>
               </div>
                <div className="contador">
                    <Button variant='danger' onClick={() => disminuir(pizza.id)} >-</Button>
                    <div className="cantidad">{pizza.count}</div>
                    <Button variant='danger' onClick={() => aumentar(pizza.id)}>+</Button>
                </div>
                </div>
               </Col>
        </Row>
        })}
        

        <Row>
            <Col>
                <h4>Total: ${total}</h4>
            </Col>
        </Row>


        <Row>
            <Col>
                <Button variant='dark'>Pagar</Button>
            </Col>
        </Row>
        
        
     </Container>
  )
}
