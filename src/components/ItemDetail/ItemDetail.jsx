import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const ItemDetail = ({ id, nombre, precio, img, stock}) => {
    const [agregarCantidad, setAgregarCantidad] = useState (0);

    //useContext: 
    const { agregarProducto } = useContext(CartContext);

    const handleCantidad =(cantidad)=>{
        setAgregarCantidad(cantidad);
        const item = { id, nombre, precio };
        agregarProducto(item, cantidad);
    }
    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3>ID: {id} </h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, accusantium. </p>
            <img src={img} alt={nombre} />
            {
                agregarCantidad > 0 ? (<Link to='/cart' > Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={handleCantidad} />)
            }
        </div>
    )
}

export default ItemDetail