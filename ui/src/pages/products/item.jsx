import React, { Fragment, useContext } from 'react'

import CartContext from '../../store/cart.store'
import './list.styles.css'

function Item({ product, removeQuantityItem }) {
    const store = useContext(CartContext)

    const addToCart = ({ id, price, image }) => {
        store.setCart({ id: id, price: price, image: image })
    }

    return (
        <Fragment>
            <div className={`list__item ${product.quantity === 0 ? 'fade' : ''}`}>
                <p className="disponibility">{product.quantity} disponíveis</p>
                <img src={product.image} alt=""/>
                <h4>{product.name}</h4>
                <div className="buy">
                    <p className="price">R$ {product.price}</p>
                    <button 
                        className="btn-buy" 
                        onClick={() => { addToCart(product); removeQuantityItem(product.id) }} 
                        disabled={product.quantity < 1}>Add to cart
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default Item