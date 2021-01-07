import { createContext } from 'react'

const CartContext = createContext({
    cart: [],
    products: [],
    setCart: () => {},
    setProducts: () => {}
})

export default CartContext