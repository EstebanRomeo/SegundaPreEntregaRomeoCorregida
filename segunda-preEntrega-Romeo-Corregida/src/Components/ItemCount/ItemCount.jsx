import React, { useEffect, useState } from "react";


const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));
	const decrease = () => {
		setCount(count - 1);
	};

	const increase = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return (
		<div className="counter">
			<button disabled={count <= 1} onClick={decrease} className="agregar">
				-
			</button>
			<span>  <h3> {count}</h3> </span>
			<button disabled={count >= stock} onClick={increase} className="agregar">
				+
			</button>
			
			<div>
				<button disabled={stock <= 0} onClick={() => onAdd(count)} className="agregar">
					Agregar al carrito
				</button>
			</div>
		</div>
	);
};

export default ItemCount;