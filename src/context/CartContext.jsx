import { useContext, createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

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

  useEffect(() => {
    calcularTotal();
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, agregarPizza, total, aumentar, disminuir }}>
      {children}
    </CartContext.Provider>
  );
}
