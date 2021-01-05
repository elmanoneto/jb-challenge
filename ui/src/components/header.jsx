import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './header.style.css'

function Header() {
    return (
        <header className="header">
            <h1 className="header__title">Bike Shop</h1>
            <div className="header__cart">
                <div className="header__cart--resume">
                    <p className="badge">0</p>
                    <FontAwesomeIcon icon={faShoppingCart} className="cart" />
                </div>
            </div>
        </header>
    )
}

export default Header