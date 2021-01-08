class CheckoutService {
    async pay(cardNumber, cart) {
        const dataToSend = { cardNumber: cardNumber, products: JSON.stringify(cart) }

       try {

            const response = await fetch('http://localhost:4000/carts/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
            });
            
            const result = await response.json()

            if (result.status === 401) {
                throw new Error(result.message)
            }

            return result
       } catch (error) {
           throw error
       }
    }
}

export default new CheckoutService()