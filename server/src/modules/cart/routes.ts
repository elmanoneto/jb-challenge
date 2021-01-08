import { Router } from 'express'

import CartsController from './carts.controller'

const productsRouter: Router = Router()
const cartsController = CartsController

const ROUTER_NAME = '/carts'

productsRouter.post(`${ROUTER_NAME}/checkout`, cartsController.checkout)
productsRouter.get(ROUTER_NAME, cartsController.index)

export default productsRouter