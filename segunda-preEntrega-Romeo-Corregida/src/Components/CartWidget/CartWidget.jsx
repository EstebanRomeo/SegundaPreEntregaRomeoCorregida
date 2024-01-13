import { useCartContext } from '../Context/CartContext'; // Ajusta la ruta al contexto de tu carrito
import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
  const { cart } = useCartContext(); // Ajusta según cómo obtienes el estado del carrito

  return (
    <div className="container">
      <button>
        Carrito {cart && <span className="badge bg-danger">{cart.length}</span>}
      </button>
      {cart && cart.length > 0 && (
        <div>
          <h3>Productos en el carrito:</h3>
          <ul>
            {cart.map(producto => (
              <li key={producto.id}>{producto.nombre}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CartWidget;