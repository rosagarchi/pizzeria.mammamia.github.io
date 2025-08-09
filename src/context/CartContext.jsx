import { useContext, createContext, useState, useEffect } from "react";
import { UserContext } from "./UserContext";

export const CartContext = createContext();

const urlApi = "http://localhost:5000/api/checkouts";

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const { token } = useContext(UserContext);

  const calcularTotal = () => {
    if (cart.length) {
      const calculoTotal = cart.reduce(
        (total, pizza) => total + pizza.price * pizza.count,
        0
      );
      setTotal(calculoTotal);
    }
  };

  const agregarPizza = (pizza) => {
    const index = cart.findIndex((prod) => prod.id === pizza.id);
    let nuevoCart;

    if (index !== -1) {
      nuevoCart = [...cart];
      nuevoCart[index] = {
        ...nuevoCart[index],
        count: nuevoCart[index].count + pizza.count,
      };
    } else {
      nuevoCart = [...cart, { ...pizza }];
    }

    setCart(nuevoCart);
  };

  const aumentar = (id) => {
    setCart(cart.map((p) => (p.id === id ? { ...p, count: p.count + 1 } : p)));
  };

  const disminuir = (id) => {
    setCart((prevCart) =>
      prevCart.map((p) => {
        if (p.id === id) {
          if (p.count === 1) return p;
          return { ...p, count: p.count - 1 };
        }
        return p;
      })
    );
  };

  const pagar = () => {

    fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        cart,
      }),
    })
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        return respuesta.json();
      })
      .then((data) => {
        alert('Compra realizada con exito!.')
      })
      .catch((error) => {
        alert("Error de credenciales");
      });
  };

  useEffect(() => {
    calcularTotal();
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, agregarPizza, total, aumentar, disminuir, pagar }}
    >
      {children}
    </CartContext.Provider>
  );
}
