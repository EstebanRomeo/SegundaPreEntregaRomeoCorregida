import React from "react";
import "./EstilosPizza.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div className="pizza-container">
      <div className="pizza-item">
        <div className="pizza-descrip">
          <h3>{item.nombre}</h3>
          <img src={item.img} className="4" alt={item.nombre} />
          <p className="item-ingred">
            Ingredientes: <br></br>
            <mark>{item.ingredientes}</mark>
          </p>
          <p className="item-precio">$ {item.precio}</p>
          <p>Cantidad: {item.cantidad}</p>
          <ItemCount initial={1} stock={item.cantidad} onAdd={(count) => console.log(count)} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;