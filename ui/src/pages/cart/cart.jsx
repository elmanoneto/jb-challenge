import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'

import CartStore from '../../store/store'
import './cart.styles.css'

function Cart() {
    const history = useHistory()

    const cartStore = useContext(CartStore)
    const { getCart, getProducts, addProductToCart, removeProductFromCart, totalProductsFromCart } = cartStore

    const addToCart = (item) => {
        const activeProduct = getProducts.find(product => product.id === item.id)

        if (activeProduct.quantity === 0) {
            alert('Produto chegou ao limite do estoque.')
        } else {
            addProductToCart(item)
        }
    }

    return (
        <section className="cart">
            <h2>Carrinho</h2>
            {!getCart.length && <p>Carrinho vazio.</p>}
            
            {getCart.length > 0 && getCart.map(item => {
                return (
                    <div key={item.id} className="cart__wrapper">
                        <div className="cart__wrapper--image">
                            <img src={item.image} alt=""/>
                        </div>
                        <div className="cart__wrapper--details">
                            <p><strong>{item.name}</strong></p>
                            <p> Quantitdade: {item.quantity}</p>
                            <p> Total: {item.price}</p>
                        </div>
                        <div className="cart__wrapper--controls">
                            <p className="control" onClick={() => removeProductFromCart(item)}>-</p>
                            <input type="text" value={item.quantity} disabled/>
                            <p className="control" onClick={() => addToCart(item)}>+</p>
                        </div>
                    </div>
                )
            })}
            
            <div className="checkout">
                <p>Total de produtos: {totalProductsFromCart}</p>
                {totalProductsFromCart > 0 &&
                    <button onClick={() => history.push('/checkout')} id="pay-btn">
                        Pagar
                    </button>
                }
            </div>
        </section>
    )
}

export default observer(Cart)