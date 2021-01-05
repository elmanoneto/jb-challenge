import { Router } from 'express'

import CartsController from './carts.controller'

const productsRouter: Router = Router()
const cartsController = CartsController

const ROUTER_NAME = '/carts'

productsRouter.post(ROUTER_NAME, cartsController.checkout)

export default productsRouter