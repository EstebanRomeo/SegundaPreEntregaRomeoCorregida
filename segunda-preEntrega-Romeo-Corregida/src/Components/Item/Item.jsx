import React from "react";
import { Link } from 'react-router-dom';
import "../ItemDetailContainer/EstilosItems.css"



const Item = ({item}) => {
    return (
        <Link to={'/item/' + item.id} className='text-decotarion-none'>
        <div className='items'>
            <div className= 'card border border-0'>
                <img src={item.img} className='card-img-top' alt={item.nombre} />
                <div className='card-body text-center'>
                    <h2 children='card-title1'>{item.nombre}</h2>
                </div>
            </div>
        </div>
        </Link>
    );

}

export default Item; 