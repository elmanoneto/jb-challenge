import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'

import CartStore from '../store/store'
import './header.style.css'

function Header() {
    const history = useHistory()

    const cartStore = useContext(CartStore)
    const { totalProductsFromCart, totalPrice } = cartStore

    return (
        <header className="header">
            <h1 className="header__title" onClick={() => history.push('/')}>Bike Shop</h1>
            <div className="header__cart">
                <div className="header__cart--resume" onClick={() => history.push('/cart')}>
                    <p className="badge">{totalProductsFromCart}</p>
                    <FontAwesomeIcon icon={faShoppingCart} className="cart" />
                </div>

                Total: R$ {totalPrice}
            </div>
        </header>
    )
}

export default observer(Header)