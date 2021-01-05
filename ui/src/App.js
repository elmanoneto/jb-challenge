import React, { useState } from 'react'

import Header from './components/header'
import Content from './components/content'
import CartContext from './store/cart.store'

function App () {
    
    const setCart = item => {
        state.cart.push(item)
        setState({ ...state, cart: [...state.cart] })
    }

    const initState = {
        cart: [],
        setCart: setCart
    }

    const [state, setState] = useState(initState)

    return (
        <CartContext.Provider value={state}>
            <Header />
            <Content />
        </CartContext.Provider>
    )
}

export default App