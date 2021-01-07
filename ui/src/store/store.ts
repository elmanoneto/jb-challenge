import { createContext } from 'react'
import { observable, computed, makeObservable, action, toJS } from 'mobx'

class CartStore {
    @observable.shallow
    public cart: any = []

    @observable.deep
    public products: any = []


    constructor () {
        makeObservable(this)
    }

    @action.bound
    setProducts (data: any) {
        this.products = [ ...data.products ]
    }

    @action.bound
    addProductToCart (item: any) {
        const activeProduct = this.products.find((product: any) => item.id === product.id)

        const itemCart = this.cart.find((product: any) => product.id === item.id)

        if (itemCart) {
            this.cart = this.cart.map((product: any) => {
                if (product.id === item.id) {
                    product.quantity += 1
                    product.price += activeProduct.price
                }

                return product
            })
        } else {
            this.cart.push({ ...item, quantity: 1 })
        }

        this.decreaseProduct(item)
    }

    @action.bound
    removeProductFromCart (item: any) {
        const activeProduct = this.products.find((product: any) => item.id === product.id)

        const products = this.cart.map((product: any) => {
            if (product.id === item.id) {
                product.quantity -= 1
                product.price -= activeProduct.price
            }

            return product
        })
        .filter((product: any) => product.quantity > 0)

        this.cart = products

        this.increaseProduct(item)
    }

    decreaseProduct(product: any) {
        this.products = this.products.map((item: any) => {
            if (item.id === product.id) {
                item.quantity -= 1
            }

            return item
        })
    }

    increaseProduct(product: any) {
        this.products = this.products.map((item: any) => {
            if (item.id === product.id) {
                item.quantity += 1
            }

            return item
        })
    }
    
    @computed
    get getCart () {
        return toJS(this.cart)
    }

    @computed
    get getProducts () {
        return toJS(this.products)
    }

    @computed
    get totalProductsFromCart () {
        return this.cart.reduce((total: Number, product: any) => total += product.quantity, 0)
    }

    @computed
    get totalPrice () {
        return this.cart.reduce((total: Number, product: any) => total += product.price, 0)
    }

}

export default createContext(new CartStore())