import React from "react";
import Item from '../Item/Item';
import "../ItemDetailContainer/EstilosItems.css"

const ItemList = ({item}) => {
    return (
        <div className='container-item'>
            {item.map(item =>
                <div className= 'col-md-1' key={item.id}>
                    <Item item={item} />
                </div>
                )}

        </div>

    );

}

export default ItemList;