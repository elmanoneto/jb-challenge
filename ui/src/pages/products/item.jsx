import React, { Fragment, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'

import CartStore from '../../store/store'
import './list.styles.css'

function Item({ product }) {
    const cartStore = useContext(CartStore)
    const { addProductToCart } = cartStore
    const history = useHistory()

    return (
        <Fragment>
            <div className={`list__item ${product.quantity === 0 ? 'fade' : ''}`}>
                <p className="disponibility">{product.quantity} disponíveis</p>
                <img src={product.image} alt="" onClick={() => history.push(`/products/${product.id}`)}/>
                <h4>{product.name}</h4>
                <div className="buy">
                    <p className="price">R$ {product.price}</p>
                    <button 
                        className="btn-buy" 
                        onClick={() => { addProductToCart(product) }} 
                        disabled={product.quantity < 1}>Add to cart
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default observer(Item)