import React from "react";
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import arrayProductos from '../Json/arrayProductos.json';
import ItemDetail from "../ItemDetail/ItemDetail";
import '../ItemDetailContainer/EstilosItems.css';

const ItemDetailContainer = () => {

        const [item, setItem] = useState([])
        const {id} = useParams();
     
     
       useEffect(()=>{
         const promesa = new Promise((resolve)=>{ 
          setTimeout(()=>{
                resolve(arrayProductos.find(item=> item.id === parseInt(id)))
          }, 1500)
        });
        promesa.then((data)=>{
            setItem(data)
        })
       }, [id])
     
      return(
         <div className='container-pizza-sola'>
           <div className='items'>
     
           <ItemDetail item={item} />
     
           </div>
         </div>
       );
     
     
     }
     
export default ItemDetailContainer;





    





