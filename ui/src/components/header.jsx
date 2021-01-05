import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import CartContext from '../store/cart.store'
import './header.style.css'

function Header() {
    const store = useContext(CartContext)

    const totalPrice = store.cart.reduce((total, item) => {
        return total += item.price
    }, 0)

    return (
        <header className="header">
            <h1 className="header__title">Bike Shop</h1>
            <div className="header__cart">
                <div className="header__cart--resume">
                    <p className="badge">{store.cart.length}</p>
                    <FontAwesomeIcon icon={faShoppingCart} className="cart" />
                </div>

                Total: R$ {totalPrice}
            </div>
        </header>
    )
}

export default Header