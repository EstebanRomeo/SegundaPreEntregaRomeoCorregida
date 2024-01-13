import React from 'react';
import Item from '../Item/Item';
import '../ItemDetailContainer/EstilosItems.css';

const ItemList = ({ items }) => {
  if (!items || !Array.isArray(items) || items.length === 0) {
    return <p>No hay productos para mostrar.</p>;
  }

  return (
    <div className='container-item'>
      {items.map(item => (
        <div className='col-md-4' key={item.id}>
          <Item item={item} />
        </div>
      ))}
    </div>
  );
}

export default ItemList;
