import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ItemDetailContainer.scss';
import CartWidget from '../Cart/CartWidget';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const [quantity, setQuantity, , addToCart] = useState(1);

    const getItemDetail = async (id) => {
        try {
            const response = await fetch('/src/data.json');
            const data = await response.json();
            const selectedItem = data.find(producto => producto.id === id);
            setItem(selectedItem);
        } catch (error) {
            console.error('Error al obtener los detalles del producto:', error);
        }
    };

    useEffect(() => {
        getItemDetail(itemId);
    }, [itemId]);

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad: quantity,
        };

        addToCart(itemToCart);
    };

    return (
        <div className='items'>
            {item && (
                <>
                    <img src={item.thumbnail} alt={item.nombre} className="item-image" />
                    <div className='item-details'>
                        <p className='item-text'>{item.nombre}</p>
                        <p className='item-text'>Color:{item.color}</p>
                        <p className='item-text'>Talles:{item.talle}</p>
                        <p className='item-precio'>${item.precio}</p>
                    </div>
                    <div className="quantity-selector">
                        <button className="quantity-button" onClick={handleDecreaseQuantity}>-</button>
                        <span>{quantity}</span>
                        <button className="quantity-button" onClick={handleIncreaseQuantity}>+</button>
                    </div>
                    <button className="add-to-cart-button" onClick={handleAgregar}>Agregar al carrito</button>
                    <CartWidget cantidad={quantity} />
                </>
            )}
        </div>
    );
};

export default ItemDetailContainer;

