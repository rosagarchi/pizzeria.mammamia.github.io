import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { pizzaCart } from '../assets/js/pizzas'

export default function Cart() {

    const [cart, setCart] = React.useState(pizzaCart);

    const calcularTotal = (cart) => {
    return cart.reduce((total, pizza) => total + (pizza.price * pizza.count), 0);
    };

    const aumentar = (id) => {
        setCart(cart.map(p => p.id === id ? { ...p, count: p.count + 1 } : p));
    };

    const disminuir = (id) => {
        setCart(prevCart => 
         prevCart.map(p => {
        if (p.id === id) {
            if (p.count === 1) return p;
            return { ...p, count: p.count - 1 };
        }
      return p;
    })
  );
};

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
                <h4>Total: ${calcularTotal(cart)}</h4>
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
