import React, { useEffect, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import CartStore from '../../store/store'
import CheckoutService from '../../services/checkout.service'
import './checkout.styles.css'
import { observer } from 'mobx-react-lite'

function Checkout() {
    const cartStore = useContext(CartStore)
    const { getCart, totalProductsFromCart, checkout } = cartStore
    const history = useHistory()
    const [cardNumber, setCardNumber] = useState('')

    useEffect(() => {
        if (totalProductsFromCart === 0) {
            history.push('/')
        }
    }, [totalProductsFromCart])

    const payment = async (cardNumber, cart) => {
        try {
            const result = await CheckoutService.pay(cardNumber, cart)
            checkout()
            alert('Compra realizada com sucesso!')
        } catch (error) {
            console.log('error', error)
            alert('Cartão invalido!')
        }
    }

    return (
        <>
            <h1>Checkout</h1>
            <section className="payment">
                <form onSubmit={() => payment(cardNumber, getCart)} id="form-checkout">
                    <input 
                        type="text" 
                        placeholder="Insira o numero do cartao" 
                        value={cardNumber}
                        onChange={e => setCardNumber(e.target.value)}
                        className="payment__input-card" />
                    <button className="payment__button" onClick={() => payment(cardNumber, getCart)}>Pagar</button> 
                </form>
            </section>
        </>
    )
}

export default observer(Checkout)